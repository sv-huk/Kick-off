const apiUrl = 'http://livescore-api.com/api-client/scores/live.json?key=YA5ic0spiVXTxapK&secret=250T7JCp9KMi8IU7jZpv0SUiNSbl3B66';

const btnGetJsonAjax = document.querySelector('.get-json-ajax');
btnGetJsonAjax.addEventListener('click', getJsonAjax);
function getJsonAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsonData = JSON.parse(xhr.responseText);
            document.querySelector('home-team').innerText = jsonData.data;
            document.querySelector('away-team').innerText = data.match[16];
            xhr.open('GET', apiUrl, true);
            xhr.send();
        }
    }
}

// const btnFetchJson = document.querySelector('.get-json-ajax');
// btnFetchJson.addEventListener('click', fetchJson);
// function fetchJson() {
//     fetch(apiUrl)
//         .then( response => response.json() )
//         .then( jsonData =>  {
//             document.querySelector('home-team').innerText = jsonData.data.match[10];
//             document.querySelector('away-team').innerText = data.match[16];         
//         } );
// }