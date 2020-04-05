const vowelRegex = (str) => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
}

module.exports = vowelRegex;