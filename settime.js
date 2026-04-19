// setTimeout(()=>{
//     console.log("divyashree")
// },5000)

// let name=document.getElementsByTagName("span")[0]

// function interval(d){
//     setInterval(()=>{
//         name.innerText=d
//     },2000)
// }

// let arr =["divya","mrunal","shwetha","bhuvana","nandhana"]
// arr.forEach(d=>{
//     interval(d)
// });

let date = new Date();
console.log(date)
console.log(date.getDate(),"date")
console.log(date.getDay(), " day")
console.log(date.getFullYear(),"year ")
console.log(date.getMonth(),"month")
console.log(date.getHours(),"hour")
console.log(date.getMinutes(),"minutes")
console.log(date.getSeconds(),"seconds")
console.log(date.getMilliseconds(),"milliseconds")
console.log(date.toDateString())

console.log("-----------------")

setInterval(() => {
    let date = new Date();
    let ms=date.getMilliseconds()
    let seconds= date.getSeconds()
    let min = date.getMinutes()
    let hrs=date.getHours()

    //  let hrs=18

    let timeline ;
    
    if(hrs>=12){
        time = true
        timeline=('PM')
         hrs-=12
    }
    else if(hrs>=0||hrs<12){
        timeline=('AM')
    }
    
    // DISPLAY IN CONSOLE
    // console.log(`${hrs} hours :${min} minutes:${seconds} seconds:${ms} milliseconds`)

    // DISPLAY IN DOM
    h1=document.getElementsByTagName("h1")[0]
    h1.innerHTML=`${hrs} hours : ${min} minutes : ${seconds} seconds : ${ms} milliseconds ${timeline}`
}, 1000);