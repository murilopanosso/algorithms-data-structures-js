const palindromeWithEvery = (str) => str
                            .split('')
                            .every((char, i) => char === str[str.length -i - 1]);


module.exports = palindromeWithEvery;