function addTask() {
  var input = document.getElementById("inputTask").value;
  var node = document.createElement("p");
  var textnode = document.createTextNode(input);
  node.appendChild(textnode);
  document.getElementById("taskList").appendChild(node);

  var removeTask = document.createElement("input");
  removeTask.setAttribute("type", "button");
  removeTask.setAttribute("value", "Remove");
  removeTask.setAttribute("id", "removeButton");
  removeTask.addEventListener(
    "click",
    function (e) {
      node.parentNode.removeChild(node);
    },
    false
  );
  node.appendChild(removeTask);

  var editTask = document.createElement("input");
  editTask.setAttribute("type", "button");
  editTask.setAttribute("value", "Edit");
  editTask.setAttribute("id", "editButton");
  editTask.addEventListener(
    "click",
    function (e) {
      var newInput = prompt("Enter new task:", input);
      if (newInput !== null) {
        textnode.nodeValue = newInput;
      }
    },
    false
  );
  node.appendChild(editTask);
}
