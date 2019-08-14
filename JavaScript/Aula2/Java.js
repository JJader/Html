//var texto = window.document.getElementsByTagName('p')[0];
//var texto = window.document.querySelector('div#abc');
//texto.style.color = 'blue';
console.log("Iae doido");
var txt =window.document.getElementById('txt1');


function Clicar(par) {
        if(par != null){
        var a = window.document.querySelector(par);
        a.style.background = 'red';
    }

}

function Entrar(par) {
    if(par != null){
        var a = window.document.querySelector(par);
        a.style.background = 'blue';
        var b = window.document.querySelector('div.cabecalho');
        b.innerHTML = 'O seu nomero é ' + Number(txt.value);
    }
}

function Sair(par) {
    if(par != null){
        var a = window.document.querySelector(par);
        a.style.background = '#1b5f4f';
    }
}
