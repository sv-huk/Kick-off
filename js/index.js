const apiUrl = 'https://livescore-api.com/api-client/scores/live.json?key=YA5ic0spiVXTxapK&secret=250T7JCp9KMi8IU7jZpv0SUiNSbl3B66';
let rowIndex = 0;
let cellIndex = 0;

function getJsonAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsonData = JSON.parse(xhr.responseText);
            for (let i = 0; i < 5; i++) {
                document.getElementById('table-results').rows[i].cells[cellIndex].innerHTML = jsonData.data.match[i].home_name;
            }
            for (let i = 0; i < 5; i++) {
                document.getElementById('table-results').rows[i].cells[cellIndex + 1].innerHTML = jsonData.data.match[i].score;
            }
            for (let i = 0; i < 5; i++) {
                document.getElementById('table-results').rows[i].cells[cellIndex + 2].innerHTML = jsonData.data.match[i].away_name;
            }
            document.getElementById("matchInfo1").onclick = function () {
                alert("Status - " + jsonData.data.match[0].status.toLowerCase() + "\nLocation - " + jsonData.data.match[0].location + "\nCompetition - " + jsonData.data.match[0].competition_name);
            }
            document.getElementById("matchInfo2").onclick = function () {
                alert("Status - " + jsonData.data.match[1].status.toLowerCase() + "\nLocation - " + jsonData.data.match[1].location + "\nCompetition - " + jsonData.data.match[1].competition_name);
            }
            document.getElementById("matchInfo3").onclick = function () {
                alert("Status - " + jsonData.data.match[2].status.toLowerCase() + "\nLocation - " + jsonData.data.match[2].location + "\nCompetition - " + jsonData.data.match[2].competition_name);
            }
            document.getElementById("matchInfo4").onclick = function () {
                alert("Status - " + jsonData.data.match[3].status.toLowerCase() + "\nLocation - " + jsonData.data.match[3].location + "\nCompetition - " + jsonData.data.match[3].competition_name + "\ntime - " + jsonData.data.match[3].time + " min");
            }
            document.getElementById("matchInfo5").onclick = function () {
                alert("Status - " + jsonData.data.match[4].status.toLowerCase() + "\nLocation - " + jsonData.data.match[4].location + "\nCompetition - " + jsonData.data.match[4].competition_name + "\ntime - " + jsonData.data.match[4].time + " min");
            }
        }
    }
    xhr.open('GET', 'live-scores.json', true);
    xhr.send();
}

function getJsonAjax2() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsonData = JSON.parse(xhr.responseText);
            for (let i = 0; i < 4; i++) {
                document.getElementById('table-leaderboards').rows[i + 1].cells[cellIndex + 1].innerHTML = jsonData.data.team[i].team_name;
            }
            for (let i = 0; i < 4; i++) {
                document.getElementById('table-leaderboards').rows[i + 1].cells[cellIndex + 2].innerHTML = jsonData.data.team[i].games_played;
            }
            for (let i = 0; i < 4; i++) {
                document.getElementById('table-leaderboards').rows[i + 1].cells[cellIndex + 3].innerHTML = jsonData.data.team[i].goal_dif;
            }
            for (let i = 0; i < 4; i++) {
                document.getElementById('table-leaderboards').rows[i + 1].cells[cellIndex + 4].innerHTML = jsonData.data.team[i].points;
            }
        }
    }
    xhr.open('GET', 'leaderboards.json', true);
    xhr.send();
}

mybutton = document.getElementById("scrollToTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
