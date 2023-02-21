

const socket = io();


// constants from .html files
const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const postMessages = document.querySelector(".post-messages");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users-online");
const post = document.getElementById("post");
const currentlyOnline = document.getElementById("currently-online");
const submitPostForm = document.querySelector(".post-form-container");
const postContainer = document.querySelector(".post-container");
const chatContainer=document.querySelector(".chat-container");

const room = "chat-room";

//join (1st event after login)
socket.emit("joinRoom", { room });

//catch the redirect request 
socket.on("redirect", (url) => {
  window.location.href = url;
});

//get users list 
socket.on("roomUsers", ({ currentusername, users }) => {
  console.log(currentusername);
  outputRoomName(currentusername);
  outputUsers(users);
});

//catch the emitted message from the server
socket.on("message", (message) => {
  //output the message to DOM
  outputMessage(message);
  //scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.on("postMessage", (jsonData) => {
  console.log(jsonData);
  jsonData.forEach((post) => {
        outputAndSavePostMessage(post);
});
  //scroll down
  postMessages.scrollTop = postMessages.scrollHeight;
});


//event listeners

//event listener to go to post from sidebar
post.addEventListener("click", (e) => {
  e.preventDefault();
  postContainer.style.display="block";
  chatContainer.style.display="none";
});

//event listender to go to currently online users from sidebar
currentlyOnline.addEventListener("click", (e) => {
  e.preventDefault();
  postContainer.style.display="none";
  chatContainer.style.display="block";
});

//event listener for message submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //msg is the id of the message inside chat-form in chat.html
  const msg = e.target.elements.msg.value;
  //emit msg to server
  socket.emit("chat-message", msg);
  //clear input after submit chat event
  e.target.elements.msg.value = "";
  e.target.elements.msg.focus();
});

//event listener for post submit form
submitPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const description = e.target.elements.description.value;
  
  //emit post to server
  socket.emit("submit-post", { title: title, description: description });
  e.target.elements.title.value = "";
  e.target.elements.description.value="";
});



//functions

//start-chat
function startChat(selectedUserId) {
  // Send a chat message to the server
  socket.emit("start-chat", selectedUserId);
}

//output message to DOM
function outputMessage(message) {
  const div = document.createElement("div");
  // add class of name 'message' to div from all class list
  div.classList.add("message");
  div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
    <p class="text">${message.text}</p>`;
  //append div to 'chat-messages' class
  document.querySelector(".chat-messages").appendChild(div);
}

//output List of Active Users
function outputUsers(users) {
  userList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.username;
    li.setAttribute("data-user-id", user.id);
    //create a event listener for the user so that current user can select it and chat with it
    li.addEventListener("click", () => {
      const selectedUserId = li.getAttribute("data-user-id");
      console.log("Clicked user ID:", selectedUserId);
      startChat(selectedUserId);
    });
    userList.appendChild(li);
  });
}

//add current username to DOM
function outputRoomName(room) {
  roomName.innerHTML = room;
}

//output post to DOM
function outputAndSavePostMessage(post) {
  const div = document.createElement("div");
  div.classList.add("post");
  div.innerHTML = `<p class="title-text">${post.title}<span>${post.time}</span></p>
    <p class="description-text">${post.description}</p>`;
  document.querySelector(".post-messages").appendChild(div);
}
