const reverseString = (str) => str.split('').reduce((reversed, char) => char + reversed, '');

const palindromeWithReverse = (str) =>  str === reverseString(str);

module.exports = palindromeWithReverse;