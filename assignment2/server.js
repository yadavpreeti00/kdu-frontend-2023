const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const fs = require("fs");
const server = http.createServer(app);
const io = socketio(server);
const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  getUserById,
  addUserToRoom,
} = require("./utils/user");

const formatPostMessage =require("./utils/post.js");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
const botName = "ChatCord bot";
const clients = [];

//auth
const session = require("express-session");
const UserModel = require("./members.js");

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "key to sign cookie",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  res.send("hello session");
  if (!req.session.isAuth) {
    res.redirect("/login");
    //socketio.emit("senduser",req.session.user)
  } else {
    res.sendFile("onlineusers.html");
  }
});

globals = {};

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  globals.username = username;
  globals.password = password;
  console.log(globals.username, globals.password);

  //res.redirect('/online')
  // Read the contents of the members.json file
  const membersData = fs.readFileSync("members.js");
  const members = JSON.parse(membersData);

  // Search for a user with matching username and password
  const user = members.find(
    (member) => member.username === username && member.password === password
  );

  if (user) {
    req.session.user = user;
    req.session.isAuth = true;
    res.redirect("/onlineUsers");
  } else {
    res.redirect("/login");
  }
});

//routes

//route for login api
app.get("/login", (req, res) => {
  res.sendFile("/home/dell/Downloads/frontend/chatcord1/public/index.html");
});

//route for online users api
app.get("/onlineUsers", (req, res) => {
  if (!req.session.user) {
    res.redirect("/login");
    return;
  } else {
    res.sendFile(
      "/home/dell/Downloads/frontend/chatcord1/public/onlineusers.html"
    );
  }
});

//run when a client connects
io.on("connection", (socket) => {
  //console.log(io.sockets.connected)

  console.log("new client connected");
  clients.push(socket);
  console.log(clients.length);

  socket.on('submit-post',(msg) => {
    const user = getCurrentUser(socket.id);
    console.log('submit-post-on');
    io.emit(
      "postMessage",
      formatPostMessage(user.username, msg.title,msg.description)
    );
  });


  

  //catch the here
  socket.on("start-chat", (selectedUserId) => {
    const currentUser = getCurrentUser(socket.id);
    const selectedUser = getUserById(selectedUserId);
    //console.log(`You are now in a personal chat with ${selectedUserId}`);

    if (selectedUser) {
      // generate a unique room ID based on the user IDs
      const roomId = [currentUser.id, selectedUser.id].sort().join("-");

      // join the current user to the room
      socket.join(roomId);

      addUserToRoom(currentUser, roomId);

      io.to(roomId).emit(
        "message",
        formatMessage(
          botName,
          `You are now in a private chat with ${selectedUser.username}`
        )
      );

      //listen to chat-message
      socket.on("chat-message", (msg) => {
        const user = getCurrentUser(socket.id);

        io.to(selectedUserId).emit(
          "message",
          formatMessage(user.username, msg)
        );
        io.to(currentUser.id).emit(
          "message",
          formatMessage(user.username, msg)
        );
      });
    } else {
      // handle error: selected user not found
      socket.emit("message", formatMessage(botName, `Selected user not found`));
    }
  });

  socket.on("joinRoom", ({ room }) => {
    const user = userJoin(socket.id, globals.username, room);
    socket.join(user.room);
    //welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to ChatCord"));

    socket.emit("current-user", globals.username);

    //send users and room info
    io.to(user.room).emit("roomUsers", {
    
      currentusername: globals.username,

      users: getRoomUsers(user.room),
    });
  });

 
  //runs when a client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);
    if (user) {
      // io.emit(
      //   "message",
      //   formatMessage(botName, `${user.username} has left the chat`)
      // );
    

      //send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
