// const reverseString = function(string) {
//     let ans = "";
//     for (let i=string.length-1; i>=0; i--) {
//         ans += string[i];
//     }
//     return ans;
// };

const reverseString = function(string) {
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
