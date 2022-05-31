console.log('i m delete.js');
const BTNdelete = document.querySelector('#BTNdelete');
const serverAdd = 'http://127.0.0.1:1234/api/student';


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
    try
    {fetch(serverAdd, {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(jsonData),
    })}
    catch(err){console.log(err);}
})



























// BTNdelete.addEventListener('click', () => {
//     fetch(serverAdd, { method: 'DELETE' })
//         .then((res) => res.json())
//         .then((res) => {
//             console.log(res);
//         });
// })