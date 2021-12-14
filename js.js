function numberGen(clicked_id) {
  var storedValue = document.getElementById(clicked_id).innerText;
  console.log(storedValue);
}

let count = '';
function addAsterisk() {
  count += '*';
  document.getElementById('pwScreen').innerHTML = count;
  console.log(count);
}

function removeAsterisk() {
  count = count.slice(0, -1);
  document.getElementById('pwScreen').innerHTML = count;
  console.log(count);
}

function cancelAsterisk() {
  count = '';
  document.getElementById('pwScreen').innerHTML = count;
  document.getElementById('pwScreen').innerHTML = '';
  document.getElementById('value').innerHTML = '';
  console.log(count);
}

function payWithCard(clicked_id) {
  var storedValue = document.getElementById(clicked_id).innerText;
  if (storedValue <= 6) {
    document.getElementById('value').innerHTML = 'Value ¥' + storedValue * 100;
  } else {
    document.getElementById('value').innerHTML = 'Value ¥' + storedValue * 40;
  }
  document.getElementById('pwScreen').innerHTML = 'Password:';
}

function enterPassword() {
  document.getElementById('pwScreen').innerHTML = 'Approved!';
  setTimeout(() => {
    document.getElementById('pwScreen').innerHTML = '';
    document.getElementById('value').innerHTML = '';
  }, 3000);
  console.log(count);
}

// TODO Criar função para exportar valores dos itens para a máquina de cartão
