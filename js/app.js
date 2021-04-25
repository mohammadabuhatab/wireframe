'use strict';
let students=[];
let id =1;
let total=0;
// let objData=[];
function Student (name,Email,Mobil,Tuition){
  this.id=id;
  this.name=name;
  this.Email=Email;
  this.Mobil=Mobil;
  this.Tuition=Tuition;
  total=Number(total)+Number(Tuition);
  students.push(this);
  // let studentData=JSON.stringify(students);
  // localStorage.setItem('moh',studentData);
  // let x=localStorage.getItem('moh');
  // objData=JSON.parse(x);
  settingItems();
}
Student.prototype.getAge=function(min,max){
  this.age = getRandomNumber(min, max);
};
Student.prototype.render=function(){
  const table = document.getElementById('table');
  const headerRowEl = document.createElement('tr');
  table.appendChild(headerRowEl);
  const td1El = document.createElement('td');
  headerRowEl.appendChild(td1El);
  td1El.textContent = this.id;
  const td2El = document.createElement('td');
  headerRowEl.appendChild(td2El);
  td2El.textContent = this.name;
  const td3El = document.createElement('td');
  headerRowEl.appendChild(td3El);
  td3El.textContent = this.Email;
  const td4El = document.createElement('td');
  headerRowEl.appendChild(td4El);
  td4El.textContent = this.Mobil;
  const td5El = document.createElement('td');
  headerRowEl.appendChild(td5El);
  td5El.textContent = this.age;
  const td6El = document.createElement('td');
  headerRowEl.appendChild(td6El);
  td6El.textContent = this.Tuition;
  id++;
// let tot = document.getElementById('tableCon');
// let totals=document.createElement('p');
// tot.appendChild(totals);
// totals.textContent=total;
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let myForm =document.getElementById('form');
myForm.addEventListener('submit',addNewStudent);

function addNewStudent(event){
  event.preventDefault();
  let studentEmail = event.target.email.value;
  let x =event.target.email.value.split('@');
  let studentName=x[0];
  let studentPhone =event.target.mobil.value;
  let studentTuition =event.target.tuition.value;
  const mohammad =new Student(studentName,studentEmail,studentPhone,studentTuition);
  // mohammad.render();
  // function gettingItems() {
  if (localStorage.getItem('k') !== null) {
    students = JSON.parse(localStorage.getItem('k'));
  }
  mohammad.getAge(2,6);
  mohammad.render();
}
function settingItems() {
  localStorage.setItem('k', JSON.stringify(students));
}
// gettingItems();
console.log(students);

