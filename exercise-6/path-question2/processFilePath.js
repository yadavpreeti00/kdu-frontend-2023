
const  {extractFileInfo}  = require('./fileInfo.js');

const filePaths = [ 
    'dir1/dir2/file1.txt', 
    'dir1/dir3/file2.txt', 
    'dir1/dir3/file3.md', 
    'dir4/file4.jpg', 
    'dir4/file5.pdf', 
    ]; 

function processFilePaths(filePaths) {
    return filePaths.map(filePath => extractFileInfo(filePath));
}

console.log(processFilePaths(filePaths));