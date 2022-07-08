counter = document.getElementById("clicker__counter");
image = document.getElementById("cookie");
clickRate = document.getElementById("clicker__speed");
clickRateTime = new Date().getTime();

function imageSize() {
  img.width = ++counter.textContent % 2 ? 250 : 200;
  clickRateNow = new Date().getTime();
  clickRate.textContent =
    Math.round((1 / ((clickRateNow - clickRateTime) / 1000)) * 100) / 100;
  clickRateTime = clickRateNow;
}

image.addEventListener("click", imageSize);
