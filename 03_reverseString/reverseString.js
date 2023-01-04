const reverseString = function(text) {
    let output = "";
    for (let i = 0; i < text.length; i++) {
        output += text.charAt(text.length - i - 1);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
