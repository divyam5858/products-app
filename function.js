// function wedding(){
//     console.log("ravishastry weds mrunal thakur")
// }

// wedding();

// // reduces lines of code 
// function add(a,b){
//     let c = a+b 
//     console.log(c)
// }
// add(1,2);
// add(10,20);
// add(100,200);
// add(1000,2000);
// add(10000,20000);
// add(100000,200000);
// add(1000000,2000000);

// // function without parameter
// function greet(){
//     console.log("hello, i am divyashree")
//     console.log("good morning")
// }
// greet();

// // function with parameters 
// function add(a=Number(prompt("enter 1st no:")),b=Number(prompt("enter 2nd no:"))){
//     let c = a+b
//     console.log(c,"this is addition")
// }
// add();

// function sub(a=10,b=20){
//     let c = b-a
//     console.log(c,"this is subtraction")
// }
// sub();

// // function with variables in local scope 
// arithmetic operators inside scope 
// function arithmeticaop(){

// function add(){
//     let a= 100;
//     let b = 200;
//     let c = a+b;
//     console.log(c,"this is addition")
// }
// add();

// function sub(){
//     let a= 100;
//     let b = 200;
//     let c = a-b;
//     console.log(c,"this is subtraction")
// }
// sub();

// function mul(){
//     let a= 100;
//     let b = 200;
//     let c = a*b;
//     console.log(c,"this is multiplication")
// }
// mul();

// function div(){
//     let a= 100;
//     let b = 200;
//     let c = a/b;
//     console.log(c,"this is division")
// }
// div();

// function rem(){
//     let a= 100;
//     let b = 200;
//     let c = a%b;
//     console.log(c,"this is remainder")
// }
// rem();

// // arithmetic operators inside scope 
// function add(){
//     let a= 100;
//     let b = 200;
//     let c = a+b;
//     console.log(c,"this is addition")
// }
// add();

// function sub(){
//     let a= 100;
//     let b = 200;
//     let c = a-b;
//     console.log(c,"this is subtraction")
// }
// sub();

// function mul(){
//     let a= 100;
//     let b = 200;
//     let c = a*b;
//     console.log(c,"this is multiplication")
// }
// mul();

// function div(){
//     let a= 100;
//     let b = 200;
//     let c = a/b;
//     console.log(c,"this is division")
// }
// div();

// function rem(){
//     let a= 100;
//     let b = 200;
//     let c = a%b;
//     console.log(c,"this is remainder")
// }
// rem();
// }
// arithmeticaop();



// // unary operators 
// function unaryop(){
// function dec(){
//     let a= 100;
//     console.log(a--,"for a 100 post decrement of a ")
//     console.log(a,"updated a value ")
//     let b = 200;
//     console.log(--b,"for b 200 pre decrement of b")
// }
// dec();

// function inc(){
//     let a= 100;
//     console.log(a++,"for a 100 post increment of a ")
//     console.log(a,"updated a value")
//     let b = 200;
//     console.log(++b, "for b 200 pre increment of b")
// }
// inc();
// }
// unaryop();


// // assignment operators 
// function assignmentop(){
//     let a = 10;
//     let b= 20;
//     a = b;
//     console.log(a,"upadted a value by b a=b ")

//     a+=b;
//     console.log(a,"upadted a value by b a+=b")

//     a-=b;
//     console.log(a,"upadted a value by b a-=b ")

//     a*=b;
//     console.log(a,"upadted a value by b  a*=b")

//     a/=b;
//     console.log(a,"upadted a value by b a/=b")

//     a%=b;
//     console.log(a,"upadted a value by b a%=b")
// }
// assignmentop();

// comparison operators
// function comop(){
//     let a =100;
//     let b =200;
//     console.log(a>b,"a>b")
//     console.log(a<b,"a<b")
//     console.log(a>=b,"a>=b")
//     console.log(a<=b,"a<=b")
//     console.log(a!=b,"a!=b")
//     let c ="100"
//     console.log(a==c,"a==c")
//     console.log(a===c,"a===c")
// }
// comop();

// // function with string methods 
// function concate(a="divya",b="shree"){
//     let c = a.concat(b)
//     console.log(c,"conacted string of a and b")
// }
// concate();

// function slicee(a="divyashree"){
//     let c = a.slice(0,4)
//     console.log(c,"sliced string")
// }
// slicee();

