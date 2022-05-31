const fs = require('fs');
const path = require('path');
const datapath = path.join(__dirname + '/../data/students.json');
const readFN = require('./readFN');


const deleteFN = (newData) => {
    const students = readFN();
    const name  = newData.name;
    if(!(name in students)) {throw new Error(`${name} is not exsits`)}
    else {
        delete students[name];
        fs.writeFileSync(datapath, JSON.stringify(students))
    }
}

module.exports = deleteFN;