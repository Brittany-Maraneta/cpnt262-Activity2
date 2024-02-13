//Numbers

//Increment or decrement a number using ++/—
const number = 5;
function changeType() {
  let number = parseInt(document.getElementById("demo").innerHTML);
  number++;
  document.getElementById("demo").innerHTML = number;
}

//const 5
//Convert a number or string to an integer with Number.parseInt()
function stringToInt() {
  let text = document.getElementById("before").value;
  text = parseInt(text);
  text *= number;
  document.getElementById("after").innerText = text;
}

//Strings

//const Brittany
//Show the number of characters in your string with String.length
function changeText() {
  let text = document.getElementById("name").innerHTML;
  let length = text.length;
  document.getElementById("aftername").innerHTML = length;
}

//Replace a word or phrase in your string with a new word or phrase using String.replace() or String.replaceAll()
function changeStory() {
  let text = document.getElementById("story").innerHTML;
  document.getElementById("story").innerHTML = text.replace(
    "Once Upon a Time",
    "BLAH BLAH BLAH BLAH BLAH BLAH"
  );
}

//Arrays

//Add to an array using the .push() or `.unshift() method
let fullName = ["Brittany", "June", "Maraneta"];
let nameList = document.getElementById("nameList");
let afterList = document.getElementById("afterList");
function addList() {
  fullName.push("Bun");
  fullName.forEach((m) => renderList(m, afterList));
}
function renderList(arr, nameList) {
  const myListItems = document.createElement("li");
  myListItems.textContent = arr;
  nameList.appendChild(myListItems);
}
fullName.forEach((m) => renderList(m, nameList));

//Merge two arrays together with .concat()
let listOne = ["HTML", "CSS", "JS"];
let listTwo = ["PYTHON"];
let uListOne = document.getElementById("listOne");
let uListTwo = document.getElementById("listTwo");
let uListAfter = document.getElementById("listAfter");
listOne.forEach((m) => renderList(m, uListOne));
listTwo.forEach((m) => renderList(m, uListTwo));
function joinList() {
  listOne = listOne.concat(listTwo);
  listOne.forEach((m) => renderList(m, uListAfter));
}

//Objects
//Create and log an array of the values of your object with Object.values()
const objectPerson = {
  name: "Brittany",
  age: 26,
  height: 5.4,
};

function renderObject() {
  document.getElementById("person").innerHTML = objectPerson.name;
}

renderObject();

//Create a new object with the new Object() syntax
const facts = new Object();
facts.name = "Brittany";
facts.age = "26";

function renderFacts() {
  document.getElementById("facts").innerHTML = facts.age;
}

renderFacts();
