const removeFromArray = function(arr, ...args) {
    const filteredArray = arr.filter(function (element) {
        if (args.includes(element)){
            return false;
        } else {
            return true;
        }
    } )
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
