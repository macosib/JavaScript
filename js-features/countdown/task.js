// function timerMessage() {
//   timer = document.getElementById("timer");
//   const intervalId = setInterval(() => {
//     timer.textContent = Number(timer.textContent) - 1;
//     if (timer.textContent <= 0) {
//       alert("Вы победили в конкурсе!");
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }

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

function beautifulTimer() {
  const timerContainer = document.getElementById("timer");
  const timer = new Date();

  function start() {
    timer.setHours(0, 0, 1, 0);
    timerContainer.textContent = timer.toTimeString().split(" ")[0];
  }

  function counting() {
    let currentTime = timer.getTime();
    timer.setTime(currentTime - 1000);
    timerContainer.textContent = timer.toTimeString().split(" ")[0];
    console.log(timer.toTimeString());
    if (
      timer.getHours() === 0 &&
      timer.getMinutes() === 0 &&
      timer.getSeconds() === 0
    ) {
      // alert("Вы победили в конкурсе!");
      clearInterval(intervalId);
      downloadFile(
        "https://files.pythonhosted.org/packages/01/a0/64ba19519db49e4094d82599412a9660dee8c26a7addbbb1bf17927ceefe/pep8-1.7.1.tar.gz"
      );
    }
  }
  start();
  const intervalId = setInterval(counting, 1000);
}

beautifulTimer();
// timerMessage();
