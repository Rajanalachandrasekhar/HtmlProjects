const a=document.getElementById("hour")
const b=document.getElementById("minutes")
const c=document.getElementById("seconds")
const d=document.getElementById("ampm")
function ch(){
    let h = new Date().getHours()
    let m= new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="AM"
    if(h>12){
        h=h-12
        ampm="PM"
    }            
    a.innerText=h;
    b.innerText=m;
    c.innerText=s;
    d.innerText=ampm
    setTimeout(ch,1000)
}
ch()