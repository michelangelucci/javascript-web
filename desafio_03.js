const teclas = document.querySelectorAll('input[type=button]');

for(let i=0; i<teclas.length ; i++)
  teclas[i].addEventListener('click', myFunc);

function myFunc()
{
  const value = this.value;
  const display = document.querySelector('input[type=tel]');
  display.value += value;
  
  this.onkeydown = function keyFunc(event)
  {
    if(event.key == VK_RETURN || event.key == VK_SPACE)
      this.classList.add('ativa');
  }

  this.onkeyup = this.classList.remove('ativa');
  
}