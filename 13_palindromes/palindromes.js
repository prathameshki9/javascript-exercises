const palindromes = function (string) {
    const alphaNumeric = "abcdefghijklmnopqrstvuwxyz0123456789";
    const cleanString = string.toLowerCase().split("").filter((char) => alphaNumeric.includes(char)).join("");
    let reverse = cleanString.split("").reverse().join("");
    return cleanString === reverse;
};

// Do not edit below this line
module.exports = palindromes;
