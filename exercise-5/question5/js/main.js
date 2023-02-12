
// Callbacks
function add(a, b, cb) {
    const result = a + b;
    cb(result);
  }
  
  add(2, 3, (result) => {
    console.log(`The result is: ${result}`);
  });
  
  // Promises
  function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data received");
      }, 2000);
    });
  }
  
  getData().then((data) => {
    console.log(data);
  });
  

  
  // Async/Await


  async function fetchData(url) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
  }
  
  function fetchURL(){
  fetchData("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => {
      document.querySelector("#dataContainer").innerHTML = data;
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }