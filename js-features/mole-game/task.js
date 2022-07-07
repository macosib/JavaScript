const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
getHole = (index) => document.getElementById(`hole${index}`);

function stopGame() {
  console.log(dead, lost);
  if (+lost.textContent === 5) {
    alert("Вы проиграли");
    return false;
  } else if (+dead.textContent === 10) {
    alert("Вы победили");
    return false;
  }
  return true;
}

function killHole() {
  if (this.className.includes("hole_has-mole")) {
    dead.textContent = Number(dead.textContent) + 1;
  } else {
    lost.textContent = Number(lost.textContent) + 1;
  }
  if (!stopGame()) {
    lost.textContent = 0;
    dead.textContent = 0;
  }
}

for (let index = 1; index < 10; index++) {
  getHole(index).addEventListener("click", killHole);
}
