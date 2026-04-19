// let array = [1, 2, 3, 4, "array", `a`, `b`, 'r', true, false, null, undefined, Symbol(), BigInt(100), [1, 3, 4, 5, 6], { id: 200, age: 30, gender: "female" }]
// console.log(array)
// console.log(typeof(array))

// let names =["divya","shree","mallarapu","amul"]
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(`my name is ${names[0]}${names[1]} ${names[2]} \nhello my name is ${names[3]}`)

// let array =["divya", "vanila", "butterscotch","divya","ravi","divya","mrunal"]
// let no = [1,5,2,3,4,5,6,7,8]

 // concat
// console.log(array.concat(no))
// console.log(array)

// flat
// let no1 = [[[[[[[[[[[[[[1,[1],[2],[6]],[9]],[13]],[49]],[85]],[25]],2],3],4],5],6],7],8]]
// console.log(no1.flat())
// let flat =no1.flat(Infinity)
// console.log(no1)
// console.log(flat.indexOf(49))

// console.log(no.flat(5))
// console.log(no.flat(Infinity))

// includes 
// console.log(array.includes("divya"))
// console.log(array.includes("45"))
// console.log(array.includes("45","divya"))// will only check the first element

// indexof 
// console.log(array.indexOf("vanila"))
// console.log(array.indexOf("divya"),"this is indexof divya")

// split

// let x =  "Hi, i am divyashree mallarapu"
// let y = x.split("")
// console.log(y.join(""))


// last index of 
// console.log(array.lastIndexOf("divya"),"this is last indexof divya")

// length of array
// console.log(array.length,"this is length of array")

// pop
// console.log(array.pop()) //removes last element of array 
// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop())
// console.log(array.pop())  //if tried to pop an empty array it returns "undefined" o/p is popped element
// console.log(array)

// push
// console.log(array.push("ranveer"))
// console.log(array.push("alia")) //appends elements at the end of the array
// console.log(array)


// reverse
// console.log(array)
// console.log(array.reverse())
// console.log(array)

//  let array =["divya", "vanila", "butterscotch","divya","ravi","divya","mrunal"]
//  let no = [1,5,2,3,4,5,6,7,8]

// let a = ['a','b','c']
// let b = [1,2,3]
// console.log([...a,...b]) //returns concated array
// console.log(...a,...b) //returns concated string

// // shift
// console.log(array.shift()) //removes 1st elemnt of array,  o/p is removed element and it returns new array
// console.log(array,"this is shift")

// // unshift
// console.log(array.unshift("kiviii")) // add the element at first and o/p is number it returns new array
// console.log(array,"this is unshift")

// let array =["divya", "vanila", "butterscotch","divya","ravi","divya","mrunal"]
// //slice
// let y = array.slice(0,3)
// console.log(y, "slice of array")
// console.log(array)


// // splice
// let x = array.splice(0,3)
// console.log(x,"splice of array")//returns new array
// console.log(array)
// let x1 = array.splice(3)
// console.log(x1)

// let o ="hi iam divya"
// let h =(o.split(" "))
// console.log(h)
// console.log(h.join("."))


// let x = [1,2,3,4,5,'ravi','hi','hello', 6,7,'shastry', 8,9,10]
// x=x.reverse()
// x[3]=x[3].split("").reverse().join("").toUpperCase()
// x[8]=x[8].split("").reverse().join("").toUpperCase()

// console.log(x)

// let x=["Sun"]
// let y=["Moon"]
// console.log(x.concat(y))


// let name = "   divyashree mallarapu   ";
// console.log(name)
// let y = name.trim().toUpperCase().split(" ")
// console.log(y[1])


// Questions solved 
// let fruits = ["apple","banana","mango","orange","grapes"];
// fruits.splice(1,1)
// console.log(fruits)
// fruits.reverse().push("kivi")
// console.log(fruits)


// let a = Math.ceil(Math.random()*10)
// let b = Math.floor(Math.random()*10)
// let c = Math.floor(Math.random()*10)
// let d = Math.floor(Math.random()*10)
// console.log(a,b,c,d)

// let a = Math.ceil(Math.random()*10).toString()
// let b = Math.floor(Math.random()*10).toString()
// let c = Math.floor(Math.random()*10).toString()
// let d = Math.floor(Math.random()*10).toString()
// console.log("otp is",a.concat(b).concat(c).concat(d))


// let sentence = "javascript is powerful";
// let y = sentence.split(" ").reverse().join(" ").toUpperCase()
// console.log(y)

// let numbers = [10,20,30,40,50];
// numbers.splice(0,1)
// numbers.push(60)
// numbers.unshift(5)
// numbers.reverse()
// console.log(numbers)

// Generate a 6-character password using:

// random numbers (0–9)

// password must be STRING

// join digits together

// let a = Math.floor(Math.random()*10).toString()
// let b = Math.floor(Math.random()*10).toString()
// let c = Math.floor(Math.random()*10).toString()
// let d = Math.floor(Math.random()*10).toString()
// let e = Math.floor(Math.random()*10).toString()
// let f = Math.floor(Math.random()*10).toString()
// console.log(a.concat(b).concat(c).concat(d).concat(e).concat(f))

// let name = "divyashree";
// y=name.split("").reverse().join("").toUpperCase()
// console.log(y)

// let name = "divya shree mallarapu";
// y=name.split("")
// y[0]=y[0].toUpperCase()
// y[6]=y[6].toUpperCase()
// y[12]=y[12].toUpperCase()
// y=y.join("")
// console.log(y)

// let numbers = [12,45,67,23,90];
// numbers.pop()
// numbers.unshift(100)
// let y = numbers.join("-")
// console.log(y)

// let text = "   javascript programming   ";
// let y = text.trim().split(" ").join("_")
// console.log(y.toUpperCase())

// let colors = ["red","blue","green","yellow"];
// let y = colors.splice(2,1)
// colors.push("black")
// let res = colors.join("|")
// console.log(res)

// let a = Math.ceil(Math.random()*9).toString()
// let b = Math.floor(Math.random()*10).toString()
// console.log(a.concat(b))

// let word = "frontend";
// let y=word.split("").reverse()
// y[0]=y[0].toUpperCase()
// y[7]=y[7].toUpperCase()
// y = y.join("")
// console.log(y)

// let x = "12345"
// console.log(x.split("").reverse().join(""))

// let marks = [78.6, 89.2, 91.7, 66.4];
// marks[0]=Math.floor(marks[0])
// marks[1]=Math.floor(marks[1])
// marks[2]=Math.floor(marks[2])
// marks[3]=Math.floor(marks[3])
// console.log(marks)
// let length = Math.max(
//     marks[0],
//     marks[1],
//     marks[2],
//     marks[3]
// )
// console.log(length,"max marks")

// let text = "   hello javascript world   ";
// text = text.trim()
// text = text.toUpperCase()
// text =text.replaceAll(" ","-")
// console.log(text)

// let firstName = "divya";
// let lastName = "mallarapu";

// f_t=firstName.slice(0,3).toUpperCase()
// l_t=lastName.slice(0,3).toUpperCase()
// console.log(f_t.concat(l_t))

// let x = "frontend developer"
// console.log(x.split(" ").reverse().join(" ").toUpperCase())




