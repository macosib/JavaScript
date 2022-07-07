counter = document.getElementById("clicker__counter");
image = document.getElementById("cookie");
clickRate = document.getElementById("clicker__speed");
clickRateTime = new Date().getTime();

function imageSize() {
  const size = +counter.textContent % 2 == 0 ? 100 : -100;
  image.width += size;
  image.height = image.width;
  counter.textContent = +counter.textContent + 1;
  clickRateNow = new Date().getTime();
  clickRate.textContent =
    Math.round((1 / ((clickRateNow - clickRateTime) / 1000)) * 100) / 100;
  clickRateTime = clickRateNow;
}

image.addEventListener("click", imageSize);

function downloadFile(link) {
  let element = document.createElement("a");
  element.setAttribute("href", link);
  element.setAttribute("download", null);
  element.setAttribute("target", "_blank");

  element.style.display = "none";

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
