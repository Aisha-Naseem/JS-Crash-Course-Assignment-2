// Q # 1 //
// let a=+prompt("Enter number here");
// function myFunction(){
// return a + 5;
// }
// console.log(myFunction());

// Q # 2 //
// function searchArray(arr, value) {
//     if (!arr.length) {
//         return false
//     }    
//     else if (arr[0] === value) {
//         return true
//     }
//     else {
//         return searchArray(arr.slice(1), value)
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let value = 4;
// console.log(searchArray(arr, value)); 
// value = 11;
// console.log(searchArray(arr, value)); 

// Q # 3 //
// function addParagraph(content) {
// const paragraph = document.createElement("p"); 
// const content = document.createTextNode(content); 
// paragraph.appendChild(text); 
// document.body.appendChild(paragraph);
// }

// Q # 5 //
// let myPara = document.getElementById("my-para");
// myPara.innerText = "Hello world";
// myPara.innerHTML = "<b>Hello World!</b>"
// console.log(myPara);
// myPara.innerHTML = "<b>Hello World!</b>";
// myPara.style.backgroundColor = "#00ff00";
// myPara.style.color = "#ff0000";

// Q # 4 //
// function addListItem(text) {
//     const list = document.querySelector('ul');
//     const listItem = document.createElement('li');
//     listItem.textContent = text;
//     list.appendChild(listItem);
//   }

  // Q # 6 //
//   function prevApplicants() {
//     let app = {
//       name: prompt("Enter Name"),
//       registrationNo: +prompt("Enter Registration no"),
//       field: prompt("Enter Your Field"),
//       instituteName: prompt("Enter Your Institute"),
//     };
//     console.log(applicants);
//     let stringify = JSON.stringify(applicants);
//     localStorage.setItem("applicants", stringify); 
//   }

  // Q # 7 //
// let prevApplicants = localStorage.getItem("applicants"); 
// let applicants = prevApplicants ? JSON.parse(prevApplicants) : [];
// function prevApplicantst() {
//   let app = {
//     name: prompt("Enter Name"),
//     registrationNo: +prompt("Enter Registration no"),
//     field: prompt("Enter Your Field"),
//     instituteName: prompt("Enter Your Institute"),
//   };
//   applicants.push(std);
//   console.log(applicants);
//   let stringify = JSON.stringify(applicants); 
//   localStorage.setItem("applicants", stringify); 
// }





  
