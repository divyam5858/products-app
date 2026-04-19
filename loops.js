// loops

//<---------------------------------for-loop------------------------------------------------------------->
// for (let i =1;i<=1000000;i++){
//     console.log(i)
// }

// // write a program to print numbers from 1 to 10
// for (let i =1;i<=10;i++){
//     console.log(i)
// }

// // write a program to print a number range fro 1 to 100
// for (let i =1;i<=100;i++){
//     console.log(i)
// }

// // write a program to print a number range fro 50 to 75
// for (let i =50;i<=75;i++){
//     console.log(i)
// }

// // write a program to print a number which if multiples of two without if
// for(let i =2;i<=100;i+=2){
// console.log(i)
// }

// write a program to print a number which if multiples of 5 without if range from 0 to 100
// for(let i =0;i<=100;i+=5){
//     console.log(i)
// }

// // write a program to print amumber which is multiple of 10 range from 0-1000
// for(let i =0;i<=1000;i+=10){
//     console.log(i)
// }

// // write program to printa  number ranges from a and b given by user
// let a = Number(prompt("enter the starting number:"));
// let b = Number(prompt("enter the ending number:"));
// if (isNaN(a) || isNaN(b)) {
//     alert("invalid input, please enter valid numbers");
// }
// if (a > b) {
//     alert("invalid input, starting number should be less than or equal to ending number");
// }
// for(let i =a;i<=b;i++){
//     console.log(i)
// }

// // write a program to print multiplictaion table as per user choice

// let table = Number(prompt("enter the number to print table"));
// if (isNaN(table)||table<=0) {
//     alert("invalid input, please enter a valid number");
// }
// else{
//     for(let i =1;i<=10;i++){
//         console.log(`${table} x ${i} = ${table*i}`)
// }
// }

// // write a program to print multiplication table of user choice range from a to b as per user choice

// let table = Number(prompt("enter the number to print table"));
// let start = Number(prompt("enter start value"))
// let end = Number(prompt("enter end value"))
// if (isNaN(table)||table<=0||isNaN(start)||isNaN(end)||start>end||start==""||end==""||start<=0) {
//     alert("invalid input please enter a valid number");
// }
// else{
//     for(let i =start;i<=end;i++){
//         console.log(`${table} x ${i} = ${table*i}`)
// }
// }

// // access all the elements of array
// let Names = ["ravi","shastry","mrunal","thakur","sagar","sanjay"]
// for (let i=0;i<=Names.length-1;i++){
//     console.log(Names[i])
// }

// // write a program to write the names of fruits in 10 elemnts in array  and print fruits in cpaital letter
// let fruits =[]
// for (let i=0;i<10;i++){
//     fruits[i] =(prompt("enter name of fruits"))
// }
// for (let i=0;i<10;i++){
//     console.log(fruits[i].toUpperCase())
// }

// // write a program to print the names of 10 students ina array, if name is present make your name capital
// let student =[]

// for (let i=0;i<10;i++){
//     student[i] =(prompt("enter name of student"))
// }
// yourname=prompt("enetr yourname")
// for (let i=0;i<10;i++){
//     if (student[i].includes(yourname)){m
//       console.log(student[i].toUpperCase())
//     }
//     else{
//         console.log(student[i])
//     }
// }

// // write a program to create an array of 10 names

// let name = [];

// for (let i = 0; i < 10; i++) {
//   name[i] = prompt("enter name ");
// }

// for (let i = 0; i < 10; i++) {
//   let f = name.charAt(0).toUpperCase();
//   //   let f = name[i].slice(0,1).toUpperCase()
//   let m = name[i].slice(1, name[i].length - 1).toLowerCase();
//   let l = name.charAt(name.length-1).toUpperCase();
//   //   let l = name[i].slice(-1).toUpperCase()
//   console.log(f.concat(m).concat(l));
// }

// // write a program to print 10 names in array each name should be captial and return inside new array
// let array=["ravi","shastry","mrunal","thakur","sagar","sanjay","divya","sneha","sam","shami"]
// let narray =[]

// for (let i=0;i<10;i++){
//     narray[i]=array[i].toUpperCase()
//     // narray.push(array[i].toUpperCase())
//     // narray.unshift(array[i].toUpperCase()) //reverse
//     // console.log(narray[i])
// }
// console.log(narray)
// // console.log(narray.reverse()) //reverse

// // writea program 10 names

