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