// function splitt(a="divyashree"){
//     let c = a.split("");
//     console.log(c,"splitted string-converted to array")
// }
// splitt();

// function trimm(a="      divyaaashree mallarapu     "){
//     let c = a.trim();
//     console.log(c,"trimmed the spaces")
// }
// trimm();

// function trimmendd(a="      divyaaashree mallarapu     "){
//     let c = a.trimEnd();
//     console.log(c,"trimmendd the spaces")
// }
// trimmendd();

// function trimmmstart(a="      divyaaashree mallarapu     "){
//     let c = a.trimStart();
//     console.log(c,"trimmmstart the spaces")
// }
// trimmmstart();

// function replace(a="divyaaashree"){
//     let c = a.replace('a','b')
//     console.log(c,"replaced a by b")
// }
// replace();

// function replacealll(a="divyashaaree"){
//     let c = a.replaceAll('a','b')
//     console.log(c,"replaced all a by b")
// }
// replacealll();

// function padenddd(a='6363'){
//     let c = a.padEnd(10,'x')
//     console.log(c,"padendddd  by x ")
// }
// padenddd();

// function padstarttt(a='1217'){
//     let c = a.padStart(10,'x')
//     console.log(c,"padstartttd  by x ")
// }
// padstarttt();

// function upcase(a="divyashree"){
//     console.log(a.toUpperCase()," divyashree to upper case ")
// }
// upcase();

// function lcase(a="divYASHRee"){
//     console.log(a.toLowerCase(),"divYASHRee to lowercase")
// }
// lcase();



// // functions with global variable 
// a = ["divya","kivi","banana"]
// n= [10,1,2,3,4]
// f=[1,2,["divya,1,2,3"],4,5,6,"uyi"]

// function arraymethods(){
//     console.log(a.concat(n),"concated array a with n")
//     console.log(f.flat(Infinity),"flat of array f")
//     console.log(a.includes("divya"),"includes divya")
//     console.log(a.push('a'),"push")
//     console.log(n.pop(),"pop")
//     console.log(n.shift(),"shift")
//     console.log(n.unshift('divya'),"unshift")
    // console.log(a.reverse())

// }
// arraymethods();



// // function with string methods - call function with value  
// function concate(){
//     let c = a.concat(b)
//     console.log(c,"conacted string of a and b")
// }
// concate(a="divya",b="shree");

// function slicee(){
//     let c = a.slice(0,4)
//     console.log(c,"sliced string")
// }
// slicee(a="divyashree");

// function splitt(){
//     let c = a.split("");
//     console.log(c,"splitted string-converted to array")
// }
// splitt(a="divyashree");

// function trimm(){
//     let c = a.trim();
//     console.log(c,"trimmed the spaces")
// }
// trimm(a="      divyaaashree mallarapu     ");

// function trimmendd(){
//     let c = a.trimEnd();
//     console.log(c,"trimmendd the spaces")
// }
// trimmendd(a="      divyaaashree mallarapu     ");

// function trimmmstart(){
//     let c = a.trimStart();
//     console.log(c,"trimmmstart the spaces")
// }
// trimmmstart(a="      divyaaashree mallarapu     ");

// function replace(){
//     let c = a.replace('a','b')
//     console.log(c,"replaced a by b")
// }
// replace(a="divyaaashree");

// function replacealll(){
//     let c = a.replaceAll('a','b')
//     console.log(c,"replaced all a by b")
// }
// replacealll(a="divyashaaree");

// function padenddd(){
//     let c = a.padEnd(10,'x')
//     console.log(c,"padendddd  by x ")
// }
// padenddd(a='6363');

// function padstarttt(){
//     let c = a.padStart(10,'x')
//     console.log(c,"padstartttd  by x ")
// }
// padstarttt(a='1217');

// function upcase(){
//     console.log(a.toUpperCase()," divyashree to upper case ")
// }
// upcase(a="divyashree");

// function lcase(){
//     console.log(a.toLowerCase(),"divYASHRee to lowercase")
// }
// lcase(a="divYASHRee");


// // overwriting the function 
// function add(a=10,b=30){
//     let c = a+b
//     console.log(c)
// }
// add();
// add(20,400);
// add(90,200);

// // Nested function 
// function one(){
//     let a = "divya"
//     console.log(a)
//     function two(){
//         let b = "shree"
//         console.log(b)
//         function three(){
//             let c = "mallarapu"
//             console.log(c)
//         }
//         three();
//     }
//     two();

