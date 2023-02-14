const path = require('path');


function extractFileInfo(filePath){
    
        const obj=[
            path.extname(filePath),
            path.basename(filePath),
            path.dirname(filePath)
        ]
        return obj;
}

const file="/home/dell/Downloads/frontend/exercise-2/index.html";

var fileInfoResponse=extractFileInfo(file);
console.log(fileInfoResponse);

module.exports = { extractFileInfo };