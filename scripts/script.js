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
      displayGameboard();
    }
  }

  function clearGameboard() {
    gameboardArray = ["", "", "", "", "", "", "", "", ""];
    displayGameboard();
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
    displayGameboard,
    init: clearGameboard
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
  function getGameboard(gamebrd) {
    let row1 = gamebrd.slice(0, 3);
    let row2 = gamebrd.slice(3, 6);
    let row3 = gamebrd.slice(6);
    let rows = [row1, row2, row3];
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let cols = [col1, col2, col3];
    let diag1 = [];
    let diag2 = [];
    let diags = [diag1, diag2];

    col1.push(gamebrd[0]);
    col1.push(gamebrd[3]);
    col1.push(gamebrd[6]);

    col2.push(gamebrd[1]);
    col2.push(gamebrd[4]);
    col2.push(gamebrd[7]);

    col3.push(gamebrd[2]);
    col3.push(gamebrd[5]);
    col3.push(gamebrd[8]);

    diag1.push(gamebrd[0]);
    diag1.push(gamebrd[4]);
    diag1.push(gamebrd[8]);

    diag2.push(gamebrd[2]);
    diag2.push(gamebrd[4]);
    diag2.push(gamebrd[6]);

    return [rows, cols, diags];
  }

  function compareArrayValues(value, index, array) {
    return (index === 0 || value === array[index - 1]) && value !== "";
  }

  function checkWin(gamebrd) {
    let fixedGameboard = getGameboard(gamebrd);

    for(i = 0; i < 3; i++) {
      if(fixedGameboard[0][i].every(compareArrayValues)) {
        if(fixedGameboard[0][i].every((value) => value === player1.marker)) {
          alert("Player 1 wins!");
          gameboard.init();
          return;
        }
        else {
          alert("Player 2 wins!");
          gameboard.init();
          return;
        }
      }
      else if(fixedGameboard[1][i].every(compareArrayValues)) {
        if(fixedGameboard[1][i].every((value) => value === player1.marker)) {
          alert("Player 1 wins!");
          gameboard.init();
          return;
        }
        else {
          alert("Player 2 wins!");
          gameboard.init();
          return;
        }
      }
    }

    for(i = 0; i < 2; i++) {
      if(fixedGameboard[2][i].every(compareArrayValues)) {
        if(fixedGameboard[2][i].every((value) => value === player1.marker)) {
          alert("Player 1 wins!");
          gameboard.init();
          return;
        }
        else {
          alert("Player 2 wins!");
          gameboard.init();
          return;
        }
      }
    }

    if(gamebrd.every((value) => value !== "")) {
      alert("It's a tie!");
      gameboard.init();
      return;
    }

    return;
  }

  return {
    checkWin
  };
})();