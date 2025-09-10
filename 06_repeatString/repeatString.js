const repeatString = function(string, repetitions) {
    let finalString = '';
    Math.floor(repetitions);
    if (repetitions >= 0){
        for (let i = 0; i < repetitions; i++){
            finalString += string;
        }
        return finalString;
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
