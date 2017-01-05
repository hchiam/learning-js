function insertStringBeforeIndex(str, index, substr) {
    var newStr = "";
    var substrLength = substr.length;
    newStr = str.slice(0, index) + substr + str.slice(index-1 + Math.abs(substrLength));
    return newStr;
}