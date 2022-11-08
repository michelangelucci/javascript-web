const entrar = document.querySelector(".entrar");
const cadastrar = document.querySelector(".cadastrar");
const login = document.querySelector(".login");
const cadastro = document.querySelector(".cadastro")

entrar.addEventListener('click', function() {
    cadastrar.classList.toggle('active');
    login.classList.toggle('hidden');
    entrar.classList.toggle('active');
    cadastro.classList.toggle('hidden');
});

cadastrar.addEventListener('click', function() {
    cadastrar.classList.toggle('active');
    login.classList.toggle('hidden');
    entrar.classList.toggle('active');
    cadastro.classList.toggle('hidden');
});