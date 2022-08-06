// function getPasswordChecker(initialPassword) {
//     const correctPassword = initialPassword;
//     return function checkPassword(password) {
//         return (password === correctPassword) ? true : false;
//     }
// }

function getPasswordChecker(initialPassword) {
    const correctPassword = initialPassword;
    return password => password === correctPassword ? true : false;
}

const checkPass = getPasswordChecker('qwerty');
console.log(checkPass('qwert'));
console.log(checkPass('qwe'));
console.log(checkPass('Qwerty'));
console.log(checkPass('qwerty'));
