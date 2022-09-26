export default function cleanNumber(phone) {
  return phone.replace(/^8/, '+7').replace(/[-\s()]/g, '');
}
