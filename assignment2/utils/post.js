const moment=require('moment');
function formatPostMessage(username,title,description){
   return{
    username,
    title,
    description,
    time:moment().format('h:mm a')
   }
}

module.exports=formatPostMessage;