let url = "https://dummyjson.com/carts";
let carts = document.getElementsByClassName("carts")[0];

let task = async () => {
  let data = await fetch(url);
  console.log(data)
  let fd = await data.json();
  console.log(fd)
  let ele = fd.carts;
console.log(ele)
  carts.innerHTML = ""; 

  ele.forEach((element) => {
    let { id, products, total, totalProducts, totalQuantity } = element;
    
    
    let productHTML = products.map((p) => {
      return `
        <div class="card">
          <h3>${p.id}</h3>
          <h3>${p.title}</h3>
          <img src="${p.thumbnail}" alt="">
          <p><b>Price:</b> ${p.price}</p>
          <p><b>Qty:</b> ${p.quantity}</p>
          <p><b>Discount:</b> ${p.discountPercentage}%</p>
          <p><b>Discounted Total:</b> ${p.discountedTotal}</p>
        </div>
      `;
    }).join(""); 
    

    
    carts.innerHTML += `
      <div class="cart">
        <h2>Cart Id: ${id}</h2>

        <div class="products">
          ${productHTML}
        </div>

        <div class="bill">
        <h3>Total Products: ${totalProducts}</h3>
        <h3>Total Quantity: ${totalQuantity}</h3>
        <h3>Total: ${total}</h3>
        </div>
      </div>
    `;
  });
};

task();