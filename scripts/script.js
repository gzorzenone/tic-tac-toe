let gameboard = (function() {
  let gameboardArray = ["", "", "", "", "", "", "", "", ""];
  let cells = document.querySelectorAll(".cell");

  function displayGameboard() {
    gameboardArray.forEach(function(value, index) {
      cells[index].textContent = value;
    });
    game.checkWin(gameboardArray);
  }

  function addMarker(position, marker) {
    if(gameboardArray[position] === "") {
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
    addMarker: addMarker
  };
})();

let player = (marker) => {
  return {
    marker
  };
};

let player1 = player("X");
let player2 = player("O");

let game = (function() {
  function getGameboard(gameboard) {
    let row1 = gameboard.slice(0, 3);
    let row2 = gameboard.slice(3, 6);
    let row3 = gameboard.slice(6);
    let rows = [row1, row2, row3];
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let cols = [col1, col2, col3];
    let diag1 = [];
    let diag2 = [];
    let diags = [diag1, diag2];

    col1.push(gameboard[0]);
    col1.push(gameboard[3]);
    col1.push(gameboard[6]);

    col2.push(gameboard[1]);
    col2.push(gameboard[4]);
    col2.push(gameboard[7]);

    col3.push(gameboard[2]);
    col3.push(gameboard[5]);
    col3.push(gameboard[8]);

    diag1.push(gameboard[0]);
    diag1.push(gameboard[4]);
    diag1.push(gameboard[8]);

    diag2.push(gameboard[2]);
    diag2.push(gameboard[4]);
    diag2.push(gameboard[6]);

    console.log(rows, cols, diags);

    return [rows, cols, diags];
  }

  function compareArrayValues(value, index, array) {
    return (index === 0 || value === array[index - 1]) && value !== "";
  }

  function checkWin(gameboard) {
    let fixedGameboard = getGameboard(gameboard);

    for(i = 0; i < 3; i++) {
      if(fixedGameboard[0][i].every(compareArrayValues)) {
        return true;
      }
      else if(fixedGameboard[1][i].every(compareArrayValues)) {
        return true;
      }
    }
    for(i = 0; i < 2; i++) {
      if(fixedGameboard[2][i].every(compareArrayValues)) {
        return true;
      }
    }
  }

  return {
    checkWin
  };
})();