var haiku = require('./haiku');
var cmudictFile = haiku.readCmudictFile('./cmudict.txt');
var processedLibrary = haiku.formatData(cmudictFile);

var answer = haiku.createHaiku([[2, 3], [2, 2, 3], [1, 4]], processedLibrary);
console.log(answer);
