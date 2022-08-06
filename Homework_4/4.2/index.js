const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });
const fs = require("fs");
const textMessage = [
  "Некорректный ввод данных!",
  "Ваше число больше, попытайтесь еще раз!",
  "Ваше число меньше, попытайтесь еще раз!",
  "Правильно!",
];
const path = "./log_file.txt";

function log(path) {
  return (data) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  };
}

const logger = log(path);

function main() {
  const randomNumber = Math.floor(Math.random() * 10);
  let counter = 1;
  let text;
  let data;
  logger("Начало игры!\n");
  function game() {
    rl.question(
      `Введите число от 0 до 10, для выхода введите 'quit'.\nПопытка №${counter}: `,
      (userNumber) => {
        if (userNumber == "quit") {
          data = `Ввод пользователя ${userNumber}, Количество попыток - ${counter}\n`;
          logger(data);
          rl.close();
          return;
        } else if (isNaN(userNumber) || +userNumber < 0 || +userNumber > 1000) {
          text = textMessage[0];
        } else if (userNumber > randomNumber) {
          text = textMessage[1];
        } else if (userNumber < randomNumber) {
          text = textMessage[2];
        } else {
          text = textMessage[3];
          data = `Ввод пользователя ${userNumber}, Количество попыток - ${counter}, Ответ системы ${text}\n`;
          logger(data);
          logger("Игра завершена!\n\n");
          rl.close();
          return;
        }
        console.log(text, `Количество попыток =${counter}`, "\n");
        data = `Ввод пользователя ${userNumber}, Количество попыток - ${counter}, Ответ системы ${text}\n`;
        logger(data);
        counter++;
        game();
      }
    );
  }
  game();
}

main();
