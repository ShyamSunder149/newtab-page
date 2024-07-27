
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function fetchCSV() {
  fetch(chrome.runtime.getURL('./assets/lessreal-data.csv'))
    .then(response => response.text())
    .then(text => parseCSV(text))
    .catch(error => console.error('Error fetching CSV:', error));
}

function parseCSV(contents) {
  let lines = contents.split('\n');
  let res = lines.map(line => line.split(';'));
  const randomElement = res[Math.floor(Math.random() * res.length)]
  document.getElementById("quote").innerHTML = randomElement[3];
  document.getElementById("owner").innerHTML = "- " + randomElement[2] + " " + randomElement[1];
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('widget').innerHTML += '<p>' + new Date().toDateString() + '</p>';
    updateClock();
    setInterval(updateClock, 1000);
    fetchCSV();
});
  

