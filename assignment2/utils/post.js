const moment=require('moment');
function formatPostMessage(title,description){
   return{
    title,
    description,
    time:moment().format('h:mm a')
   }
}

module.exports=formatPostMessage;