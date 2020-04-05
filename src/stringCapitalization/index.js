const capitalize = (str) => {
    let arr = str.split(' ');
    let capArr = [];
    for (el of arr) {
        capArr.push(el[0].toUpperCase() + el.slice(1));
        
    }

    return capArr.join(' ');

}

module.exports = capitalize;