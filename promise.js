// let data = fetch("https://jsonplaceholder.typicode.com/users").then((d)=>{
//     return(d.json())
// }).then((fd)=>{
//     console.log(fd)
// fd.forEach(element => {
//         console.log(element)
//     })
// })
// // console.log(data)
//---------------------------------------------------------------------

// let url ="https://jsonplaceholder.typicode.com/posts"
// let data = fetch(url).then((d)=>{
//     return d.json()
// }).then((fd)=>{
//     console.log(fd)
//     fd.forEach(element => {
//         console.log(element)
//     })
// })
//---------------------------------------------------------------------

// let url ="https://dummyjson.com/products"
// let data =fetch(url).then((d)=>{
//     return d.json()
// }).then((fd)=>{
//      console.log(fd.products)
//      let data =fd.products
//      data.map(element => {
//         console.log(element)
//      });
// })
//---------------------------------------------------------------------
// let cards = document.getElementsByClassName("cards")[0]
// let url = "https://fakestoreapiserver.reactbd.org/api/products";
// let data = fetch(url)
//   .then((d) => {
//     return d.json();
//   })
//   .then((fd) => {
//     console.log(fd);
//     console.log(fd.data[0]);
//     fd.data.map((element) => {
//       card(element);
//     });
//   });

// function card(element) {
//   cards.innerHTML += `<div class="card">
//         <h1 class="id">Id: ${element._id}</h1>
//         <h2 class="title">Title: ${element.title}</h2>
//         <img class="img" src=${element.image} alt="">
//         <p class="des">${element.description}</p>
//         <h3 class="category">Category: ${element.category}</h3>
//         <h4 class="brand">Brand: ${element.brand}</h4>
//         <h5 class="price">Price: ${element.price}</h5>
//     </div>`;
// }

// let cards = document.getElementsByClassName("cards")[0]
// let url = "https://dummyjson.com/quotes";
// let data = fetch(url)
//   .then((d) => {
//     return d.json();
//   })
//   .then((fd) => {
//     console.log(fd.quotes);
//     fd.quotes.forEach((element) => {

//       console.log(element);
//       card(element)
//     });
//   });

//   function card(element){
//     cards.innerHTML += `
//      <div class="card">
//         <h3 class="id">Id:${element.id}</h3>
//         <p class="quote">Quote:${element.quote}</p>
//         <h4 class="author">Author:${element.author}</h4>
//     </div>
//     `;
//   }
