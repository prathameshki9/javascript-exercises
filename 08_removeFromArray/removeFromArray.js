const removeFromArray = function(array, ...args) {
    const ans = [];
    
    array.forEach((item) => {
        if (!args.includes(item)) {
            ans.push(item);
        }
    })

    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
