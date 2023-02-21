const socket = io();

const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const postMessages = document.querySelector(".post-messages");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users-online");
const post=document.getElementById("post");
const currentlyOnline=document.getElementById("currently-online");
const submitPostForm = document.querySelector(".post-form-container");


const room="chat-room";

//join chatroom
socket.emit("joinRoom", { room });

//start-chat
function startChat(selectedUserId) {
    // Send a chat message to the server
    console.log("chat-room started");
    socket.emit("start-chat", selectedUserId);
}

socket.on("redirect", (url) => {
  console.log("redirected");
  window.location.href = url;
});


//get users list
socket.on("roomUsers", ({currentusername, users }) => {
  console.log(currentusername);
  outputRoomName(currentusername);
  outputUsers(users);
});

//emitted messages catched here
//message from server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);

  //scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.on("postMessage", (message) => {
  console.log(message);
  outputPostMessage(message);

  //scroll down
  postMessages.scrollTop = postMessages.scrollHeight;
});

post.addEventListener("click", (e) => {
  e.preventDefault();
  const msg = "Hello, world!"; // Replace with your own message
  console.log(msg);
  chatForm.style.display = "none";
  chatMessages.style.display = "none";
  submitPostForm.style.display = "block";

  
  //window.location.href = "post.html";
});

currentlyOnline.addEventListener("click", (e) => {
  e.preventDefault();
  
  submitPostForm.style.display = "none";
  chatMessages.style.display = "block";
  chatForm.style.display = "block";
  
});

//post submit form
submitPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const description = e.target.elements.description.value;
  console.log(title);
  console.log(description);
  
  socket.emit('submit-post',{title:title, description:description});
  
});

//event listener for message submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  

  //msg is the id of the message inside chat-form in chat.html
  //get message text
  const msg = e.target.elements.msg.value;

  console.log(msg);

  //emit msg to server
  socket.emit("chat-message", msg);

  //clear input after submit chat event
  e.target.elements.msg.value = "";
  e.target.elements.msg.focus();
});

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


function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = user.username;
    
    li.setAttribute('data-user-id', user.id);

    li.addEventListener('click', () => {
      const selectedUserId = li.getAttribute('data-user-id');
      console.log('Clicked user ID:', selectedUserId);
      // Perform some action when the user is clicked
      startChat(selectedUserId);
    });
    userList.appendChild(li);
  });
}


  //add current username to DOM
//add room name to DOM
function outputRoomName(room) {
  //roomName is just an h2 element
  roomName.innerHTML = room;
}

//output post to DOM
function outputPostMessage(post) {
  const div = document.createElement("div");

  // add class of name 'message' to div from all class list
  div.classList.add("post");
  div.innerHTML = `<p class="title-text">${post.title}<span>${post.time}</span></p>
    <p class="description-text">${post.description}</p>`;
  //append div to 'chat-messages' class
  document.querySelector(".post-messages").appendChild(div);
}





