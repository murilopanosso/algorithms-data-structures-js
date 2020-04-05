const reverse = (str) => {
    let reversed = '';
    for (char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

module.exports = reverse;

// const reverse1 = (str) => {
//     let reversed = "";
//     for (let i = str.length - 1 ;i >= 0 ; i--) {
//         reversed += str[i];
//     }
//     return reversed
// }


// const reverse2 = (str) => {
//     return(str.split('').reverse().join(''));
// }



