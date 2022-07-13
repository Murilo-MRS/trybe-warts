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
