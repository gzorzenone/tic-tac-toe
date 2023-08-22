let gameboard = (function() {
  let gameboardArray = [];
  let cells = document.querySelectorAll(".cell");

  function displayGameboard() {
    gameboardArray.forEach(function(value, index) {
      cells[index].textContent = value;
    });
  }

  function addMarker(position, marker) {
    if(gameboardArray[position] === undefined) {
      gameboardArray[position] = marker;
      console.log(gameboardArray);
      displayGameboard();
    }
  }

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      addMarker(index, player1.marker);
    });
    cell.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      addMarker(index, player2.marker);
    });
  });

  return {
    gameboardArray: gameboardArray,
    displayGameboard: displayGameboard,
    addMarker: addMarker,
  };
})();

let player = (marker) => {
  return {
    marker
  };
};

let player1 = player("X");
let player2 = player("O");