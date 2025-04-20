const pug = require('pug');
const fs = require('fs');
const path = require('path');

// Compile main form
const formHtml = pug.renderFile('criminal-risk-assessment.pug');
fs.writeFileSync('index.html', formHtml);

// Compile thank you page
const thankYouHtml = pug.renderFile('thank-you.pug');
fs.writeFileSync('thank-you.html', thankYouHtml);

console.log('Files compiled successfully!'); 