const repeatString = function(string, repeat) {
    let ans = "";

    if (repeat >= 0) {
        for (let i=0; i<repeat; i++) {
            ans += string;
        }
        return ans;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
