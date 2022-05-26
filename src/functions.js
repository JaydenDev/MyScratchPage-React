const $ = document.querySelector.bind(document);
var sig = "appCompat"

export function fetchData() {
    const input = document.getElementById('input').value;   
    const username = document.getElementById('input').value;   
    document.querySelector('#username').innerHTML = username;
   fetch('https://aviateapp.eu.org/api/' + input)
    .then(res => res.json())
    .then(data => {
        const { status } = data;
        document.getElementById("amotd").innerText = 'Aviate Status: ' +  status;
    });
    fetch('https://my-ocular.jeffalo.net/api/user/' + input)
        .then(res => res.json())
        .then(data => {
            const {  status } = data;
            document.getElementById("motd").innerText = 'Ocular Status: ' + status;
            });
    document.querySelector('#username').innerText = input;
    fetch('https://scratchdb.lefty.one/v3/forum/user/info/' + input )
        .then(res => res.json())
        .then(data => {
            const sig = data.signature;
            document.querySelector('#signature').innerHTML = sig;
        });
}

export default fetchData;