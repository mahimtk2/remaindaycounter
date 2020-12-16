




function  dateData(){
var date=new Date();
var day=date.getDay();
var hour=date.getHours();
var munites=date.getMinutes();
var seconds=date.getSeconds();
if(day.length<2){
day='0'+day
}
else if(hour.length<2){
    hour='0'+hour;
    console.log(hour);
}
else if(munites.length<2){
    munites='0'+munites;
}
else if(seconds.length<2){
    seconds='0'+seconds;
}
document.querySelector(".tday").innerHTML=day;
document.querySelector(".thour").innerHTML=hour;
document.querySelector(".tmin").innerHTML=munites;
document.querySelector(".tsecond").innerHTML=seconds;
}
dateData();
setInterval(dateData,1000);
