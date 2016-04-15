var fs = require('fs');

module.exports = {
library:[],
readCmudictFile: readCmudictFile,
formatData: formatData,
createHaiku: createHaiku,
};

function readCmudictFile(file) {
  return fs.readFileSync(file).toString();
}

function formatData(data){
	var lines = data.toString().split("\n");
	lines.forEach(function(line) {
		var lineSplit = line.split("  ");    
    	var word = lineSplit[0]; 
    	var phoneme = lineSplit[1];
    		if (phoneme.match(/\d/g) !== null ) {
    			var numOfSyll = phoneme.match(/\d/g).length;
		    		if (!module.exports.library[numOfSyll]) {
		    			module.exports.library[numOfSyll] = [];
		    			module.exports.library[numOfSyll].push(word); 
		   			}
		   			module.exports.library[numOfSyll].push(word);
    		}
	});
	return module.exports.library; 
}	   

function createHaiku(structure, syllArr) {
	var finalHaiku;
	return structure.map(function(lines){
    	return lines.map(function(syls){
    		finalHaiku = syllArr[syls];
    		return finalHaiku[Math.floor(Math.random() * finalHaiku.length)];
    	}).join(' ');
	}).join('\n');
}