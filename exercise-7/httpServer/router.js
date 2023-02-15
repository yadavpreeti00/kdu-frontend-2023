

const path = require('path');
const {serveFile}=require('./fileUtil');

function router(req, res) {
  console.log(req.url);

  if (req.url === '/' || req.url === '/cleanly') {
    serveFile(res, "exercise-7/public/assignment1/html/index.html", 'text/html');
  } else if (req.url === '/todo-app') {
    serveFile(res, "exercise-7/public/to-do/html/index.html", 'text/html');
  } else if (path.basename(req.url) === 'cleanly-index.css') {
    serveFile(res, `exercise-7/public/assignment1/style/${path.basename(req.url)}`, 'text/css');
  } else if (path.basename(req.url) === 'todo-index.css') {
    serveFile(res, `exercise-7/public/to-do/style/${path.basename(req.url)}`, 'text/css');
  } else if (/\.(png|jpe?g)$/i.test(req.url)) {
    serveFile(res, `exercise-7/public/assignment1${req.url}`, `image/${path.extname(req.url).slice(1)}`);
  } else if (path.extname(req.url) === '.js') {
    serveFile(res, `exercise-7/public/to-do/js/${path.basename(req.url)}`, 'text/javascript');
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
}



module.exports = router;
