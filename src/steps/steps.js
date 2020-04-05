const steps = (n) => {
    for (let i=1; i<=n; i++){
        printStep(i);
    }
}

const printStep = (i) => {
    let hashs = ''
    for (let k=0; k<i ;k++) {
        hashs+='#';
    }
    console.log(hashs)
}

module.exports = steps;