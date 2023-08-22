let gameboard = (function() {
  let gameboardArray = ["O", "X", "X", "X", "O", "O", "X", "O", "O"];

  function displayGameboard() {
    let gameboardDisplay = document.querySelector(".gameboard");

    gameboardArray.forEach(function(value) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = value;
      gameboardDisplay.appendChild(cell);
    });
  }

  return {
    gameboardArray: gameboardArray,
    displayGameboard: displayGameboard
  };
})();