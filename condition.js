// // condition statements

// // if statement
// //if statement syntax
// if(condition){
//     console.log("done") //for condition true,SPACE,STRING,1
// }

// // allow only if female
// let gender = prompt("eneter gender").toLowerCase()
// if (gender==="f"||gender==="female"){
//     console.log("u are allowed")
// }

// --------------------------------------------------------------------------------------------------------------
// // if-else statement
// // if-else statement syntax
// if(condition){
//     console.log("done") //for condition true,SPACE,STRING,1,"false","dgvgchv"
// }
// else{
//     console.log("not done") // for condition false, undefined, null,NaN,0,""
// }

// // Check if number is within a range (10–50)
// let number= Number(prompt("eneter number"))
// if (number>=10 && number<=50){
//     console.log("number is in the range")
// }
// else{
//     console.log("number is out of range")
// }

// // Check if number is 3-digit
// let number = Number(prompt("enter number"))
// if (number>=100 && number <=999){
//     console.log("number is 3 digit")
// }
// else{
//     console.log("number is not 3 digit")
// }

// // Check if character is vowel or consonant
// let char =prompt("enter character").toLowerCase()
// if (char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
//     console.log(char,"is a vowel")
// }
// else if (char>='b' && char<='d' || char>='f'&& char<='h' || char>='j' && char<='n' ||char>='p'&& char<='t' || char>='v'&& char<='z'){
//     console.log(char,"is a consonant")
// }
// else{
//     alert("enter valid input")
// }

// // Check if character is uppercase or lowercase
// let char = prompt("enter character")
// if (char>='A'&& char<='Z'){
//     console.log(char,"is a uppercase")
// }
// else if (char>='a'&& char<='z'){
//     console.log(char,"is a lowercase")
// }
// else{
//     alert("enter a valid input")
// }

// // Simple Login System

// let username="admin"
// let password="admin123"

// let user_name = prompt("enter username")
// let user_password = prompt("enter password")
// if (user_name===username && user_password===password){
//     console.log("login successful")
// }
// else{
//     console.log("login failed")
// }

// // Electricity Bill Calculation
// // Units      Price
// // 0–100      ₹5/unit
// // 101–200    ₹7/unit
// // 201+       ₹10/unit

// let units = Number(prompt("enter number of units consumed"))
// if (units>=0 && units<=100){
//     console.log("total bill is", units*5)
// }
// else if (units>100 && units<=200){
//     console.log("total bill is", 100*5+(units-100)*7)
// }
// else if (units>200){
//     console.log("total bill is", 100*5+100*7+(units-200)*10)
// }
// else{
//     alert("enter valid number of units")
// }

// // Ticket Price Based on Age
// // Age < 5 → Free
// // Age 5–18 → ₹100
// // Age >18 → ₹200
// let age = Number(prompt("enter age"))
// if (isNaN(age)||age<0){
//     console.log("enter valid age")
// }
// else if (age <5){
//     console.log("free")
// }
// else if (age>=5 && age<=18){
//     console.log("fare is ₹100")
// }
// else {
//     console.log("fare is ₹200")
// }

// // Check Weekend or Weekday
// let date = new Date()
// let x = date.getDay()
// if (date.getDay()==0 || date.getDay()==6){
//     console.log(x,"today is weekend")
// }
// else{
//     console.log(x,"not a weekend")
// }

// // Greeting Based on Time
// let date = new Date()
// let time = date.getHours()
// if (time>=0&& time<12){
//     console.log("Good Morning")
// }
// else if(time>=12 && time<17){
//     console.log("Good Afternoon")
// }
// else if (time>=17 && time<19){
//     console.log("Good Evening")
// }
// else{
//     console.log("Good Night")
// }

// // Salary Tax Calculation
// // Salary < 250000 → No tax
// // 250000–500000 → 5%
// // 500000–1000000 → 20%
// // >1000000 → 30%

