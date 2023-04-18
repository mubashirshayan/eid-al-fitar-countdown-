console.log('Hello World!');
function clock() {
  // body...

var obj=new Date();
//var str=obj.tostring();
var date=new Date('4-22-2023')
var objTime=obj.getTime();
var dateTime=date.getTime();
var diff=dateTime-objTime;
if (diff<0) {
  return;
}

var days=Math.floor(diff/(1000*3600*24))
;
var hour=Math.floor(diff/(1000*3600)%24);
var min=Math.floor(diff/(1000*60)%60);
var sec=Math.floor(diff/(1000)%60);
document.getElementById('min').innerHTML=min
document.getElementById('day').innerHTML=days
document.getElementById('hour').innerHTML=hour
document.getElementById('sec').innerHTML=
sec
}
clock();
setInterval(clock,1000)