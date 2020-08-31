import ChatSocket from "./socket";

/* Get elements from HTML */
// header
const title = document.getElementById("title");
const add = document.getElementById("add");
const setting = document.getElementById("setting");

//footer
const input = document.getElementById("input");
const send = document.getElementById("send");

//main
const board = document.getElementById("board");

/* Get data from DB(username, title, history) */

const chatSocket = new ChatSocket("ws://chat.kaonmir.xyz/connection");

let username = "default";

chatSocket.setCallback("init", (data) => {
  username = data.username;
  title.innerHTML = data.title;
  for (let idx in data.chatData) {
    const chat = data.chatData[idx];
    const right = username == chat.username ? "-right" : "";
    board.innerHTML += `<div class="chatbox chatbox${right}">
      <div class="chatname chatname${right}">${chat.username}</div>
      <div class="chattext chattext${right}">${chat.message}</div>
      <div class="chattime chattime${right}">${chat.date}</div>
    </div>`;
  }
});

/* Add EventListener */
add.addEventListener("click", addFriends);
setting.addEventListener("click", setSetting);
send.addEventListener("click", sendMessage);
send.addEventListener("keyup", (e) => (e.keyCode == 13 ? sendMessage() : null));

/* Functions */

function addFriends() {}

function setSetting() {}

function sendMessage() {
  const text = input.value;
  // if (text == "") return;

  const current_date = new Date();
  const time = `${current_date.getHours()}:${current_date.getMinutes()}`;

  // 1. send message to server

  // 2. update my chatting box

  // 3. clear input
  input.innerHTML = "";
}
