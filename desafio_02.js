const teclas = document.querySelectorAll("input[type=button]");

for (let i=0; i < teclas.length; i++)
  teclas[i].addEventListener('click', myFunc);

function myFunc() 
{
    const valor = this.value;
    const display = document.querySelector("input[type=tel]");
    display.value += valor;
}