export default function validatePhoneNumbers(number) {
  const preValidNumber = number.replace(/[- )(]/g, '');
  const validNumber = preValidNumber.replace(/^8/g, '+7');
  return validNumber;
}
