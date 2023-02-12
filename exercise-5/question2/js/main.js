function loadImage() {
  const inputField = document.getElementById("inputField");
  const inputValue = inputField.value;
  const myImage = document.getElementById("my-image");
  myImage.src = inputValue;
  myImage.addEventListener("error", function () {
    alert(`Invalid image path: ${inputValue}`);
  });
}