// let  names = ['mrunal','ravi','thakur','ravi','hamsa','shastry','ravi','sanjay','shastry','srutha','ravi','sushmith','shastry','ravi','bindu','hamsa','shastry','ravi','sanjay','srutha','ravi']
// for (let i=0;i<names.length;i++){
//     if (names[i]=="ravi"||names[i]=="shastry"){
//         names[i]=names[i].toUpperCase()
//     }
// }
// console.log(names)

// // write a program to calculate sum of even numbers range from 0 to 100

// let sum = 0;
// for (let i =0;i<=100;i++)
// {
//     if (i%2==0){
//         sum+=i
//     }
// }
// console.log(sum)

// // write a program to add the odd jumbers from 0 to 100
// let sum = 0;
// for (let i =0;i<=100;i++)
// {
//     if (i%2!=0){
//         sum+=i
//     }
// }
// console.log(sum)

// // write a program to check prime or not
// let number = Number(prompt("enter number"));
// if (isNaN(number) || number == 0) {
//   alert("please provide proper input");
// } else {
//   let prime = true;
//   for (i = 2; i < number; i++) {
//     if (number % i == 0) {
//       console.log(i);
//     }
//   }
//   if (prime) {
//     console.log(number, "its prime");
//   } else {
//     console.log(number, "not prime");
//   }
// }

//prime or not
// let a = Number(prompt("enter number"))
// let prime=true
// for(let i =2;i<=Math.floor(Math.sqrt(a));i++){
//     if(a%i==0){

//         prime=false
//     }
// }
// if(prime){
//     console.log(a,"its a prime")
// }
// else{
//     console.log(a,"not prime")
// }

// //write a program to check  the string is palindrome or not
// let str = prompt("Enter a string");

// let count = 0;
// // aabaa
// for (let i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     count++;
//   }
// }

// if (count === 0) {
//   console.log("String is palindrome");
// } else {
//   console.log("String is not palindrome");
// }

// // write a program to check number is palidrome or not
// let num = Number(prompt("Enter a number"));

// let original = num;
// let reverse = 0;

// while (num > 0) {
//   let digit = num % 10;
//   reverse = reverse * 10 + digit;
//   num = (num - digit) / 10;
// }

// if (original === reverse) {
//   console.log("Number is palindrome");
// } else {
//   console.log("Number is not palindrome");
// }

// // write a program to calculate teh factorial of given number
// let num = Number(prompt("Enter a number"));
// let factorial=1
// for(i=1;i<=num;i++){
//     factorial*=i
// }
// console.log(factorial)

// // Reverse a Number
// let num = Number(prompt("enter number"))
// console.log(num)
// let revnum = []
// num=num.toString().split("")
// for(let i =0;i<=num.length-1;i++){
//     revnum.unshift(num[i])
// }
// let x =revnum.join("")
// console.log(parseInt(x))

// for(i=10;i>=1;i--){
//     console.log(i)
// }

// print numbers from 100 to 1
// for(i=100;i>=1;i--){
//     console.log(i)
// }

// print numbers from 50 to 25
// for(i=50;i>=25;i--){
//     console.log(i)
// }

// // print numbers which is multiples of 5 range from 100 to 0 without if
// for(i=100;i>=0;i-=5){
//     console.log(i)
// }

// write a program to print a number which is multiple of 10 range from 100 to 0
// for(i=100;i>=0;i-=10){
//     console.log(i)
// }

// // writea program to print a number range from ato b given by user
// let a = Number(prompt("enetre a "))
// let b = Number(prompt("enetre b "))
// if (isNaN(a) || isNaN(b)||a<b) {
//     alert("invalid input, please enter valid numbers");
// }
// else{
//     for(i=a;i>=b;i--){
//         console.log(i)
//     }
// }

// // writea program to print a number divisible by 3 range from 100 to 0 and sum of these numbers
// let res=0
// for (i=100;i>=0;i--){
//     if (i%3==0){

//         res+=i
//         console.log(i)
//     }
// }
// console.log("sum is",res)

// // write a program to print a number divisible by 10 range from a and b by user and sum of these numbers
// let a = Number(prompt("enetre a "))
// let b = Number(prompt("enetre b "))
// let res = 0
// if (isNaN(a) || isNaN(b)||a<b) {
//     alert("invalid input, please enter valid numbers");
// }
// else{
//    for (i=a;i>=b;i--){
//     if (i%10==0){
//         res+=i
//         console.log(i)
//     }
// }
// console.log("sum is",res)
// }

