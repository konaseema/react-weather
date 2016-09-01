//This is the hash table approach
//Loop through the string and put the character and the number of times it appears in the hash table
//Loop through the second string, and if it's not in the string, or has been counted more times than it appears in the first string, return false
//Otherwise subtract the amount of times it has appeared in the string
//If both the letters in the second string match the letters in the first string and have equal counts then return true
//This approach is faster in terms of time as hash table lookups are O(1) and don't require us to sort
//However the disadvantage is that we have to keep both strings and the hash table in memory

function permutationHashTable(s, t) {
    if (s.length === 0 || t.length === 0 || s.length !== t.length) {
        return false;
    }
    var hashTable = {};
    for (var i = 0; i < s.length; i++) {
        if (hashTable[s[i]] === undefined) {
            hashTable[s[i]] = 1;
        } else {
            hashTable[s[i]]++;
        }
    }

    for (i = 0; i < t.length; i++) {
        if (hashTable[t[i]] === undefined || hashTable[t[i]] === 0) {
            return false;
        } else {
            hashTable[t[i]]--;
        }
    }
    return true;
}
console.log(permutationHashTable('acab', 'bcaa'));



