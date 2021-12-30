let count = '';
let valueAdd = '';
let disapprovedCount = '';
let password = 123;

function numberGen(clicked_id) {
  var storedValue = document.getElementById(clicked_id).innerText;
  valueAdd += storedValue;
  console.log(storedValue);
}

function addAsterisk() {
  count += '*';
  document.getElementById('pwScreen').innerHTML = count;
}

function removeAsterisk() {
  count = count.slice(0, -1);
  valueAdd = valueAdd.slice(0, -1);
  document.getElementById('pwScreen').innerHTML = count;
}

function cancelAsterisk() {
  count = '';
  valueAdd = '';
  if (disapprovedCount.length >= 2) {
    document.getElementById('pwScreen').innerHTML = count;
    document.getElementById('pwScreen').innerHTML = '';
    document.getElementById('value').innerHTML = '';
  } else {
    disapprovedCount = '';
    document.getElementById('pwScreen').innerHTML = count;
    document.getElementById('pwScreen').innerHTML = '';
    document.getElementById('value').innerHTML = '';
  }
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
  if (valueAdd == password && disapprovedCount.length <= 2) {
    disapprovedCount = '';
    console.log(valueAdd);
    valueAdd = '';
    document.getElementById('pwScreen').innerHTML = 'Approved!';
    setTimeout(() => {
      document.getElementById('pwScreen').innerHTML = '';
      document.getElementById('value').innerHTML = '';
      document.getElementById('pwScreen').innerHTML = count;
    }, 3000);
    console.log(count);
  } else if (disapprovedCount.length >= 2 || disapprovedCount == '***') {
    valueAdd = '';
    disapprovedCount += '*';
    document.getElementById('pwScreen').innerHTML = 'Card blocked';
    setTimeout(() => {
      document.getElementById('pwScreen').innerHTML = '';
      document.getElementById('value').innerHTML = '';
    }, 3000);
  } else if (disapprovedCount.length <= 2) {
    valueAdd = '';
    document.getElementById('pwScreen').innerHTML = 'Retry';
    disapprovedCount += '*';
    setTimeout(() => {
      document.getElementById('pwScreen').innerHTML = '';
      document.getElementById('value').innerHTML = '';
    }, 1000);
  }
  console.log(valueAdd);
  console.log(disapprovedCount);
}

// TODO Criar função para exportar valores dos itens para a máquina de cartão