// // write a program to find the factorial of a number using reversing number
// let num = Number(prompt("Enter a number"));
// let factorial = 1;
// for (i = num; i >= 1; i--) {
//   factorial *= i;
// }
// console.log(factorial);

// // writea program to find  the sum of factorial of given number
// n = Number(prompt("Enter a number")); //79
// let factorial = 1;
// let res = 0;

// for(i=n;i>=1;i--){
//     factorial *= i;
//     res+=factorial
// }
// console.log("sum of factorial is ",res)

// // write a program to print sum of numbers given by user
// let n = Number(prompt("Enter a number"));
// if(isNaN(n)||n<0){
//     alert("invalid input, please enter a valid number")
// }
// else{
//     let sum = 0;
//     for(i=n;i>=1;i--){
//       let digit = n % 10;
//       sum += digit;
//       n = Math.floor(n/ 10);
//     }
//     console.log(sum)
// }

// // writea program to print a number which is divisible by 3 range from 100 to 0 and find sum even numbers
// let res=0
// for (i=100;i>=0;i--){
//     if (i%3==0){
//         if (i%2==0){
//             console.log(i)
//             res+=i
//         }
//     }
// }
// console.log("sum is",res)

// // Sum of Digits of a Number
// let num=Number(prompt("enter number"))
// let x = 0
// num=num.toString().split("")
// for (let i =0;i<=num.length-1;i++){
//     x+=Number(num[i])
// }
// console.log(`Sum of ${num} is ${x}`)

// Count Digits in a Number
// let num=Number(prompt("enter number"))
// num=num.toString().split("")
// let x = num.length
// num=Number(num.join(""))
// console.log("number of digits in",num,"are",x)

// let num=Number(prompt("enter number"))
// num=num.toString().split("")
// count = 0
// for(let i = 0;i<=num.length-1;i++){
//     count++
// }
// console.log("total digits are",count)

// // Largest Digit in a Number
// let num = Number(prompt("Enter a number"));
// let largest = 0;

// while (num > 0) {
//     let digit = num % 10;
//     if (digit > largest) {
//         largest = digit;
//     }
//     num = Math.floor(num / 10);
// }
// console.log("largest digit is:", largest);

// // smallest number
// let num = Number(prompt("Enter a number"));
// let smallest = 9;
// while (num > 0) {
//     let digit = num % 10;
//     if (digit < smallest) {
//         smallest = digit;
//     }
//     num = Math.floor(num / 10);
// }
// console.log("Smallest digit is:", smallest);

// // Strong Number-sum of factorial of its digits is number itself

// n = Number(prompt("Enter a number")); //79
// let num = n;
// let res = 0;
// function factorial(digit) {
//   let factorial = 1;
//   for (i = 1; i <= digit; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }

// while (num > 0) {
//   let digit = num % 10;
//   res += factorial(digit);
//   num = Math.floor(num / 10);
// }

// if (n === res) {
//   console.log(n, "is a strong number");
// } else {
//   console.log(n, "is not a strong number");
// }

// perfect number - sum of all its factors equal to the number
// let num=Number(prompt("enter number"))
// let limit = Math.floor(num/2)
// let res =0

// for(i=1;i<=limit;i++)
// {
//     if(num%i==0){
//         res+=i//1+2+4+7+14
//     }y
// }
// if(num==res){
//     console.log(num,"is a perfect number")
// }
// else{
//     console.log(num,"is not a perfect number")
// }

// // write a program to reverse the array

// let a =["apple","mango","banana","grapes","pineapple","orange"]
// let rev = []
// for (let i =a.length-1;i>=0;i--){
//     rev.push(a[i])
// }
// console.log(rev)

// // write a program to reverse elements ravi and shastry in uppercase
// let a =["apple","mango","ravi","banana","grapes","shastry","pineapple","orange"]
// let rev = []
// for (let i =a.length-1;i>=0;i--){

//     if(a[i]=="ravi"||a[i]=="shastry"){
//         a[i]=a[i].toUpperCase()
//     }
// rev.push(a[i])
// }
// console.log(rev)

// // ravi and shastry in reverse without using reverse method
// let a =["apple","mango","ravi","banana","grapes","shastry","pineapple","orange"]
// let rev = []
// let b =""
// let c =[]
// for (let i =a.length-1;i>=0;i--){

