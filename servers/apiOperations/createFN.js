const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname + '/../data/students.json')


const createFN = (newData) => {
    const students = JSON.parse(fs.readFileSync(dataPath , "utf-8"));
    const name = newData.name;
    if(name in students){throw new Error(`student ${name} is already exists`); return}  
    students[name] = newData;
    // const newStudents = Object.assign(students, newData);

    fs.writeFileSync(dataPath, JSON.stringify(students));
    // return students;
    return
}

module.exports = createFN;