// let salary = Number(prompt("enter salary"))
// if (isNaN(salary)||salary<0){
//     alert("enter valid salary")
// }
// else if (salary<250000){
//     console.log("no tax")
// }
// else if (salary>=250000 && salary<=500000){
//     console.log("5% tax i.e,", salary * 0.05, "deducted from ", salary, "total payable salary after tax deduction:", salary - salary * 0.05)
// }
// else if (salary>500000 && salary<=1000000){
//     console.log("20% tax i.e,", salary * 0.2, "deducted from ", salary, "total payable salary after tax deduction:", salary - salary * 0.2)
// }
// else if (salary>1000000){
//     console.log("30% tax i.e,", salary * 0.3, "deducted from ", salary, "total payable salary after tax deduction:", salary - salary * 0.3)
// }
// else{
//     console.log("enter valid salary")
// }

// // write a program to check user is eligible to vote
// let user =Number(prompt("Enter age:"))
// if (user>=18){
//     console.log("eligible to vote ")
// }
// else{
//     console.log("not eligible to vote")
// }

// // write a program to check user is eligible to Drive
// let user_age =Number(prompt("Enter age:"))
// if (user_age>=18){
//     console.log("eligible to drive")
// }
// else{
//     console.log("not eligible to drive")
// }

// // number is +ve,-ve
// let no = Number(prompt("enter no"))
// if(no>0){
//     console.log("positive")
// }
// else{
//     console.log("negative")
// }

// // find the biggest among two
// let a = Number(prompt("enter 1st no."))
// let b = Number(prompt("enter 2nd no."))
// if (a>b){
//     console.log(a,"is greater among",a,"and",b)
// }
// else{
//     console.log(b,"is greater among",a,"and",b)
// }

// // male or female
// let gender = prompt("enter gender").toLowerCase()//converting input to lowercase if input has uppercase its case sensetive
// if (gender==="m"||gender==="male"){
//     console.log("male")
// }
// else{
//     console.log("female")
// }

// // check if number is 0 an non 0
// let no = Number(prompt("enter no"))
// if(no==0){
//     console.log("number is 0")
// }
// else{
//     console.log("number is not a zero")
// }

// string or number
// let a = prompt("enter input")
// if(a-1){
//     console.log("number")
// }
// else{
//     console.log("strting")
// }

// let a = prompt("enter input")
// if (isNaN(a)){
//     console.log("string")
// }
// else{
//     console.log("number")
// }

// // Check Even or Odd
// let no=Number(prompt("enter number:"))
// if (no%2==0){
//     console.log("number is even")
// }
// else{
//     console.log("number is odd")
// }

// // Check Leap Year
// let year=Number(prompt("enter year:"))
// if ((year%4==0 && year%100!=0) || year%400==0){
//     console.log(year,"is a leap year")
// }
// else{
//     console.log(year,"is not a leap year")
// }

// // Check if a Number is a Multiple of 7
// let number = Number(prompt("enter number:"))
// if (number%7==0){
//     console.log(number,"is multiple of 7")
// }
// else{
//     console.log(number,"is not a multiple of 7")
// }

// // check if a Number is a Perfect Square
// let number = Number(prompt("enter number:"))
// if (number.math.sqrt(number)%1==0){
//     console.log(number,"is a perfect square")
// }
// else{
//     console.log(number,"is not a perfect square")
// }

// --------------------------------------------------------------------------------------------------------------
// if- else if - else

// if- else if - else syntax
// if(condition){
//     console.log("1st condition true")
// }
// else if(condition){
//     console.log(" 1st condition false and 2nd condtion true")
// }
// else{
//     console.log("all the above conditions false")
// }

// // Check Largest Among Three Numbers
// let n1 = Number(prompt("enter 1st number:"))
// let n2 = Number(prompt("enter 2nd number:"))
// let n3 = Number(prompt("enter 3rd number:"))
// if (n1>n2&&n1>n3){
//     console.log(n1,"is the largest of", n1, n2, n3)
// }
// else if(n2>n1&&n2>n3){
//     console.log(n2,"is the largest of", n1, n2, n3)
// }
// else{
//     console.log(n3,"is the largest of", n1, n2, n3)
// }

