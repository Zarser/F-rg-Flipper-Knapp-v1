  alert("Kan orsaka epilepsi, dem med känsliga ögon varnas!");
  
  function myFunctionHEX() {
    if (confirm("Vill du byta till HEX?")) {
    }
  }
  function myFunction() {
    if (confirm("Du är på denna redan!")) {
    }
  }



  const colors = ["green", "red", "blue", "yellow", "cyan", "brown", "white", "orange"];
  const btn = document.getElementById("btn");
  const color = document.querySelector(".color");
  
  btn.addEventListener("click", function () {
    // get random number between 0 - 3
    const randowNumber = getRandomNumber();
    console.log(randowNumber);
    document.body.style.backgroundColor = colors[randowNumber];
    color.textContent = colors[randowNumber];
  });
  
  function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }