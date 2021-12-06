function numberGen(clicked_id) {
  var storedValue = document.getElementById(clicked_id).innerText;
  console.log(storedValue);
}

let count = '';
function addAsterisk() {
  count += '*';
  document.getElementById('demo').innerHTML = count;
  console.log(count);
}

function removeAsterisk() {
  count = count.slice(0, -1);
  document.getElementById('demo').innerHTML = count;
}
