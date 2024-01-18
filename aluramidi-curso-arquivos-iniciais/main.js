function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou Seletor inválido');
    }

}

const ListaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

//Primeira forma de fazer
// //enquanto

// while (contador < ListaDeTeclas.length) {
//     //adiciona o evento de clique para cada tecla da lista

//     const tecla = ListaDeTeclas[contador];

//     const instrumento = tecla.classList[1];

//     //template string
//     const idAudio = `#som_${instrumento}`;

//     // console.log(idAudio);

//     tecla.onclick = function(){
//         tocaSom(idAudio);
//     };

//     contador = contador + 1;

//     // console.log(contador);
// }

//Segunda forma de fazer
//para 
//contador ++ é igual a contador = contador + 1
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
    //adiciona o evento de clique para cada tecla da lista

    const tecla = ListaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }


    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
