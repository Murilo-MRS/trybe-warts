const email = 'tryber@teste.com';
const senha = '123456';

function checaLogin() {
  const btnEntrar = document.getElementById('entrar');

  btnEntrar.addEventListener('click', (event) => {
    event.preventDefault();
    const inputEmail = document.getElementById('inputEmail');
    const inputSenha = document.getElementById('inputSenha');
    if (inputEmail.value === email && inputSenha.value === senha) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

checaLogin();

function btnEnviar() {
  const btnSubmit = document.getElementById('submit-btn');
  const checkBox = document.getElementById('agreement');

  checkBox.addEventListener('change', () => {
    console.log('mudou');
    if (btnSubmit.disabled === true) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
  });
}
btnEnviar();

function textCounter() {
  const textArea = document.getElementById('textarea');
  textArea.addEventListener('keyup', () => {
    const counter = document.getElementById('counter');
    counter.innerText = 500 - textArea.textLength;
  });
}
textCounter();

function criarElementos() {
  for (let index = 0; index < 7; index += 1) {
    const elementoFilho = document.createElement('p');
    const formData = document.getElementById('form-data');

    formData.appendChild(elementoFilho);
  }
}

function inserirDados(dados) {
  const listaElementos = document.querySelector('#form-data').children;
  let materias = '';
  listaElementos[0].innerText = `Nome: ${dados[0]}`;
  listaElementos[1].innerText = `Email: ${dados[1]}`;
  listaElementos[2].innerText = `Casa: ${dados[2]}`;
  listaElementos[3].innerText = `Família: ${dados[3]}`;
  listaElementos[5].innerText = `Avaliação: ${dados[5]}`;
  listaElementos[6].innerText = `Observações: ${dados[6]}`;

  for (let index = 0; index < dados[4].length; index += 1) {
    materias += `${dados[4][index].value}, `;
  }
  listaElementos[4].innerText = `Matérias: ${materias}`;

  const esconderFormMain = document.querySelector('#evaluation-form');
  esconderFormMain.style.display = 'none';
}

function mostarDados() {
  const btnEnviarForm = document.getElementById('submit-btn');

  btnEnviarForm.addEventListener('click', (event) => {
    event.preventDefault();
    criarElementos();

    const nome = document.getElementById('input-name').value;
    const lastName = document.getElementById('input-lastname').value;
    const fullName = `${nome} ${lastName}`;
    const emailForm = document.getElementById('input-email').value;
    const casa = document.getElementById('house').value;
    const familia = document.querySelector('input[name="family"]:checked').value;
    const materias = document.querySelectorAll('.subject:checked');
    const nota = document.querySelector('[name="rate"]:checked').value;
    const obs = document.getElementById('textarea').value;
    const arrayDados = [fullName, emailForm, casa, familia, materias, nota, obs];
    inserirDados(arrayDados);
  });
}

mostarDados();