//     if(a[i]=="ravi"||a[i]=="shastry"){
//         b=a[i].toUpperCase()
//         b=b.split("")
//         for(let j =b.length-1;j>=0;j--){
//             c.push(b[j])
//         }
//        rev.push(c.join("") )
//        c=[]

//     }
//     else{
//         rev.push(a[i])

//     }
// }
// console.log(rev)

// practice---------------------------------------------------------------->
// Product of Digits
// Input: 123 → Output: 6
// let num = Number(prompt("enter number"))
// // let num = 123
// let n = num
// let product = 1
// while(num>0){
//     let digit = (num%10)
//     product*=digit
//     num = Math.floor(num/10)
// }
// console.log(product)

// // Check Harshad Number
// // (Number divisible by sum of digits)

// let num = Number(prompt("enter number"))
// let n= num
// let sum =0
// while(num>0){
//     let digit = num%10
//     sum +=digit
//     num = Math.floor(num/10)
// }
// console.log(sum)
// if(n %sum==0){
//     console.log("its harshad number")
// }
// else{
//     console.log("its not harshad number")
// }

// // Check Neon Number(0,1,9)
// // 9 → 9² = 81 → 8+1 = 9
// let num = Number(prompt("enter number"))

// let sq_num = num**2
// let sq = sq_num

// let sum =0
// while(sq>0){
//     let digit = sq%10

//     sum +=digit
//     sq = Math.floor(sq/10)
// }

// if(sum==num){
//     console.log(num,"is a neon number")
// }
// else{
//     console.log(num,"is not a neon number")
// }

// // Check Duck Number
// // (contains 0 but not at start)
// let str = prompt("enter 5 digit number")

// if(str[0]!=='0'&&str.includes('0')){
//     console.log(str,"is a duck number")
// }
// else{
//     console.log(str,"is not a duck number")
// }

// // Check Spy Number
// // (sum of digits = product of digits)
// let num = Number(prompt("enetr number"))
// let n=num
// let product=1
// let sum =0
// while(num>0){
//     let digit=num%10
//     sum+=digit
//     product*=digit
//     num=Math.floor(num/10)
// }
// if(sum===product){
//     console.log(n,"is a spy number")
// }
// else{
//     console.log(n,"is not a spy number")
// }

// // Sum of Even Digits and Odd Digits separately for a specified range
// let a = Number(prompt("enter the start range"))
// let b = Number(prompt("enter the end range"))
// let odd = 0
// let even = 0
// for (i=a;i<=b;i++){
//     if(i%2==0){
//         even+=i

//     }

//     else {
//         odd+=i

//     }
// }
// console.log("sum of even number is",even)
// console.log("sum of odd number is",odd)

// // Remove last digit repeatedly and print
// // 1234 → 123 → 12 → 1

// let num=Number(prompt("enter number"))
// let n = num
// console.log(num)
// while(num>0){
//     num=Math.floor(num/10)
//     if(num>0){
//         console.log(num)
//     }
// }

// // Print multiplication tables from 1 to 10
// for(let i =1;i<=10;i++){
//     console.log(`${i}-Table`)
//     for(let j=1;j<=10;j++){
//         console.log(`\t${i}*${j}=${i*j}`)
//     }
// }

// // Check if digits are increasing order
// // 1234 → true
// // 132 → false

// let num = Number(prompt("enter number"))
// let n = num
// let digits=[]
// let increasing =true

// while(num>0){
//     let digit = num%10
//     digits.unshift(digit)
//     num = Math.floor(num/10)
// }
// for(let i=0;i<=digits.length-1;i++){
//         if(digits[i]>digits[i+1]){
//             increasing=false
//             break
//         }
// }

// if(increasing){
//     console.log(n,"is increasing order")
// }
// else{
//     console.log(n,"is decreasing")
// }

// // Swap first and last digit of a number
// let num = Number(prompt("enetr number"))
// let n =num.toString().split("")
// let last_digit=num%10

// while(num>=10){
//     num=Math.floor(num/10)
// }
// let first_digit=num

// n[0]=last_digit
// n[n.length-1]=first_digit
// n=n.join("")
// console.log(Number(n),"after swapping first and last digit")

// // Print all pairs (i, j)
// // (1,1), (1,2)...(3,3)
// let a = Number(prompt("enter start number"))
// let b = Number(prompt("enetr end number"))
// for(let i = a;i<=b;i++){
//     for(let j=a;j<=b;j++){
//         console.log(`(${i},${j})`)
//     }
// }

