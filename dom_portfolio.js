let body = document.body;
let bgc = `radial-gradient(circle at 85% 50%, #3f4744 0%, transparent 40%),
linear-gradient(90deg, #2c3031 0%, #34393a 100%)`;
body.style.background = bgc;

let main = document.getElementsByClassName("main")[0]

main.style.border="none"
main.style.width="900px"
main.style.height="550px"
main.style.borderRadius="20px"
main.style.padding="50px 50px"
main.style.margin="100px 100px 100px 10px"
main.style.fontFamily= "'Playfair Display', serif";

let h6 = document.getElementsByClassName("h6")[0]
h6.style.fontSize="30px";
h6.style.fontStyle="italic";
h6.style.color="white";
h6.style.textTransform="uppercase";
h6.style.listStyle="none"


let h1 = document.getElementsByClassName("h1")[0]

h1.style.fontSize="50px";
h1.style.fontWeight="bold";
h1.style.color="white";
h1.style.textTransform="capitalize";
h1.style.listStyle="none"

let h2 = document.getElementsByClassName("h2")[0]

h2.style.fontSize="40px";
h2.style.fontWeight="bold";
h2.style.color="white";
h2.style.textTransform="capitalize";
h2.style.listStyle="none"

let p = document.getElementsByClassName("two")[0]
p.style.fontSize="20px";
p.style.color="white";
p.style.textAlign="justify";
p.style.padding="20px 50px 10px 0px"

let links=document.getElementsByClassName("links")
for(let i=0;i<links.length;i++){
    links[i].style.marginRight="15px"
    links[i].style.fontSize="30px"
    links[i].style.color="white"
}

let button = document.getElementsByClassName("button")[0]
button.style.fontSize="20px";
button.style.fontWeight="bold";
button.style.color="black";
button.style.textTransform="capitalize";
button.style.border="none"
button.style.width="150px"
button.style.borderRadius="5px"
button.style.padding="10px"

let button1 = document.getElementsByClassName("button1")[0]
button1.style.fontSize="20px";
button1.style.fontWeight="bold";
button1.style.color="black";
button1.style.textTransform="capitalize";
button1.style.border="none"
button1.style.width="150px"
button1.style.borderRadius="5px"
button1.style.padding="10px"

let img = document.getElementsByClassName("image")[0]
img.style.position="absolute"
img.style.top="150px"
img.style.marginLeft="980px"
img.style.height="611px"
img.style.border="none"
img.style.borderRadius="150px"