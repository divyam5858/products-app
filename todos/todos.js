let cards = document.getElementsByClassName("cards")[0]
let comp = document.getElementsByClassName("completed")[0]

let url = "https://dummyjson.com/todos"
let task =async()=>{
    let i = await fetch(url)
    let ddata= await i.json()
    let data = ddata.todos
    data.forEach(element => { 
        card(element)
    });
}
task()

function card(element){
     let {id, todo, completed, userId} = element

    //  if-else
    // if(completed===true){
    //     cards.innerHTML+=`<div class="cardt">
    //         <h1>Id:<span>${id}</span></h1>
    //         <h1>Todo:<span>${todo}</span></h1>
    //         <h1 class="completed">Completed:<span>${completed}</span></h1>
    //         <h1>UserId:<span>${userId}</span></h1>
    // </div>`
        
    // }else{
    //     cards.innerHTML+=`<div class="cardf">
    //         <h1>Id:<span>${id}</span></h1>
    //         <h1>Todo:<span>${todo}</span></h1>
    //         <h1 class="completed">Completed:<span>${completed}</span></h1>
    //         <h1>UserId:<span>${userId}</span></h1>
    // </div>`
    // }

    // ternary
    // {completed? cards.innerHTML+=`<div class="cardt">
    //         <h1>Id:<span>${id}</span></h1>
    //         <h1>Todo:<span>${todo}</span></h1>
    //         <h1 class="completed">Completed:<span>${completed}</span></h1>
    //         <h1>UserId:<span>${userId}</span></h1>
    // </div>` : cards.innerHTML+=`<div class="cardf">
    //         <h1>Id:<span>${id}</span></h1>
    //         <h1>Todo:<span>${todo}</span></h1>
    //         <h1 class="completed">Completed:<span>${completed}</span></h1>
    //         <h1>UserId:<span>${userId}</span></h1>
    // </div>`}

    {completed? cards.innerHTML+=`<div class="cardt">
            <h1>Id:<span>${id}</span></h1>
            <h1>Todo:<span>${todo}</span></h1>
            <h1 class="completed">Completed:<span>${completed}</span></h1>
            <h1>UserId:<span>${userId}</span></h1>
    </div>` : cards.innerHTML+=`<div class="cardf">
            <h1>Id:<span>${id}</span></h1>
            <h1>Todo:<span>${todo}</span></h1>
            <h1 class="completed">Completed:<span>${completed}</span></h1>
            <h1>UserId:<span>${userId}</span></h1>
    </div>`}
}