// // Check Smallest Among Three Numbers
// let n1 = Number(prompt("enter 1st number:"))
// let n2 = Number(prompt("enter 2nd number:"))
// let n3 = Number(prompt("enter 3rd number:"))
// if (n1<n2&&n1<n3){
//     console.log(n1,"is the smallest of", n1, n2, n3)
// }
// else if(n2<n1&&n2<n3){
//     console.log(n2,"is the smallest of", n1, n2, n3)
// }
// else{
//     console.log(n3,"is the smallest of", n1, n2, n3)
// }

// // Write a program to number is +ve,-ve or 0
// let a = Number(prompt("enter num:"))
// if (a==0){
//     console.log("number is 0 ")
// }
// else if(a>0){
//     console.log("number is +ve ")
// }
// else{
//     console.log("number is -ve")
// }

// // gender is male,female,others
// let gender = prompt("enter gender").toLowerCase()
// if (gender==="female"||gender==="f"){
//     console.log("user is female")
// }
// else if (gender==="male"||gender==="m"){
//     console.log("user are male")
// }
// else{
//     console.log("user is others")
// }

// // if the user eligible to vote if age>=18 (not eligible (maxage>120) (below <=0) )
// let age = Number(prompt("enter age"))
// if (age>120){
//     alert("not eligible to vote, maximum age exceeded")
// }
// else if(age<=0){
//     alert("enter valid input, minimum age should be 18")
// }
// else if(age>=18 && age<=120){
//     console.log("eligible to vote")
// }

// else{
//     alert("enter correct age (minimum age is 18)")
// }

// // write program to check user selected balance,deposit,withdraw
// let user=prompt("select options: \n1. BALANCE  \n2. DEPOSIT  \n3. WITHDRAW").toLowerCase()
// if(user==="balance"||user==="b"||user==="1"){
//     console.log("user selected balance option")
// }
// else if(user==="deposit"||user==="d"||user==="2"){
//     console.log("user selected deposit option")
// }
// else if(user==="withdraw"||user==="w"||user==="3"){
//     console.log("user selected withdraw option")
// }
// else{
//     alert("please provide valid input")
// }

// // write a program to check number is divisible by 3

// let N = Number(prompt("enter no"))
// if (N%3==0){
//     console.log("number is divisible by 3")
// }
// else{
//     console.log("number is not divisible by 3")
// }

// // write a program to check number is divisible by  5

// let n = Number(prompt("enter no"))
// if (n%5==0){
//     console.log("number is divisible by 5")
// }
// else{
//     console.log("number is not divisible by 5")
// }

// // write a program to check number is divisible by 3 and 5 both
// let num = Number(prompt("enter no"))
// if (num%3==0 && num%5==0){
//     console.log("number is divisible by 3 and 5")
// }
// else{
//     console.log("number is not divisible by 3 and 5")
// }

// // write a program to check current time is am/pm
// let time = Number(prompt("enter time in 24hr format"))
// if (time>=0 && time<12){
//     console.log("current time is am")
// }
// else{
//     console.log("current time is pm")
// }

// write a program to check which day is today
// let date = new Date()

// if (date.getDay()==0){
//     console.log("today is sunday")
// }
// else if (date.getDay()==1){
//     console.log("today is monday")
// }
// else if (date.getDay()==2){
//     console.log("today is tuesday")
// }
// else if (date.getDay()==3){
//     console.log("today is wednesday")
// }
// else if (date.getDay()==4){
//     console.log("today is thursday")
// }
// else if (date.getDay()==5){
//     console.log("today is friday")
// }
// else {
//     console.log("today is saturday")
// }

