const fs = require('fs');


const decode = (message_file) => {
    let lines = message_file.split("\n");
  let sortedLines = lines.sort((x,y) => {
    let numX = +x.split(' ')[0]
    let numY = +y.split(' ')[0]
    return numX - numY
  });
  while(sortedLines[0].length === 0) {
      sortedLines.shift()
    }
    
    let pyramid = [];
    let first = [sortedLines.shift()];
    pyramid.push(first);
    
    
    while(sortedLines.length > 0) {
        let lastLength = pyramid[pyramid.length - 1].length;
        let row = [];
        while(row.length < lastLength + 1) {
            let ele = sortedLines.shift();
            row.push(ele);
        }
        pyramid.push(row);
    }
    console.log(pyramid)

  let result = ""
  pyramid.forEach((row,i) => {
      let word = row[row.length - 1]
      word = word.split(" ")[1]
      word =  word.replace(/\r/g, '');
      result += word 
      if(i < pyramid.length - 1) {
          result += ' '
        }
  })
  return result
}


fs.readFile('coding_qual_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log(decode(data))
});

