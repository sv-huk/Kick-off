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
        }
    }
    xhr.open('GET', 'live-scores.json', true);
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