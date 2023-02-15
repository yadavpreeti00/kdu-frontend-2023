const fs=require("fs");

function serveFile(res, filePath, contentType) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(`Error loading ${filePath}: ${err}`);
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  }

  module.exports = {serveFile};
  