// // // Count factors of a number
// let num = Number(prompt("enter number"))

// let count = 0
// console.log(`factors of of ${num} are:`)
// for(let i =1;i<=num;i++){
//     if(num%i==0){
//         count++
//         console.log(i)
//     }
// }
// console.log(`total number factors of ${num} are: ${count}`)

// // Check if number is perfect square (without sqrt)

// let num = Number(prompt("enetr number"))
// isperfectsquare=false
// for(let i =1;i<=num;i++){
//     if(i*i===num){
//         isperfectsquare=true
//     }
// }
// if(isperfectsquare){
//     console.log(`${num}is a perfect sqaure`)
// }
// else{
//     console.log(`${num}is not a perfect sqaure`)
// }

// // Print divisors of a number
// let num = Number(prompt("enter number"))
// console.log(`divisors of ${num} are:`)
// for (let i = 1;i<=num;i++){
//     if(num%i==0){
//         console.log(i)
//     }
// }

// // Sum of divisors
// let num = Number(prompt("enter number"))
// let sum = 0
// console.log(`divisors of ${num} are:`)
// for (let i = 1;i<=num;i++){
//     if(num%i==0){
//         sum+=i
//         console.log(i)
//     }
// }
// console.log(`sum of divisors are ${sum}`)

// // Find all factors common to two numbers
// let a = Number(prompt("enter first number"))
// let b = Number(prompt("enter second number"))
// let factors_a = []
// let factors_b = []

// function fact_a(num){
//     for(i=1;i<=num;i++){
//         if(num%i==0){
//             factors_a.push(i)
//         }
//     }
//     console.log("factors of",a,"are:")
//     for(let i=0;i<factors_a.length;i++){
//         console.log(factors_a[i])
//     }
// }

// function fact_b(num){

//     for(i=1;i<=num;i++){
//         if(num%i==0){
//             factors_b.push(i)
//         }
//     }
//     console.log("factors of",b,"are:")
//     for(let i=0;i<factors_b.length;i++){
//         console.log(factors_b[i])
//     }
// }

// function com_fact(factors_a,factors_b){
//     let common_factors=[]
//     console.log("common factors of ",a,"and",b,"are:")
//     for(let i=0;i<factors_a.length;i++){
//         for(let j=0;j<factors_b.length;j++){
//             if(factors_a[i]==factors_b[j]){
//                 common_factors.push(factors_a[i])
//             }
//         }
//     }
//     for(let i=0;i<common_factors.length;i++){
//         console.log(common_factors[i])
//     }
// }

// fact_a(a)
// fact_b(b)
// com_fact(factors_a,factors_b)

// // // Check co-prime numbers-greatest common factor = 1
// let a = Number(prompt("enter number"))
// let b = Number(prompt("eneter number"))

// let factors_a=[]
// let factors_b=[]
// let com_factor=[]

// function fact_a(num){
//     for(i=1;i<=num;i++){
//         if(num%i==0){
//             factors_a.push(i)
//         }
//     }
//     for(i=0;i<factors_a.length;i++){
//         console.log(factors_a[i])
//     }
// }

// function fact_b(num){
//     for(i=1;i<=num;i++){
//         if(num%i==0){
//             factors_b.push(i)
//         }
//     }
//     for(i=0;i<factors_b.length;i++){
//         console.log(factors_b[i])
//     }
// }

// function com_fact(factors_a,factors_b){
//     for(let i=0;i<factors_a.length;i++){
//         for(let j=0;j<factors_b.length;j++){
//             if(factors_a[i]===factors_b[j]){
//                 com_factor.push(factors_a[i])
//             }
//         }
//     }
//     for(let i=0;i<com_factor.length;i++){
//         console.log(com_factor[i])
//     }

//     if(com_factor.length==1&&com_factor[0]===1){
//         console.log("Number is a coprime")
//     }
//     else{
//         console.log("Number is not a coprime")
//     }
// }

// console.log("factors of",a,"are:")
// fact_a(a)
// console.log("factors of",b,"are:")
// fact_b(b)
// console.log("Common factors of",a,"and",b,"are:")
// com_fact(factors_a,factors_b)

// // gcd method----------------------------------------------->
// let a=Number(prompt("enter number")) //128
// let b=Number(prompt("enter number"))//96

