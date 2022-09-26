export default function sortBattle(PersonList) {
  return PersonList.sort((a, b) => b.health - a.health);
}
