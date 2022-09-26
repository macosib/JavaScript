import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then(
  (saving) => {
    console.log(`Result - ${saving}`);
  },
  (error) => {
    console.log(`Error - ${error}`);
  },
);
