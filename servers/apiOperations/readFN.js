const fs = require('fs');
const path = require('path');
// const dataPath = '../data/students.json'
const dataPath = path.join(__dirname + '/../data/students.json')

const read = () => {
   // const students =  fs.readFileSync('../data/students.json', 'utf-8');
   const students =  JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
   return students;
}

module.exports = read;
