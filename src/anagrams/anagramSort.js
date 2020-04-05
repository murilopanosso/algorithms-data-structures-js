const anagramSort = (strA, strB) => {
    return cleanStr(strA) === cleanStr(strB);
}


const cleanStr = (str) => {
   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagramSort;