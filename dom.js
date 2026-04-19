// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.title,"title")
// console.log(document.title="divya")

// let navbar = document.getElementById("navbar");
// navbar.style.display="flex";
// navbar.style.justifyContent="space-evenly";
// navbar.style.borderBottom="solid 1px black";
// navbar.style.height="50px";
// navbar.style.alignItems="center"

// let img = document.getElementById("img")
// console.log(img.src)
// img.src= "https://images.unsplash.com/photo-1771957585146-e76c62faf663?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// console.log(img.alt)
// img.alt="image is loading..";
// console.log(img.alt);

// // ----------------------------------------by class
// let fruits = document.getElementsByClassName("fruit")
// console.log(fruits)//gives the html elements

// let apple = document.getElementsByClassName("fruit")[0]
// apple.style.color="red"

// let mango = document.getElementsByClassName("fruit")[1]
// mango.style.textTransform="capitalize"
// mango.style.color="blue"
// mango.style.fontSize="20px"

// console.log(mango)//gives html element
// console.log(mango.innerText)//gives the text in html

// // -------------------Acess elements by tag name------------------->
// let apple = document.getElementsByTagName("li")[0]
// // console.log(apple)
// apple.style.color="red"

// let mango =document.getElementsByTagName("li")[1]
// mango.className="fruit"
// // console.log(mango.className)

// let a1 = document.getElementsByClassName("fruit")[0]
// // console.log(a1.innerText)
// a1.style.color="blue"

// ---------------------------event listener for button ------------------------->

// let btn = document.getElementsByTagName("button")[0]
// // console.log(btn)

// btn.addEventListener("click",()=>{
//     // alert("this is hello button")
//     console.log("this is hello button")
// })
// --------------------event listener for fruits------------>

// let apple = document.getElementsByTagName("button")[0]
// apple.addEventListener("click",()=>{
//     console.log("this is apple button")
// })

// let mango = document.getElementsByTagName("button")[1]
// mango.addEventListener("click",()=>{
//     console.log("this is mango button")
// })

// let orange = document.getElementsByTagName("button")[2]
// orange.addEventListener("click",()=>{
//     console.log("this is orange button")
// })

// let banana = document.getElementsByTagName("button")[3]
// banana.addEventListener("click",()=>{
//     console.log("this is banana button")
// })

// let grapes = document.getElementsByTagName("button")[4]
// grapes.addEventListener("click",()=>{
//     console.log("this is grapes button")
// })

// ------------------event listener for alert-------------------->

// let btn = document.getElementsByTagName("button")[0]
// btn.addEventListener("click",()=>{
//     alert("this is submit button")
// })

// let input=document.getElementsByTagName("input")[0]
// let btn = document.getElementsByTagName("button")[0]
// btn.addEventListener("click",()=>{
//     console.log(input.placeholder)
// })

// --------------------------event lisetener for cards ---------------->
// let fn = document.getElementsByTagName("input")[0];

// let ln = document.getElementsByTagName("input")[1];

// let email = document.getElementsByTagName("input")[2];

// let submit = document.getElementsByTagName("button")[0];
// submit.addEventListener("click", () => {
//   if(fn.value.length<1||ln.value===""||email.value===""){
//       alert("please enter proper input")
//   }
//   else{
//       let full_name = document.getElementsByClassName("fullname")[0];
//       full_name.innerText = fn.value + ln.value;

//       let e = document.getElementsByClassName("email")[0];
//       e.innerText=email.value
//       alert(`${fn.value} ${ln.value} submitted the form with ${email.value}`)
//    }
// });
// ------------------------------------------------------------------------>

let fn = document.getElementsByTagName("input")[0];

let ln = document.getElementsByTagName("input")[1];

let contact = document.getElementsByTagName("input")[2];

let email = document.getElementsByTagName("input")[3];

let submit = document.getElementsByTagName("button")[0];

let cards = document.getElementsByClassName("cards")[0]

submit.addEventListener("click", () => {
  let confirmed=confirm("do you  want to submit");
  if (confirmed) {
    show();
  } else {
    alert("cancelled!!!");
  }
});

function show() {
  if (contact.value.length != 10 || isNaN(contact.value)) {
    alert("enetr proper contact number of 10 digit");
  } 
  else if (fn.value === "" ||ln.value === "" ||contact.value === "" || email.value === "") {
    alert("enetr valid inputs");
  } 
  else {
    cards.innerHTML +=`
    <div class="card">
      <h1>first Name <span class="firstname">${fn.value}</span></h1>
      <h2>last Name <span class="lastname">${ln.value}</span></h2>
      <h3>contact <span class="contact">${contact.value}</span></h3>
      <h4>Email <span class="email">${email.value}</span></h4>
    </div>
    `
    // let fname = document.getElementsByClassName("firstname")[0];
    // fname.innerText = fn.value;
    // let lname = document.getElementsByClassName("lastname")[0];
    // lname.innerText = ln.value;
    // let c = document.getElementsByClassName("contact")[0];
    // c.innerText = contact.value;
    // let e = document.getElementsByClassName("email")[0];
    // e.innerText = email.value;
  }
}