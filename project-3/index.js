const area=document.getElementById("ch")
const total1=document.getElementById("total")
const remain1=document.getElementById("remain")
area.addEventListener("keyup",ch1)
function ch1(){
    total1.innerText=area.value.length
    remain1.innerText=area.getAttribute("maxlength")-area.value.length
}