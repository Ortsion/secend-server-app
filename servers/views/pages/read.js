console.log('i m read.js');
const serverAdd = 'http://127.0.0.1:1234/api/student';
const btn = document.getElementById('readBTN');
const student_details = document.getElementById('student_details');

let details;

 btn.addEventListener('click',() => {
     fetch(serverAdd)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
       details = res;
        console.log('Details = ',details);
        student_details.innerHTML = JSON.stringify(res);
    });
})