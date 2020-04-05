const vowels = (str) => {
    let count = 0;
    let checker = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (checker.includes(char)){
            count++;
        }
    }
    return count;
}

module.exports = vowels;