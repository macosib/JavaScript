const chatWidget = document.querySelector('.chat-widget');
const answers = ['Мы не работаем', 'Быть не может', 'И так сойдет'];
const chatWidgetMessages = chatWidget.querySelector('.chat-widget__messages');

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

const input = chatWidget.querySelector('.chat-widget__input');

function getRandomWord() {
  randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}

function getTime() {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

function setText(text, flag = '') {
  chatWidgetMessages.innerHTML += `
  <div class="message ${flag}">
    <div class="message__time">${getTime()}</div>
    <div class="message__text">${text}</div>
  </div>
`;
  chatWidgetMessages.scrollIntoView(false);
}

function addAnswer() {
  setText(input.value, 'message_client');
  setText(getRandomWord());
  input.value = '';
  // setTimeout(function run() {
  //   if (chatWidget.classList.contains('chat-widget_active')) {
  //     setText('Ну и где вопрос?');
  //     setTimeout(run, 10000);
  //   }
  // }, 10000);
}

input.addEventListener('change', addAnswer);
