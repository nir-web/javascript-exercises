const sumAll = function(a,b) {
    if (a < 0 || b < 0 || !(Number.isInteger(a)) || !(Number.isInteger(b))){
        return 'ERROR';
    } else if (a > b) {
        let m = a;
        let n = b;
        let sum = 0;
        for (let i = n; i < m + 1; i++){
            sum += i;
        }
        return sum;
    } else {
        let sum = 0;
        for (let i = a; i < b + 1; i++){
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
