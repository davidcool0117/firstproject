// <!-- https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=3NVhpSRT0O0siIH2KcrZSpgHjLx5mrRimZu1GnMr6XORd6Oy%2B7AtFpfp3OOYpjtq5WRWfhSrnKNmvhy9ZdnVjQ%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230209&base_time=0600&nx=61&ny=128 -->

//오늘날짜생성
let date = new Date();
//YYYYMMDD
let year = String(date.getFullYear());
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');
let now = year + month + day;