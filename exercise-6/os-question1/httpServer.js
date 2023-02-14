
const http = require('http');
const fs = require('fs');


const filePath="exercise-6/os-question1/system_details.json";


const server = http.createServer((req, res) => {
  if (req.url === '/') {
  
    const systemDetails = fs.readFileSync(filePath);
    
    const response =  `Hello, my name is Preeti! Here is my system information:\n${systemDetails}`;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(response);
    res.end();
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});