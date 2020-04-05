const reverseWithReduce = (str) => str
                            .split('')
                            .reduce((reversed, char) => char + reversed, '');


module.exports = reverseWithReduce;