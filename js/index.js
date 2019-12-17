const apiUrl = 'https://livescore-api.com/api-client/scores/live.json?key=YA5ic0spiVXTxapK&secret=250T7JCp9KMi8IU7jZpv0SUiNSbl3B66';

const btnGetJsonAjax = document.querySelector('.get-json-ajax');
btnGetJsonAjax.addEventListener('click', getJsonAjax);
function getJsonAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsonData = JSON.parse(xhr.responseText);
            document.querySelector('.home-team').innerText = jsonData.data.match.home_name;
            document.querySelector('.away-team').innerText = jsonData.data.match.away_name;
            document.querySelector('.score').innerText = jsonData.data.match.ft_score;
        }
    }
    xhr.open('GET', 'live-scores.json', true);
    xhr.send();
}