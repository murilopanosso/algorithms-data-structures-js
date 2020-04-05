const createMap = (str) => {
    let map = {};
    for (char of str.replace(/[\^w]/g)) {
        map[char] = map[char]+1 || 1;
    }
    return map;
}


const anagramCharMap = (strA, strB) => {
    let charMapA = createMap(strA);
    let charMapB = createMap(strB);

    for (char in charMapA) {
        if (charMapB[char] !== charMapA[char]){
            return false;
        }
    }
    return true

}

module.exports = anagramCharMap;