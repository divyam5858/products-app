let body = document.body;
let bgc = `radial-gradient(circle at 85% 50%, #3f4744 0%, transparent 40%),
linear-gradient(90deg, #2c3031 0%, #34393a 100%)`;
body.style.background = bgc;


let main = document.getElementsByTagName("main")
for(let i=0;i<main.length;i++){

    main[i].style.border="none"
    main[i].style.width="900px"
    main[i].style.height="550px"
    main[i].style.borderRadius="20px"
    main[i].style.padding="50px 50px"
    main[i].style.margin="50px 100px 100px 8px"
    main[i].style.fontFamily= "'Playfair Display', serif";
}

let h6 = document.getElementsByTagName("h6")[0]
h6.style.fontSize="30px";
h6.style.fontStyle="italic";
h6.style.color="white";
h6.style.textTransform="uppercase";
h6.style.listStyle="none"
h6.style.margin="0px"

let h1 = document.getElementsByTagName("h1")[0]

h1.style.fontSize="50px";
h1.style.fontWeight="bold";
h1.style.color="white";
h1.style.textTransform="capitalize";
h1.style.listStyle="none"
h1.style.margin="0px"

let h2 = document.getElementsByTagName("h2")[0]

h2.style.fontSize="40px";
h2.style.fontWeight="bold";
h2.style.color="white";
h2.style.textTransform="capitalize";
h2.style.listStyle="none"
h2.style.marginTop="5px"
h2.style.marginBottom="0px"

let p = document.getElementsByTagName("p")[0]
p.style.fontSize="20px";
p.style.color="white";
p.style.textAlign="justify";
p.style.padding="2px 50px 10px 0px"

let a=document.getElementsByTagName("i")
for(let i=0;i<a.length;i++){
    a[i].style.marginRight="15px"
    a[i].style.fontSize="30px"
    a[i].style.color="white"
}

let button = document.getElementsByTagName("button")
for(let i =0;i<button.length;i++){
    button[i].style.fontSize="20px";
    button[i].style.fontWeight="bold";
    button[i].style.color="black";
    button[i].style.textTransform="capitalize";
    button[i].style.border="none"
    button[i].style.width="150px"
    button[i].style.borderRadius="5px"
    button[i].style.padding="10px"
}

let img = document.getElementsByTagName("img")[0]
img.style.position="absolute"
img.style.top="117px"
img.style.marginLeft="950px"
img.style.height="480px"
img.style.border="none"
img.style.borderRadius="150px"