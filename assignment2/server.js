const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const fs = require("fs");
const server = http.createServer(app);
const io = socketio(server);
const formatPostMessage = require("./utils/post.js");
const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  getUserById,
  addUserToRoom,
} = require("./utils/user");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
const botName = "ChatCord bot";

//auth
const session = require("express-session");
const UserModel = require("./public/data/members.js");

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "key to sign cookie",
    resave: false,
    saveUninitialized: false,
  })
);

globals = {};

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  globals.username = username;
  globals.password = password;
  const membersData = fs.readFileSync("./public/data/members.js");
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
  res.sendFile(__dirname + "/public/index.html");
});

//route for online users api
app.get("/onlineUsers", (req, res) => {
  if (!req.session.user) {
    res.redirect("/login");
    return;
  } else {
    res.sendFile(__dirname + "/public/onlineusers.html");
  }
});

//run when a client connects
io.on("connection", (socket) => {
  //join and make user object
  socket.on("joinRoom", ({ room }) => {
    const user = userJoin(socket.id, globals.username, room);
    socket.join(user.room);
    socket.emit("message", formatMessage(botName, "Welcome to ChatCord"));
    socket.emit("current-user", getUserById(socket.id));
    const currentUser = getUserById(socket.id);
    console.log(currentUser.username);
    //send users and room info
    io.to(user.room).emit("roomUsers", {
      currentusername: currentUser.username,
      users: getRoomUsers(user.room),
    });
  });

  socket.on("submit-post", (post) => {
    console.log("Recieved message", post);
    post=formatPostMessage(post.title, post.description);
    // WRITE TO JSON
    const data = fs.readFileSync(__dirname + "/public/data/post.js");
    let jsonArray = JSON.parse(data);

    // add the new object to the array
    jsonArray.push(post);

    // convert the array to a JSON string
    const jsonData = JSON.stringify(jsonArray);

    // write the JSON string to the file
    fs.writeFileSync(__dirname + "/public/data/post.js", jsonData);

    io.emit("postMessage", jsonArray);
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

  //runs when a client disconnects
  socket.on("disconnect", () => {
    //remove user from list of active users
    const user = userLeave(socket.id);
    if (user) {
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
