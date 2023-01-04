const repeatString = function(text, repeat) {
    let output = ""
    if (repeat < 0) return "ERROR";
    
    for (let i = 0; i<repeat; i++) {
        output += text;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