// write a program to check which month is this
// let month = new Date()
// if (month.getMonth()==0){
//     console.log("this month is january")
// }
// else if (month.getMonth()==1){
//     console.log("this month is february")
// }
// else if (month.getMonth()==2){
//     console.log("this month is march")
// }
// else if (month.getMonth()==3){
//     console.log("this month is april")
// }
// else if (month.getMonth()==4){
//     console.log("this month is may")
// }
// else if (month.getMonth()==5){
//     console.log("this month is june")
// }
// else if (month.getMonth()==6){
//     console.log("this month is july")
// }
// else if (month.getMonth()==7){
//     console.log("this month is august")
// }
// else if (month.getMonth()==8){
//     console.log("this month is september")
// }
// else if (month.getMonth()==9){
//     console.log("this month is october")
// }
// else if (month.getMonth()==10){
//     console.log("this month is november")
// }
// else{
//     console.log("this month is december")
// }

// write a program to convert the hours to am/pm format
// let time = Number(prompt("enter time in 24hr format"))
// if (time>=0 && time<12){
//     console.log(time,"am")
// }
// else if (time==12){
//     console.log(time,"pm")
// }
// else if (time>12 && time<24){
//     console.log(time-12,"pm")
// }
// else{
//     alert("enter valid time")
// }

// // write a program to check wheather the student is pass or fail (5subject marks )
// let sub1 = Number(prompt("enter marks of subject 1"))
// let sub2 = Number(prompt("enter marks of subject 2"))
// let sub3 = Number(prompt("enter marks of subject 3"))
// let sub4 = Number(prompt("enter marks of subject 4"))
// let sub5 = Number(prompt("enter marks of subject 5"))

// if (sub1<0||sub1>100||sub2<0||sub2>100||sub3<0||sub3>100||sub4<0||sub4>100||sub5<0||sub5>100){
//    alert("enter correct marks between 0 and 100")
// }
// else if (sub1>=35 && sub2>=35 && sub3>=35 && sub4>=35 && sub5>=35){
//    console.log("student is passed")
// }
// else if (sub1<35||sub2<35||sub3<35||sub4<35||sub5<35){
//     console.log("student is failed")
// }
// else{
//     alert("enter valid input")
// }

// // Grade Calculator
// // Marks → Grade

// // 90-100 → A
// // 80-89 → B
// // 70-79 → C
// // 60-69 → D
// // below 60 → Fail

// let marks =Number(prompt("enter marks"))
// if (marks<0||marks>100){
//     alert("enter valid marks between 0 and 100")
// }
// else if(marks>=90 && marks<=100){
//     console.log("grade is A")
// }
// else if(marks>=80 && marks<=89){
//     console.log("grade is B")
// }
// else if(marks>=70 && marks<=79){
//     console.log("grade is C")
// }
// else if(marks>=60 && marks<=69){
//     console.log("grade is D")
// }
// else{
//     console.log("Sorry your Failed")
// }

// Nested if-else statement
// check user is eligible to vote and assign line based on gender
// let age = Number(prompt("enter age"))
// if (age<0||age>120){
//     alert("enter valid age between 0 and 120")
// }
// else if(age>=0 && age<18){
//     console.log("not eligible to vote")
// }
// else if (age>=18 && age<=120){
//     console.log("eligible to vote")
//     let gender = prompt("enter gender").toLowerCase()
//     if (gender==="female"||gender==="f"){
//         console.log("stand in female line")
//     }
//     else if (gender==="male"||gender==="m"){
//         console.log("stand in male line")
//     }
//     else if(gender ==="others"||gender==="o"){
//         console.log("stand in others line")
//     }
//     else{
//         alert("enter valid inputs")
//     }
// }
// else{
//     alert("enter valid age")
// }

// write a program to calculate total amount ofter discount based on the quantity of items purchased
// more than 5000 5% discount
// more than 7000 7% discount
// more than 8000 8% discount
// more than 9000 9% discount
// more than 10000 10% discount

