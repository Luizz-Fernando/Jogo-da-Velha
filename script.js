var player = "batman";
var jogadas = 0;
var jogando = true;


function checkjogo(id) {
  var slot = document.getElementById(id);
  var pc = document.getElementById("cpus").checked;


  if (slot.style.backgroundImage == "" && jogando == true) {
    slot.style.backgroundImage = `url(img/${player}.png)`;

    jogadas++;

    if (ganhador() == true) {
    }

    player = (player == "batman" ? "coringa" : "batman");

  }


  if (pc && player == 'coringa') {
    checkjogo(jogoDoPc());
  }

  function jogoDoPc() {
    return 'c' + Math.floor((Math.random() * 9) + 1);
  }


}



function ganhador() {
  var arry = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],

    [1, 5, 9],
    [3, 5, 7],
  ];

  for (let id of arry) {
    let um = document.getElementById("c" + id[0]).style.backgroundImage;
    let dois = document.getElementById("c" + id[1]).style.backgroundImage;
    let tres = document.getElementById("c" + id[2]).style.backgroundImage;

    if (um == dois && um == tres && um != "") {
      document.getElementById("texto").innerHTML = `${player} ganhou!!!`;


      um = document.getElementById("c" + id[0]).style.border = "3px solid #ffea00";
      dois = document.getElementById("c" + id[1]).style.border = "3px solid #ffea00";
      tres = document.getElementById("c" + id[2]).style.border = "3px solid #ffea00";


      jogando = false;
      return true;
    }
  }

  if (jogadas == 9) {
    document.getElementById("texto").innerHTML = "Deu velha!!";
  }
}




function reset() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("c" + i).style.backgroundImage = "";

    jogadas = 0;
    jogando = true;
    player = "batman";

    document.getElementById("c" + i).style.border = "";

    document.getElementById("texto").innerHTML = "";
  }
}
