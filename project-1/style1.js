var a=document.getElementById("d1")
var b=["YOUTUBER","WEBDEVELOPER","FREELANCER","INSTRUCTOR"];
var c=0
var d=0
ch()
function ch(){
    d++
    a.innerHTML=`
    <h1>I AM ${b[c].slice(0,1)=="I" ? "AN" : "A"} ${b[c].slice(0,d)}</h1>
   `;
   
   if(d==b[c].length){
    c++
    d=0
   }
   if(c==b.length){
    c=0;
   }
   setTimeout(ch,400)
}
