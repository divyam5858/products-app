// // let emp = {
// //     emp_id : 1,
// //     emp_name : 'Divya',
// //     emp_contact : 6363961217,
// //     emp_address : "Bengaluru"
// // }
// // console.log(typeof(emp))
// // console.log(emp)
// // console.log(emp.emp_id)
// // console.log(emp.emp_name)
// // console.log(emp.emp_contact)
// // console.log(emp.emp_address)

// // write a program to create properties of a student such as name , rollno, class, 5 subject marks and print it in a statement and provide his/her percentage

// // let student ={
// //     student_rollno:1,
// //     student_name: 'divya',
// //     student_class: '10th',
// //     sub1_marks:45,
// //     sub2_marks:75,
// //     sub4_marks:85,
// //     sub3_marks:65,
// //     sub5_marks:35
// // }

// // let total_marks = 500

// // let percentage = ((student.sub1_marks+student.sub2_marks+student.sub3_marks+student.sub4_marks+student.sub5_marks)/total_marks)*100

// // console.log(`Rollno ${student.student_rollno} \nstudent name is ${student.student_name} \nstudying in ${student.student_class} \nmarks: \nsub1 ${student.sub1_marks} \nsub2 ${student.sub2_marks} \nsub3 ${student.sub3_marks} \nsub4 ${student.sub4_marks} \nsub5 ${student.sub5_marks} \npercentage: ${percentage}%`)

// // //  write a program to create properties of person such as name, contact, addrress, qualification, hobbies

// // let person = {
// //     name:'divya',
// //     contact : 6363961217,
// //     address: 'bengaluru',
// //     qualifictaion: 'BE',
// //     hobbies : ["painting", "playing carrom", "cooking", "reading books","singing"]
// // }

// // console.log(`My name is ${person.name}, my contact number is ${person.contact} living in ${person.address} qualification ${person.qualifictaion}and my hobbies are ${person.hobbies} `)

// // // write a property of person which includes array and object
// // let applicant = {
// //     id:1,
// //     name: 'divya',
// //     qualifictaion:'be',
// //     address: 'Bengaluru',
// //     college: 'PES, shimoga',
// //     skills: {
// //         programming_languages :["python","c"],
// //         database:["sql", "mongodb"]
// //     },
// //     hobbies : ["painting", "playing carrom", "cooking", "reading books","singing"]

// // }

// // console.log(`Applicants: \nid: ${applicant.id} \nname:${applicant.name} \nqualifictaion: ${applicant.qualifictaion} \naddress: ${applicant.address} \ncollege: ${applicant.college} \nskills: \n  Programmin_languages: ${applicant.skills.programming_languages} \n  Database: ${applicant.skills.database} \nHobbies: ${applicant.hobbies}`)

// let data = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications",
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//       street: "Skiles Walks",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342",
//       },
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems",
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Apt. 950",
//       city: "South Christy",
//       zipcode: "23505-1337",
//       geo: {
//         lat: "-71.4197",
//         lng: "71.7478",
//       },
//     },
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications",
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "58804-1099",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984",
//       },
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers",
//     },
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     address: {
//       street: "Ellsworth Summit",
//       suite: "Suite 729",
//       city: "Aliyaview",
//       zipcode: "45169",
//       geo: {
//         lat: "-14.3990",
//         lng: "-120.7677",
//       },
//     },
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//       catchPhrase: "Implemented secondary concept",
//       bs: "e-enable extensible e-tailers",
//     },
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     address: {
//       street: "Dayna Park",
//       suite: "Suite 449",
//       city: "Bartholomebury",
//       zipcode: "76495-3109",
//       geo: {
//         lat: "24.6463",
//         lng: "-168.8889",
//       },
//     },
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//       catchPhrase: "Switchable contextually-based project",
//       bs: "aggregate real-time technologies",
//     },
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   },
// ];

// console.log(data[0].id)
// console.log(data[0].name)
// console.log(data[0].username)
// console.log(data[0].email)
// console.log(data[0].address)
// console.log(data[0].address.geo)
// console.log(data[0].phone)
// console.log(data[0].website)
// console.log(data[0].company)