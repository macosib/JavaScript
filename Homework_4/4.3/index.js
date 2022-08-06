const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.promises.createInterface({ input, output });
const fs = require("fs");
const textMessage = [
  "Некорректный ввод данных!",
  "Ваше число больше, попытайтесь еще раз!",
  "Ваше число меньше, попытайтесь еще раз!",
  "Правильно!",
  "Введите число от 0 до 10, для выхода введите 'quit'",
];

const path = "./log_file.txt";

function log(path) {
  return async (data) => {
    await fs.promises.appendFile(path, data);
  };
}

// let questionPromise = new Promise(function (resolve, reject) {
//   rl.question(textMessage[4], (number) => {
//     let userNumber = number;
//     rl.close();
//     return resolve(userNumber);
//   });
// });

const logger = log(path);

async function main() {
  const randomNumber = Math.floor(Math.random() * 10);
  let counter = 1;
  let text;
  let data;

  logger("Начало игры!\n");

  while (true) {
    const userNumber = await rl.question(
      `Введите число от 0 до 10, для выхода введите 'quit'.\nПопытка№${counter}: `
    );
    if (userNumber == "quit") {
      logger(`Ввод пользователя: ${userNumber}\n`);
      rl.close();
      break;
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
      console.log(text, `Количество попыток = ${counter}`, "\n");
      logger("Игра завершена!\n\n");
      rl.close();
      break;
    }
    data = `Ввод пользователя ${userNumber}, Количество попыток - ${counter}, Ответ системы ${text}\n`;
    logger(data);
    counter++;
    continue;
  }
}

main();
