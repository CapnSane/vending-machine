let count = '';
let valueAdd = '';
let disapprovedCount = '';
let password = 123456;

function numberGen(clicked_id) {
  var storedValue = document.getElementById(clicked_id).innerText;
  valueAdd += storedValue;
  console.log(storedValue);
}

function addAsterisk() {
  count += '*';
  document.getElementById('pwScreen').innerHTML = count;
  console.log(count);
}

function removeAsterisk() {
  count = count.slice(0, -1);
  valueAdd = valueAdd.slice(0, -1);
  document.getElementById('pwScreen').innerHTML = count;
  console.log(count);
}

function cancelAsterisk() {
  count = '';
  valueAdd = '';
  disapprovedCount = '';
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
  count = '';
  if (valueAdd == password) {
    document.getElementById('pwScreen').innerHTML = 'Approved!';
    disapprovedCount = '';
    setTimeout(() => {
      document.getElementById('pwScreen').innerHTML = '';
      document.getElementById('value').innerHTML = '';
      document.getElementById('pwScreen').innerHTML = count;
    }, 3000);
    console.log(count);
  } else if (disapprovedCount != '**') {
    document.getElementById('pwScreen').innerHTML = 'Retry';
    valueAdd = '';
    setTimeout(() => {
      document.getElementById('pwScreen').innerHTML = '';
      document.getElementById('value').innerHTML = '';
    }, 1000);
    disapprovedCount += '*';
  } else if (disapprovedCount == '**') {
    document.getElementById('pwScreen').innerHTML = 'Card blocked';
    setTimeout(() => {
      document.getElementById('pwScreen').innerHTML = '';
      document.getElementById('value').innerHTML = '';
    }, 3000);
  }
  console.log(valueAdd);
  console.log(disapprovedCount);
}

// TODO Criar função para exportar valores dos itens para a máquina de cartão