// let amount = Number(prompt("enter total amount"));
// if (amount < 0 || isNaN(amount)) {
//   alert("enter valid amount");
// }
// else if (amount > 0 && amount <= 5000) {
//   console.log("no discount, total payable amount is", amount);
// }
// else if (amount >= 5000) {
//   console.log("you are eligible for the discount");
//   if (amount > 5000 && amount < 7000) {
//     console.log("5% discount, total payable amount is", amount - amount * 0.05);
//   }
//   else if (amount > 7000 && amount < 8000) {
//     console.log("7% discount, total payable amount is", amount - amount * 0.07);
//   }
//   else if (amount > 8000 && amount < 9000) {
//     console.log("8% discount, total payable amount is", amount - amount * 0.08);
//   }
//   else if (amount > 9000 && amount <= 10000) {
//     console.log("9% discount, total payable amount is", amount - amount * 0.09);
//   }
//   else if (amount > 10000) {
//     console.log("10% discount, total payable amount is", amount - amount * 0.1);
//   }
//   else {
//     alert("eneter valid amount");
//   }
// }
// else {
//   console.log("you are not eligible for the discount pruchase more");
// }

// // write a program to check wheather the student has secured distinction, first class, pass or fail based on the marks of 5 subjects
// alert("enter marks of 5 subjects out of 100")
// let java = Number(prompt("enter marks of java"))
// let c = Number(prompt("enter marks of c"))
// let python = Number(prompt("enter marks of python"))
// let html = Number(prompt("enter marks of html"))
// let css = Number(prompt("enter marks of css"))
// total = java+c+python+html+css
// percentage = (total/500)*100

// if (java<0||java>100||isNaN(java)||c<0||c>100||isNaN(c)||python<0||python>100||isNaN(python)||html<0||html>100||isNaN(html)||css<0||css>100||isNaN(css)){
//    alert("enter valid input and correct marks between 0 and 100")
// }
// else if (percentage>=35 && java>=35 && c>=35 && python>=35 && html>=35 && css>=35)
//     {
//    console.log("student is passed")
//    if (percentage>=85){
//     console.log("student secured distinction")
//    }
//    else if (percentage>=70){
//     console.log("student secured first class")
//    }
//    else if (percentage>=60){
//     console.log("student secured second class")
//    }
//    else if (percentage>=35){
//     console.log("student is pass class")
//    }
//    else{
//     alert("student is failed")
//     }
// }
// else{
//     console.log("inputs invalid")
// }

// write a program to calculate of a total units consumed
// conditions
// // Units      Price
// // 0–100      ₹4/unit
// // 101–200    ₹6/unit
// // 201-400      ₹8/unit
// // 400+      ₹10/unit

// let units = Number(prompt("enter number of units consumed"))
// if(units<0||isNaN(units)){
//     alert("enter valid number of units")
// }
// else if (units>=0 && units<=100){
//     console.log("total bill is", units*4)
// }
// else if (units>100 && units<=200){
//     console.log("total bill is", 100*4+(units-100)*6)
// }
// else if (units>200 && units<=400){
//     console.log("total bill is", 100*4+100*6+(units-200)*8)
// }
// else if (units>400){
//     console.log("total bill is", 100*4+100*6+200*8+(units-400)*10)
// }
// else{
//     alert("enter valid number of units")
// }

// amount = 0
// if (units>400){
//     amount += (units-400) *10
//     units = 400
// }
// if (units>200){
//     amount += (units-200) *8
//     units = 200
// }
// if (units>100){
//     amount += (units-100) *6
//     units = 100
// }
// if (units>0){
//     amount += units *4
// }
// else{
//     alert("enter valid number of units")
// }
// console.log("total bill is", amount)

// //geive all the number of notes for a given amount 500,200,100,50,20,10,5,2,1
// let amount = Number(prompt("enter total amount"));
// note = 0;
// if (amount < 0 || isNaN(amount)) {
//   alert("enter valid amount");
// }
// else if (amount > 500) {
//   note = Math.floor(amount / 500);
//   amount = amount - note * 500;
//   console.log("total 500 notes are", note);

