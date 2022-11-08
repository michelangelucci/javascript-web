const teclas = document.querySelectorAll('input[type=button]');

for(let i=0; i<teclas.length ; i++)
  teclas[i].addEventListener('click', myFunc);

function myFunc()
{
  const value = this.value;
  const display = document.querySelector('input[type=tel]');
  display.value += value;
}

for(let i=0; i<teclas.length ; i++)
  {
    const key = teclas[i];

    key.onkeydown = function (event)
    {
        if(event.code === "Enter" || event.code === "Space")
         {
            key.classList.add('ativa');
         }
    }
    
    key.onkeyup = function (event)
    {
        if(event.code === "Enter" || event.code === "Space")
         {
            key.classList.remove('ativa');
         }
    }
  }