// }
// one();


// // return statements 
// let fist_name = "divya"
// let last_name = "shree"
// function greet(){
//     let c = fist_name.concat(last_name)
//     console.log(c," ,value of c inside the scope ")
//     return(c)
// }

// let x = greet();

// function hii(){
//     console.log(`helloo i am ${x}`, " ,value of c accessed out of scope")
// }
// hii();


// function full(){
//     let x = "divya"
//     let y = "shree"
//     return(x)
//     console.log(x) //anything after return cannot be accessed 
// }
// let a = full()
// console.log(a)

// function full(){
//     let x = "divya"
//     let y = "shree"
//     return(x,y) // return statement can return only 1 value 
// }
// let a = full()
// console.log(a) //returns only shree 



// // return statements for operators 
// // two values 
// function first(){
//     let a = 40
//     return(a)
// }
// let x = first()

// function second(){
//     let b = 20
//     return(b)
// }
// let y = second()

// // arithmetic operators 
// console.log("arithmetic operators")
// // addition
// function add(){
//     return(x+y)
// }

// let addres = add()
// console.log(addres,"addition")

// // subtrtaction
// function sub(){
//     return(x-y)
// }

// let subres = sub()
// console.log(subres,"subtraction")

// // multiplication
// function mul(){
//     return(x*y)
// }

// let mulres = mul()
// console.log(mulres,"multipliaction")

// // Division
// function div(){
//     return(x/y)
// }

// let divres = div()
// console.log(divres,"Divison")

// // Modulus
// function mod(){
//     return(x%y)
// }

// let modres = mod()
// console.log(modres,"remainder using %")

// // power 
// function pow(){
//     return(x**y)
// }

// let powres = pow()
// console.log(powres,"x power y")

// // Unary Operator
// console.log("Unary Operator")
// function posinc(){
//     return(x++)
// }
// let posincres = posinc()
// console.log(posincres,"post increment of x")

// function preinc(){
//     return(++x)
// }
// let preincres = preinc()
// console.log(preincres,"pre increment of x")

// function posdec(){
//     return(x--)
// }
// let posdecres = posdec()
// console.log(posdecres,"post decrement of x")

// function predec(){
//     return(--x)
// }
// let predecres = predec()
// console.log(predecres,"pre decrement of x")


// // comparision operator 
// console.log("comparision operator ")
// function third(){
//     let b ="40"
//     return(b)
// }
// let z = third()

// function etet(){
//     return(x==z)
// }

// let etetres=etet()
// console.log(etetres,"== operator")

// function etetet(){
//     return(x===z)
// }

// let etetetres=etetet()
// console.log(etetetres,"=== operator")

// function gtt(){
//     return(x>y)
// }

// let gtres=gtt();
// console.log(gtres,"> operator")

// function lt(){
//     return(x<y)
// }

// let ltres=lt();
// console.log(ltres,"< operator")

// function gtet(){
//     return(x>=y)
// }

// let gtetres=gtet();
// console.log(gtetres,">= operator")

// function ltet(){
//     return(x<=y)
// }

// let ltetres=ltet();
// console.log(ltetres,"<= operator")

// function net(){
//     return(x!=y)
// }

// let netres=net()
// console.log(netres,"!= operator")

// // Assignment operators 
// console.log("Assignment operators")
// function asgn(){
//     return(x=y)
// }
// let asgnres = asgn()
// console.log(asgnres, "x=y")

// function pasgn(){
//     return(x+=y)
// }
// let pasgnres = pasgn()
// console.log(pasgnres,"x+=y")

// function sasgn(){
//     return(x-=y)
// }
// let sasgnres = sasgn()
// console.log(sasgnres,"x-=y")

// function masgn(){
//     return(x*=y)
// }
// let masgnres = masgn()
// console.log(masgnres,"x*=y")

// function dasgn(){
//     return(x/=y)
// }
// let dasgnres = dasgn()
// console.log(dasgnres,"x/=y")

// function modasgn(){
//     return(x%=y)
// }
// let modasgnres = modasgn()
// console.log(modasgnres,"x%=y")

// function ppasgn(){
//     return(x**=y)
// }
// let ppasgnres = ppasgn()
// console.log(ppasgnres,"x**=y")