//   if (amount > 200) {
//     note = Math.floor(amount / 200);
//     amount = amount - note * 200;
//     console.log("total 200 notes are", note);
//   }
//   if (amount > 100) {
//     note = Math.floor(amount / 100);
//     amount = amount - note * 100;
//     console.log("total 100 notes are", note);
//   }
//   if (amount > 50) {
//     note = Math.floor(amount / 50);
//     amount = amount - note * 50;
//     console.log("total 50 notes are", note);
//   }
//   if (amount > 20) {
//     note = Math.floor(amount / 20);
//     amount = amount - note * 20;
//     console.log("total 20 notes are", note);
//   }
//   if (amount > 10) {
//     note = Math.floor(amount / 10);
//     amount = amount - note * 10;
//     console.log("total 10 notes are", note);
//   }
//   if (amount > 5) {
//     note = Math.floor(amount / 5);
//     amount = amount - note * 5;
//     console.log("total 5 notes are", note);
//   }
//   if (amount > 2) {
//     note = Math.floor(amount / 2);
//     amount = amount - note * 2;
//     console.log("total 2 notes are", note);
//   }
//   if (amount > 1) {
//     note = Math.floor(amount / 1);
//     amount = amount - note * 1;
//     console.log("total 1 notes are", note);
//   }
// } else {
//   alert("enter valid input");
// }

// // ATM Withdrawal With Balance Check
// let balance = 10000;
// let withdraw = Number(prompt("enter amount to withdraw"));
// if (withdraw < 0 || isNaN(withdraw)||withdraw=="") {
//   alert("enter valid amount");
// }
// else if (withdraw == balance) {
//   alert("withdrawal failed, a minimum balance of 500 is required!!\nAvailable balance is", balance)
// }
// else if (withdraw <= balance) {
//   balance = balance - withdraw
//   console.log("withdrawal successful\nAmount of",withdraw,"has been withdrawn\nAvailable balance is", balance)
// }
// else{
//     console.log("insufficient balance \nAvailable balance",balance)
// }


// ATM Note Distribution With Limited Notes

// ATM has:

// 500 → 2 notes
// 200 → 3 notes
// 100 → 5 notes

// // User enters amount. ATM must try to give notes. If impossible → "Transaction failed".

// let amount = Number(prompt("enter total amount"))
// let a_n500 = 2;
// let a_n200 = 3;
// let a_n100 = 5;
// if (amount < 0 || isNaN(amount)) {
//   alert("enter valid amount");
// }   
// else if (amount > 500 * a_n500 + 200 * a_n200 + 100 * a_n100) {
//   console.log("transaction failed, insufficient notes in ATM");
// }
// else if (amount % 100 != 0) {
//   console.log("transaction failed, amount should be in multiples of 100");
// }
// else if (amount<=500 * a_n500) {
//     let n500 = Math.floor(amount/500)
//     console.log("total 500 notes are", n500)
//     amount -=n500*500
//     if (amount<=200*a_n200){
//         let n200 = Math.floor(amount/200)
//         console.log("total 200 notes are", n200)
//         amount-=n200*200
//     }
//     if (amount<=100*a_n100){
//         let n100 = Math.floor(amount/100)
//         console.log("total 100 notes are", n100)
//     }
// }
// else{
//     alert("enter valid amount")
// }


// // Given an amount, find the minimum number of notes required.

// // Example
// // Amount = 370
// // Notes = 100, 50, 20, 10

// // Output:

// // 100 × 3
// // 50 × 1
// // 20 × 1
// // Total notes = 5

// let amount = Number(prompt("enter total amount"))
// let tn=0
// if (amount < 0 || isNaN(amount)) {
//   alert("enter valid amount");
// }
// else if (amount>=100){
//     let n100 = Math.floor(amount/100)
//     console.log("total 100 notes are", n100)
//     amount -=n100*100
//         tn+=n100
//     if (amount>=50){
//         let n50 = Math.floor(amount/50)
//         console.log("total 50 notes are", n50)
//         amount-=n50*50
//         tn+=n50
//     }
//     if (amount>=20){    
//         let n20 = Math.floor(amount/20)
//         console.log("total 20 notes are", n20)
//         amount-=n20*20
//         tn+=n20
//     }
//     if (amount>=10){
//         let n10 = Math.floor(amount/10)
//         console.log("total 10 notes are", n10)
//         amount-=n10*10
//         tn+=n10
//     }
    
