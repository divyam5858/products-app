let btn = document.getElementsByTagName("button")[0]
let inp = document.getElementsByTagName("input")[0]

let  div= document.getElementsByTagName("div")[1]

btn.addEventListener("click",()=>{
    if (inp.value==""){
        alert("please provide input")
    }
    else{
        div.innerHTML=`<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}" alt="">`
        setTimeout(()=>{
            div.innerHTML="none"
        },3000)
        inp.value=""
       
    }
})