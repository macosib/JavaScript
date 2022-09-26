export default function healthIndicator(person) {
  switch (true) {
    case person.health > 50:
      return 'healthy';
    case person.health > 15:
      return 'wounded';
    default:
      return 'critical';
  }
}
