const box = document.querySelectorAll(".box");
const turn = document.querySelector(".turn");
const winner = document.querySelector(".winner");

let board = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
let win = ["012", "345", "678", "036", "147", "258", "048", "246"];

let tries = 0;
let player = 1;
let counter1;
let counter2;


turn.innerHTML = "1 (X)";

box.forEach((element, index) => {
  element.addEventListener("click", () => {
    insertMark(element, index);
  });
});

function insertMark(event, i) {
  console.log(event)
  if (player === 1) {
    event.innerHTML = "X";
    checkClass(i);
    player = 2;
    turn.innerHTML = "2 (O)";
  } else if (player === 2) {
    event.innerHTML = "O";
    checkClass(i);
    player = 1;
    turn.innerHTML = "1 (X)";
  }
  event.classList.add("boxInsert");
  event.removeEventListener("click", insertMark);
}

function checkClass(index) {
  if (player === 1) {
    board[index] = "X";
  } else {
    board[index] = "O";
  }
  checkWin();
  // console.log(board);
}

function checkWin() {
  for (let i = 0; i < win.length; i++) {
    // console.log(win[i]);
    counter1 = 0;
    counter2 = 0;
    for (let j = 0; j < win[i].length; j++) {
      let num = parseInt(win[i][j]);
      // console.log(num);
      if (board[num] === "X") {
        counter1 ++;
        // console.log("counter: ", counter);
      } else if (board[num] === "O"){
        counter2 ++;
      }
      if (counter1 == 3) {
        console.log("My time has come");
        winner.innerHTML = "player" + player;
        return;
      } else if (counter2 === 3){
        console.log("My time has come");
        winner.innerHTML = "player" + player;
      }
    }
    // console.log('\n\n')
  }
}
