function modeColor() {
    let button = document.getElementById('changeButton');
  
    if (button.textContent === "Dark Mode") {
      document.body.style.backgroundColor = "black";
      button.textContent = "Light Mode";
  
  } else {
     document.body.style.backgroundColor = "white";
     button.textContent = "Dark Mode";
    }
  }
  
  let button = document.getElementById('changeButton');
  button.addEventListener('click', modeColor);