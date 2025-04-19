const pug = require('pug');
const fs = require('fs');

// Compile the Pug template
const compiledFunction = pug.compileFile('criminal-risk-assessment.pug');
const html = compiledFunction();

// Write the HTML to a file
fs.writeFileSync('index.html', html);
console.log('Pug template compiled to HTML successfully!'); 