const fibonacci = function(count) {
    let num = parseInt(count);
    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    if (num <= 2) return 1;

    let firsPrev = 1;
    let SecondPrev = 0;

    for (let i=2; i<=num; i++) {
        let current = firsPrev + SecondPrev;
        SecondPrev = firsPrev;
        firsPrev = current;
    }

    return firsPrev;
};

// Do not edit below this line
module.exports = fibonacci;
