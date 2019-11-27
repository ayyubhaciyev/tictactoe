let X = "X";
let O = "O";
let count = 1;
let M = [];
let gamer1 = "";
let gamer2 = "";
let point1 = 0;
let point2 = 0;
Start();

function Start() {
  count = 1;
  gamer1 = gamer1 == "" ? prompt("Gamer 1 :") : gamer1;
  gamer2 = gamer2 == "" ? prompt("Gamer 2 :") : gamer2;
  ScoreShow();
  Arr();
  TblCreate();
}

function ScoreShow() {
  document.getElementsByTagName(
    "div"
  )[0].innerHTML = `<b>${gamer1} : ${point1} - ${gamer2} : ${point2}</b>`;
}
function ScoreCount(player) {
  count = 1;
  return player == X ? point1++ : point2++;
}

function Arr() {
  for (let i = 0; i < 3; i++) {
    M[i] = [];
  }
}

function WinName(player) {
  return player == X ? `${gamer1} Winner!` : `${gamer2} Winner!`;
}

function TblCreate() {
  let tbl = "";

  for (let i = 0; i < 3; i++) {
    tbl += `<tr>`;
    for (let j = 0; j < 3; j++) {
      M[i][j] = M[i][j] == undefined ? "" : M[i][j];
      tbl += `<td onclick="Clck(${i},${j})">${M[i][j]}</td>`;
    }
    tbl += `</tr>`;
  }
  document.getElementsByTagName("table")[0].innerHTML = tbl;
}

function Clck(i, j) {
  if (M[i][j] == "") {
    if (count % 2 != 0) {
      M[i][j] = X;
    } else {
      M[i][j] = O;
    }
    count++;
    setTimeout(Check,300);
    TblCreate();
  }
}

function Check() {
  for (let i = 0; i < 3; i++) {
    if (M[i][0] == M[i][1] && M[i][1] == M[i][2] && M[i][0] != "") {
      ScoreCount(M[i][0]);
      ScoreShow();
      alert(WinName(M[i][0]));
      Start();
    }
  }
  for (let i = 0; i < 3; i++) {
    if (M[0][i] == M[1][i] && M[1][i] == M[2][i] && M[0][i] != "") {
      ScoreCount(M[0][i]);
      ScoreShow();
      alert(WinName(M[0][i]));
      Start();
    }
  }

  if (M[0][0] == M[1][1] && M[1][1] == M[2][2] && M[0][0] != "") {
    ScoreCount(M[0][0]);
    ScoreShow();
    alert(WinName(M[0][0]));
    Start();
  }

  if (M[2][0] == M[1][1] && M[1][1] == M[0][2] && M[2][0] != "") {
    ScoreCount(M[2][0]);
    ScoreShow();
    alert(WinName(M[2][0]));
    Start();
  }
}
