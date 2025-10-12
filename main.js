function sayHello() {
  const changeHello = document.getElementById("main-titlee");
  const changeLoading = document.getElementById("status-one");
  changeHello.innerText = "สวัสดี Tee!";
  changeLoading.innerText = "Finished Loading";
}

sayHello();

function hiName() {
  const name = document.getElementById("nameInput-two").value;
  const addHello = document.getElementById("output-two");
  addHello.innerText = "สวัสดี " + name;
}

hiName();

function changeStyle() {
  const styleChange = (document.getElementById("title-three").style.color =
    "blue");
  const twoStyleChange = (document.getElementById(
    "title-three",
  ).style.fontSize = "40px");
}

function addStuff() {
  const stuffInput = document.getElementById("inputBox-four").value;
  const add = document.getElementById("display-four");
  add.innerText =
    document.getElementById("display-four").innerText +
    document.getElementById("inputBox-four").value;
}

var round = 0;
function toggleSecret() {
  const chanText = document.getElementById("secret");
  if (round / 2 == 0) {
    chanText.innerText = "";
  } else {
    chanText.innerText = "นี่คือข้อความลับ";
  }
  round += 1;
}

   function editDom6(){
  const getInput6 = document.getElementById("inputBox6").value;
     console.log(getInput6)
  const displayItem6 = document.getElementById("display6")
  displayItem6.innerHTML = "<p>" + getInput6 + "</p>";
}

   function addDom7(){
  const input7 = document.getElementById("inputBox7").value;   
  const displayItem = document.createElement("li");
  displayItem.textContent = input7 ;
  document.getElementById("display7").appendChild(displayItem);
}
