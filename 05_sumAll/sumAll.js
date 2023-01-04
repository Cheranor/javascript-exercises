const sumAll = function(limit1, limit2) {
    let sum = 0;
    if (typeof limit1 != "number" || typeof limit2 != "number") return "ERROR";
    if (limit1 > limit2) {
        let temp = limit1;
        limit1 = limit2;
        limit2 = temp;
    };
    if (limit1 < 0) return "ERROR";
    for (let i = limit1; i <= limit2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
