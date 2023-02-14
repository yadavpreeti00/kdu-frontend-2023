const os = require('os');
const  {writeFile}  = require('./fileUtil.js');

function getSystemDetails() {
  // get system details using os library
  const details = {
    HostName: os.hostname(),
    'Operating System': os.type(),
    Architecture: os.arch(),
    'OS Release': os.release(),
    Uptime: os.uptime(),
    'Number of CPU Cores': os.cpus().length,
    'Total Memory': os.totalmem(),
    'Free Memory': os.freemem(),
    'Current Working Directory': process.cwd(),
  };
  
  return JSON.stringify(details);
}

const filePath="exercise-6/os-question1/system_details.json";
writeFile(filePath,getSystemDetails());

