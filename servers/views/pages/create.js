console.log('i m create.js');


const form = document.getElementById("f");
document.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const jsonData = {};
    for (let [key, value] of data.entries()) {
        console.log('key: ' + key, 'value: ' + value);
        jsonData[key] = value;
    }
    console.log('JSON data: ', jsonData);

    fetch('http://127.0.0.1:1234/api/student', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
})


















// const btn = document.getElementById("BTNcreate");
// const serverAdd = 'http://127.0.0.1:1234/api/student';
// const data = {sheloymale: {"lastName" : "levi", "age": "33"}};
// const myFetch = () => {
//     fetch(serverAdd, {
//         method : 'POST',
//         headers: {
//             "Content-Type" : 'application/json',
//         }, 
//         body : JSON.stringify(data),
//     })
//     .then((res) => res.json())
//     .then((res) => {console.log(res)});
// }


// btn.addEventListener('click', myFetch);


