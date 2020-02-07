var botao = document.querySelector('button');
var numero = document.querySelector('input');

function tabuada(){

    for(var i=0; i<10;i++){
        var soma= numero.value*i;
        var texto = document.createTextNode(numero.value+" X "+i+" = "+soma);
        var item = document.createElement('li');
        item.appendChild(texto);
        var lista = document.querySelector('ul');
        lista.appendChild(item);
    }
}


botao.onclick = tabuada;