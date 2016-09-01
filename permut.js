//This works similar to the first problem
//Loop through both strings and store the charCodeAt for each element in the strings
//Sort each integer representation of each string 
//Loop through each number array and subtract each element
//If the value isn't 0 then we know the two characters aren't the same thus return false
//Else return true
//This solution is O(n log n) due to the sorting operation

function permutation(s, t) {
    if (s.length === 0 || t.length === 0 || s.length !== t.length) {
        return false;
    }
    s = s.split('');
    t = t.split('');
    for (var i = 0; i < s.length; i++) {
        s[i] = s[i].charCodeAt(0);
        t[i] = t[i].charCodeAt(0);
    }
    s.sort();
    t.sort();
    for (i = 0; i < s.length; i++) {
        if (s[i] - t[i] !== 0) {
            return false;
        }
    }
    return true;
}
console.log(permutation('abb', 'aab'));
console.log(permutation('cabb', 'bbac'));
