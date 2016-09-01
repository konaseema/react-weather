function isUnique(str) {
    var charsSeen = [];
    if (str.length > 256) {
        return false
    }
    return str.split('').map(function (element) {
        if (charsSeen[element]) {
            return false;
        } else {
             charsSeen.push(element);
             return true;
        }
    }).filter(function (element) {
        return element === true;
    });
}

console.log(isUnique('aaaaab'));
console.log(isUnique('abcdefgh'));