//     console.log("total notes are", tn)
//     console.log("remaining amount",amount)
// }
// else{
//     alert("enter valid amount")
// }


// // Shop Change Problem
// // Customer gives ₹1000.
// // Product price = input.
// // Calculate:
// // Change to return
// // Break change into denominations.
// // Example
// // Price = 735
// // Change = 265

// // Output:

// // 200 × 1
// // 50 × 1
// // 10 × 1
// // 5 × 1



// let customer = 1000
// let product = Number(prompt("eneter product price"))
// let change = customer - product

// if (product < 0 || isNaN(product)||product==""){
//   alert("enter valid product price")
// }
// else if (product>customer){
//     alert("product price exceeds customer amount by " +(product-customer)+" please pay the remaining")
// }
// else if (product<customer){
//     console.log("Change to return",change)
//     if (change >= 200) {
//     let n200 = Math.floor(change/200)
//     console.log("total 200 notes are", n200)
//     change -=n200*200
//     }
//     if (change >= 50) {
//         let n50 = Math.floor(change/50)
//         console.log("total 50 notes are", n50)
//         change-=n50*50
//     }
//     if (change >= 10) {
//         let n10 = Math.floor(change/10)
//         console.log("total 10 notes are", n10)
//         change-=n10*10
//     }
//     if (change >= 5) {
//         let n5 = Math.floor(change/5)
//         console.log("total 5 notes are", n5)
//         change-=n5*5
//     }
//     if (change>=1){
//         let n1 = Math.floor(change/1)
//         console.log("total 1 notes are", n1)
//     }    
// }
// else{
//     alert("enter valid product price")
// }



// While statements 

// // Water Bottle Exchange Logic
// // 3 empty bottles = 1 new bottle.
// // Input:
// // numberOfBottlesBought
// // Find total bottles you can drink.

// // Buy = 9 Drink = 13 bottles.

// let numberOfBottlesBought = Number(prompt("enter number of bottles bought"))
// let totalBottlesDrunk = numberOfBottlesBought
// let empty_bottles=numberOfBottlesBought

// if (numberOfBottlesBought < 0 || isNaN(numberOfBottlesBought)||numberOfBottlesBought=="") {
//   alert("enter valid number of bottles")
// }
// while(numberOfBottlesBought>=3){
//     let new_bottles = Math.floor(empty_bottles/3)
//     totalBottlesDrunk += new_bottles
//     empty_bottles = new_bottles + (empty_bottles % 3);
// }
// console.log("total bottles drunk are", totalBottlesDrunk)



// // Chocolate Wrapper Problem
// // 5 wrappers = 1 chocolate.
// // Input chocolates bought.
// // Find total chocolates eaten.
// // Example
// // Buy = 15
// // Total eaten = 18.

// let chocolates_bought = Number(prompt("enter number of chocolates bought"))
// if (chocolates_bought < 0 || isNaN(chocolates_bought)||chocolates_bought=="") {
//   alert("enter valid number of chocolates")
// }
// else {
//     let total_chocolates = chocolates_bought;
//     let wrappers = chocolates_bought;

//     if (wrappers >= 5) {
//         let new_chocolates = Math.floor(wrappers / 5);
//         total_chocolates += new_chocolates;

//         wrappers = (wrappers % 5) + new_chocolates;
//     }

//     console.log("Total chocolates eaten:", total_chocolates);
// }


// //Time Conversion Logic

// // Input seconds.
// // Convert into:
// // hours
// // minutes
// // seconds

// // Example
// // 3665 seconds

// // Output:
// // 1 hour
// // 1 minute
// // 5 seconds

// let secons = Number(prompt("enter seconds"))
// if (secons < 0 || isNaN(secons)||secons=="") {
//   alert("enter valid number of seconds")
// }
// else{
//     let hours = Math.floor(secons / 3600);
//     let minutes = Math.floor((secons % 3600) / 60);
//     let seconds = secons % 60;
//     console.log(hours, "hour", minutes, "minutes", seconds, "seconds");
// }

