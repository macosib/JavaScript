export default class GameSaving {
  constructor(newUser) {
    this.id = newUser.id;
    this.created = newUser.created;
    this.userInfo = {
      id: newUser.userInfo.id,
      name: newUser.userInfo.name,
      level: newUser.userInfo.level,
      points: newUser.userInfo.points,
    };
  }
}
