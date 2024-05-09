const imgRead=document.createElement("img");
const text = document.querySelector("#text");
const btn = document.querySelector("button");
const cont = document.querySelector(".cont");
// https://api.qr-code-generator.com/v1/create?access-token=your-acces-token-here
let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
btn.addEventListener("click",async()=>{
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
    let response =await fetch(url);
    imgRead.src = url;
    cont.append(imgRead);
})   
 