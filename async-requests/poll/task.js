const poll = document.querySelector('.poll');

async function getQuestion() {
  const baseUrl = 'https://netology-slow-rest.herokuapp.com/poll.php';
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
}

function parseData(data) {
  const pollId = data['id'];
  const pollTitle = data['data']['title'];
  const pollAnswers = data['data']['answers'];
  return [pollId, pollTitle, pollAnswers];
}

function addPollButton(pollTitle, pollAnswers) {
  poll.innerHTML = `<div class="poll__title" id="poll__title">${pollTitle}</div>`;
  for (let item of pollAnswers) {
    let patternAnswer = `<button class="poll__answer">${item}</button>`;
    poll.insertAdjacentHTML('beforeend', patternAnswer);
  }
}

function addEventListenerButton(pollId, pollTitle) {
  let answerIndex;
  const buttonsAnswer = [...document.querySelectorAll('.poll__answer')];
  buttonsAnswer.forEach((element) => {
    element.addEventListener('click', (e) => {
      answerIndex = buttonsAnswer
        .map((elem) => elem.textContent)
        .indexOf(e.target.textContent);
      alert('Спасибо, ваш голос засчитан!');
      showPollResult(pollId, pollTitle, answerIndex);
    });
  });
}

async function showPollResult(pollId, pollTitle, answerIndex) {
  let statistic = await getPollResultData(pollId, answerIndex);
  await addpollResultText(statistic, pollTitle);
}

function addpollResultText(data, pollTitle) {
  const statistic = data['stat'];
  const totalVotes = statistic
    .map((element) => element['votes'])
    .reduce((value, acc) => value + acc, 0);
  poll.innerHTML = `<div class="poll__title" id="poll__title">${pollTitle}</div>`;

  for (let item of statistic) {
    let patternResult = `
    <div class="poll__conrainer">
    <div class="poll__statistic">${item['answer']}: </div>
    <div class="poll__statistic">${Math.round(
      (item['votes'] * 100) / totalVotes,
      2
    )} %</div>
    </div>
    `;
    poll.insertAdjacentHTML('beforeend', patternResult);
  }
}

async function getPollResultData(pollId, answerIndex) {
  const baseUrl = 'https://netology-slow-rest.herokuapp.com/poll.php?';
  const params = new URLSearchParams({ vote: pollId, answer: answerIndex });
  const options = {
    method: 'post',
    headers: { 'Content-type': 'application/x-www-form-urlencoded' },
  };
  const response = await fetch(baseUrl + params, options);
  const data = await response.json();
  return data;
}

async function main() {
  const data = await getQuestion();
  const [pollId, pollTitle, pollAnswers] = parseData(data);
  addPollButton(pollTitle, pollAnswers);
  addEventListenerButton(pollId, pollTitle);
}

main();