// // Digit Reverse Logic
// let num = Number(prompt("Enter a 4 digit number"));

// if (isNaN(num) || num < 1000 || num > 9999|| num=="") {
//     console.log("Enter a valid 4 digit number");
// }
// else {

//     let d1 = Math.floor(num / 1000);
//     let d2 = Math.floor((num % 1000) / 100);
//     let d3 = Math.floor((num % 100) / 10);
//     let d4 = num % 10;

//     let reverse = d4 * 1000 + d3 * 100 + d2 * 10 + d1;

//     console.log("Reversed number:", reverse);
// }

// // Largest Digit in a Number
// let num = Number(prompt("Enter a 5 digit number"));

// let d1 = Math.floor(num / 10000);
// let d2 = Math.floor((num % 10000) / 1000);
// let d3 = Math.floor((num % 1000) / 100);
// let d4 = Math.floor((num % 100) / 10);
// let d5 = num % 10;

// let largest = d1;

// if (d2 > largest) {
//     largest = d2;
// }

// if (d3 > largest) {
//     largest = d3;
// }

// if (d4 > largest) {
//     largest = d4;
// }

// if (d5 > largest) {
//     largest = d5;
// }

// console.log("Largest digit:", largest);

// // Currency Split Between Friends
// let money = Number(prompt("Enter total money"));
// let friends = Number(prompt("Enter number of friends"));

// if (friends <= 0) {
//     console.log("Invalid number of friends");
// }
// else {

//     let each = Math.floor(money / friends);
//     let remaining = money % friends;

//     console.log("Each gets:", each);
//     console.log("Remaining:", remaining);
// }


// Parking Charge Logic

// Rules
// First 2 hours → ₹30
// Next 3 hours → ₹20/hour
// After 5 hours → ₹10/hour

// let hours = Number(prompt("Enter parking hours"));
// let fee = 0;

// if (hours <= 2) {
//     fee = 30;
// }
// else if (hours <= 5) {
//     fee = 30 + (hours - 2) * 20;
// }
// else {
//     fee = 30 + 3 * 20 + (hours - 5) * 10;
// }

// console.log("Parking fee:", fee);

// // Train Ticket Fare

// // Rules
// // Age < 5 → Free
// // 5–12 → 50% ticket
// // 12–60 → Full ticket
// // 60+ → 30% discount

// let price = Number(prompt("Enter ticket price"));
// let age = Number(prompt("Enter age"));
// let final_price;

// if (age < 5) {
//     final_price = 0;
// }
// else if (age <= 12) {
//     final_price = price * 0.5;
// }
// else if (age < 60) {
//     final_price = price;
// }
// else {
//     final_price = price * 0.7;
// }

// console.log("Ticket price:", final_price);


// // Salary Breakdown
// // HRA = 20%
// // DA = 15%
// // PF = 12%
// // Net salary

// let salary = Number(prompt("Enter salary"));

// if (salary <= 0) {
//     console.log("Invalid salary");
// }
// else {

//     let hra = salary * 0.20;
//     let da = salary * 0.15;
//     let pf = salary * 0.12;

//     let net_salary = salary + hra + da - pf;

//     console.log("HRA:", hra);
//     console.log("DA:", da);
//     console.log("PF:", pf);
//     console.log("Net Salary:", net_salary);
// }


// // write a program to check phone number is valid or not 

// let phone_number = (prompt("eneter the phone number "))
// if (phone_number<0||isNaN(phone_number)||phone_number.length!=10){
//     alert("enetr valid input")
// }
// else if (phone_number.length==10){
//     console.log("phone number is valid")
// }
// else{
//     alert("enetr valid number")
// }

// // user inpput or not 
// let input = prompt("enter something")
// if (input==""){
//     console.log("user did not enter anything")
// }
// else{
//     console.log("input provided succesfully")
// }

