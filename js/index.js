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
            // document.querySelector('.score').innerText = jsonData.data.match.ft_score;

        }
    }
    xhr.open('GET', 'live-scores.json', true);
    xhr.send();
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

// {
//     "data": {
//         "match": [
//             {
//                 "status": "FINISHED",
//                 "events": "https:\/\/livescore-api.com\/api-client\/scores\/events.json?key=YA5ic0spiVXTxapK&secret=250T7JCp9KMi8IU7jZpv0SUiNSbl3B66&id=177377",
//                 "scheduled": "13:10",
//                 "ft_score": "2 - 2",
//                 "league_name": "",
//                 "location": "Al-Saada Stadium",
//                 "ht_score": "1 - 2",
//                 "competition_name": "",
//                 "league_id": 0,
//                 "added": "2019-12-17 12:55:04",
//                 "home_id": 3654,
//                 "home_name": "AL Nassr FC",
//                 "score": "2 - 2",
//                 "id": 177377,
//                 "et_score": "",
//                 "time": "FT",
//                 "competition_id": 301,
//                 "away_name": "Muscat",
//                 "fixture_id": 0,
//                 "last_changed": "2019-12-17 15:06:10",
//                 "away_id": 3651,
//                 "outcomes": {
//                     "half_time": "2",
//                     "full_time": "X",
//                     "extra_time": null
//                 }
//             }
//     ]
// }
// }