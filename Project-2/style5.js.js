var a=document.getElementById("d1");
var b=document.getElementById("d2");
b.addEventListener("click",()=>{
     d=5;
    ch()
})
function ch(){
    for (let index = 0; index < d; index++) {
        var c=document.createElement("img")
        c.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        a.appendChild(c)
        
    }
    
}