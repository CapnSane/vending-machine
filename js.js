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
  console.log(count);
}

function enterPassword() {
  document.getElementById('value').innerHTML = '';
  document.getElementById('pwScreen').innerHTML = 'Approved!';
  setTimeout(() => {
    document.getElementById('pwScreen').innerHTML = '';
  }, 3000);
  console.log(count);
}

// TODO Criar função para exportar valores dos itens para a máquina de cartão
