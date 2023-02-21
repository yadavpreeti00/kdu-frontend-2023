const users=[];
const activeusers=[];
const rooms = [];

//join user to chat
function userJoin(id,username,room){
    const user={id,username,room};
    users.push(user);
    return user;
}

function setUser(username,password){
    const user={username,password};
    activeusers.push(user);
    return user;
}

//get current user
function getCurrentUser(id){
    return users.find(user=>user.id===id);
}

//user leaves chat
function userLeave(id){
    const index=users.findIndex(user=>user.id===id);
    if(index!==-1){
        //retrun users array ka username ->index[0] without that user
        return users.splice(index,1)[0];
    }
}

function getRoomUsers(room){
    return users.filter(user=>user.room===room);
}

function getUserById(id){
    return users.find(user=>user.id===id);
}

function addUserToRoom(user, roomId) {
    // If the room already exists, add the user to the room's user list
    const roomIndex = rooms.findIndex((room) => room.id === roomId);
    if (roomIndex !== -1) {
      rooms[roomIndex].users.push(user);
    }
    // If the room doesn't exist yet, create it and add the user to its user list
    else {
      const newRoom = { id: roomId, users: [user] };
      rooms.push(newRoom);
    }
  }

function getUserByUsername(username) {
    return activeusers.find(user=>user.username===username);
}



module.exports ={
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
    getUserById,
    addUserToRoom,
    setUser,
    getUserByUsername
}