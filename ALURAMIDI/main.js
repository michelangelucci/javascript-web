const teclas = document.querySelectorAll('.tecla');
const sons = document.querySelectorAll('audio');

function testeDeTeclas(item) 
{
    item.addEventListener('click', listenerFunction);
}

function listenerFunction()
{
    const som_da_tecla = 'som_'+this.classList.value['split'](' ')[1];
    const som = document.querySelector('#'+som_da_tecla);
    som.play();       
}

teclas.forEach(testeDeTeclas);

for (let i=0; i<teclas.length; i++)
    {
        const key = teclas[i];

        key.onkeydown = function (event) 
        {
            //console.log(event.code);
            if(event.code === 'Space' || event.code === 'Enter')
                key.classList.add('ativa');
        }

        key.onkeyup = function (event) 
        {
            key.classList.remove('ativa');
        }
    }
