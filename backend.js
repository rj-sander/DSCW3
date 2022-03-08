const express = require('express')
const app = express()
const port = 3000
const csv = require('csv')

fs.appendFile('results.csv', dataAppend, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
 const dataAppend = answers.choice
