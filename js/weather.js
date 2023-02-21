//날씨 api 당겨오기
const castBox=document.querySelector("#castBox");
let statusText,rainIcon;
rainIcon=[
    '<i class="bi bi-brightness-high-fill"></i>',
    '<i class="bi bi-cloud-drizzle-fill"></i>',
    '<i class="bi bi-cloud-haze-fill"></i>',
    '<i class="bi bi-cloud-snow-fill"></i>',
    '<i class="bi bi-cloud-lightning-rain-fill"></i>'
];
let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/"; /*URL*/
let params = {
    type:['getUltraSrtNcst','getVilageFcst'],//(초단기실황)(단기예보)
    key:"3NVhpSRT0O0siIH2KcrZSpgHjLx5mrRimZu1GnMr6XORd6Oy%2B7AtFpfp3OOYpjtq5WRWfhSrnKNmvhy9ZdnVjQ%3D%3D",
    pageNo:'1',
    numOfRows:'1000',
    dataType:'JSON',
    base_date:now,
    base_time:'0600',
    nx:'67',
    ny:'101',
}

url = `${url}${params.type[0]}?serviceKey=${params.key}&pageNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`


async function getPosts(){
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

setPosts();
async function setPosts(){
    const posts = await getPosts();
    const datas = posts.response.body.items.item;
    //동적요소생성
    const castEl = document.createElement('table');
    castEl.classList.add('table');
    const tr = document.createElement('tr');
    let cast = { 
        baseDate:datas[0].baseDate,
        rain:datas[0].obsrValue,
        rainInfo:function(){
            let info=this.rain;
            if(info==0){
                statusText="맑음";
                rainIcon=rainIcon[0];
            } else {
                if(info==1){
                    statusText="비";
                    rainIcon=rainIcon[1];    
                } else if(info==2){
                    statusText="비/눈";
                    rainIcon=rainIcon[2];    
                } else if(info==3){
                    statusText="눈";
                    rainIcon=rainIcon[3];    
                }
            }
        },
        temperature:datas[3].obsrValue,
        wind:datas[7].obsrValue,
        nx:datas[0].nx,
        ny:datas[0].ny,
        loc:function(){
            let point=[this.nx, this.ny];
            if(point[0]==73 && point[1]==134){
                locText="대전"
            }
        }
    }
    cast.rainInfo();
    cast.loc();
    tr.innerHTML=`
        <td>Today&nbsp;</td>
        <td>&nbsp;${cast.temperature}도&nbsp;/</td>
        <td>&nbsp;${statusText} ${rainIcon}</td>
        `;
        castEl.appendChild(tr);
        castBox.appendChild(castEl);
    }
    
    // <td>${cast.baseDate}&nbsp;/</td>
    // <td>오늘날짜 : ${cast.baseDate}</td>
    // <td>바람 : ${cast.wind}/ms</td>
