let placeHolder = document.getElementById("placeHolder");
placeHolder.addEventListener("click", deleteCard);
document.getElementById("submit").addEventListener("click", postInput);
let cardCounter = 0;

function postInput () {
  let messageText = document.getElementById("textValue").value;
  let newMessage = document.createElement("div");
  newMessage.setAttribute("class", "textBox");
  newMessage.setAttribute("id", cardCounter);
  let textContent = document.createElement("p");
  textContent.innerHTML = messageText;
  newMessage.appendChild(textContent);
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "delete--" + cardCounter);
  deleteButton.innerHTML = "Delete";
  newMessage.appendChild(deleteButton);
  placeHolder.appendChild(newMessage);
  cardCounter++;
}

function deleteCard (){
  let position = event.target;
  let idString = position.id;
  let splitId = idString.split("--");
  let removeCard = document.getElementById(splitId[1]);
  placeHolder.removeChild(removeCard);
}