// let x= a
// let y= b
// while(b!=0){
//         let temp =b //96-32
//         b=a%b //remainder(32)-0
//         a=temp //96-32
// }
// console.log(`gcd of ${x,y}is ${a}`)  //gcd of a number

// if(a==1){
//         console.log("its co-prime")
// }
// else{
//         console.log("its not co-prime")
// }

// // Check if number is power of 2- 2^0=1,2^1=2,2^2=4,2^3=8,2^4=16,2^5=42,2^6=64,2^7=128,4^8=256
// let num = Number(prompt("enter number"))
// let power = false

// for(let i = 0;i<=num;i++){
//     if(2**i===num){
//         power=true
//     }
// }

// if(power){
//     console.log(`${num} is power of 2`)
// }
// else{
//     console.log(`${num}is not power of 2`)
// }

// // strings are also immutable too
// // Reverse number without extra variable-atleast 1 variable is required
// let num = 123456
// let rev =0
// while(num>0){
//     let digit=num%10//6
//     rev=rev*10+digit//10+6
//     num=Math.floor(num/10)
// }
// console.log(rev)

// --------------------------------------------------------------------------------------
// // for ravi and shastry it should be (reverse and alternate =IvAr and YrTsAhS )
// let arr = ["apple","banana","mango","ravi","grapes","shastry","pineapple"]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==="ravi"||arr[i]==="shastry"){
//         let x = ""
//         for(let j=arr[i].length-1;j>=0;j--){
//             if(j%2==0){
//                 x+=arr[i][j].toLowerCase()
//             }
//             else{
//                 x+=arr[i][j].toUpperCase()
//             }
//         }
//         arr[i]=(x)
//     }
// }
// console.log(arr)

// revrese the array
// let arr = ["apple","banana","mango","ravi","grapes","shastry","pineapple"]
// let arr1 = []
// for(let i=arr.length-1;i>=0;i--){

//     arr1.push(arr[i])

// }
// console.log(arr1)

// // reversing the elements
// let rev = []

// for (let i =0;i<=arr.length-1;i++){
//     let x =""
//     for(let j=arr[i].length-1;j>=0;j--){
//         x+=arr[i][j]
//     }
//     rev.push(x)
// }

// console.log(rev)

// // reverse the array and reverse elemenst
// let rev_ele_arr=[]
// for(let i =arr.length-1;i>=0;i--){
//     let y=""
//     for(let j=arr[i].length-1;j>=0;j--){
//         y+=arr[i][j]
//     }
//     rev_ele_arr.push(y)

// }
// console.log(rev_ele_arr)

// // seperate words, characters and numbers and special characters in an array
// let arr = ["Ravi"  ,"Shastry", "Mrunal", "Thakur", 'a','b','c','d',12,21,34,45,'$','#','%','@']
// let words = []
// let char =[]
// let num = []
// let sp_char = []

// for(let i =0;i<=arr.length-1;i++){
//     if(typeof arr[i]=="string"&&arr[i].length>1){
//         words.push(arr[i])
//     }
//     if(typeof arr[i]=="number"&&arr[i].toString().length>=1){
//         num.push(arr[i])
//     }
//     if(typeof arr[i]=="string"&&arr[i].length==1){
//         if(arr[i].match(/[a-z]/)){
//             char.push(arr[i])
//         }
// if("!@#$%^&*()_+{}|:\"<>?`~-=[]\\;',./".includes(arr[i])){
//     sp_char.push(arr[i])
// }
//         else{
//             sp_char.push(arr[i])
//         }
//     }
// }
// console.log(words)
// console.log(num)
// console.log(char)
// console.log(sp_char)

// -------------------------------------------------------------------------------------------------------------->
// forof
// let arr = ["apple", "mango", "banana", "grapes"];
// for (const elements of arr) {
//         console.log(elements)
// }

// for (const elements of arr) {
//         if(elements==="apple"){
//                 console.log(elements.toUpperCase())
//         }
//         else{
//                 console.log(elements)
//         }

// }

// -------------------------------------------------------------------------------------------------------------->
// forin
// for (const index in arr) {
//         console.log(index)
//         console.log(arr[index])
// }

// -------------------------------------------------------------------------------------------------------------->
// // for each(data,index,array) -ES6
// arr.forEach((data,index,arr)=>{
//         console.log(data)
//         // console.log(index)
//         // console.log(arr)
// })

