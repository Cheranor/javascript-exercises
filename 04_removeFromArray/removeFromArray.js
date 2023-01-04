const removeFromArray = function() {
    let args = Array.from(arguments)
    let array = args[0];
    let deletions = args.slice(1);

    for (const deletion of deletions) {
        let i = 0;
        while (i < array.length) {
            if (array[i] === deletion) {
                array.splice(i, 1);
            }
            else {
                i++;
            }
        }
    }
    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
