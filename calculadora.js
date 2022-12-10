let operando1 = 0.0;
let operando2 = 0.0;
let operador = null;

let iptResultado = document.getElementById('txtResultado');

//botões numéricos

let btnUm = document.getElementById('btnUm')
let btnDois = document.getElementById('btnDois')
let btnTres = document.getElementById('btnTres')
let btnQuatro = document.getElementById('btnQuatro')
let btnCinco = document.getElementById('btnCinco')
let btnSeis = document.getElementById('btnSeis')
let btnSete = document.getElementById('btnSete')
let btnOito = document.getElementById('btnOito')
let btnNove = document.getElementById('btnNove')
let btnZero = document.getElementById('btnZero')

//teclas adicionais do teclado

let btnLimpar = document.getElementById('btnLimpar')
let btnResultado = document.getElementById('btnResultado')
let btnApagar = document.getElementById("btnApagar");
let btnVirgula = document.getElementById("btnVirgula");

//teclas dos operadores

let btnSomar = document.getElementById('btnSomar')
let btnMultiplicar = document.getElementById('btnMultiplicar')
let btnSubstrair = document.getElementById('btnSubstrair')
let btnDividir = document.getElementById('btnDividir')


for (var i = 0; i < iptResultado.length; i++) {
    iptResultado[i].addEventListener("click", Valor);
}

function addNumero(numero) {
    iptResultado.value += numero;
}

function limparResultado() {
    iptResultado.value = '';
}



btnUm.addEventListener('click', function clickUm() {
    addNumero(1);
});
btnDois.addEventListener('click', function clickDois() {
    addNumero(1);
});
btnTres.addEventListener('click', function clickTres() {
    addNumero(1);
});
btnQuatro.addEventListener('click', function clickQuatro() {
    addNumero(1);
});
btnCinco.addEventListener('click', function clickCinco() {
    addNumero(1);
});
btnSeis.addEventListener('click', function clickSeis() {
    addNumero(1);
});
btnSete.addEventListener('click', function clickSete() {
    addNumero(1);
});
btnOito.addEventListener('click', function clickOito() {
    addNumero(1);
});
btnNove.addEventListener('click', function clickNove() {
    addNumero(1);
});
btnZero.addEventListener('click', function clickZero() {
    addNumero(1);
});


btnLimpar.addEventListener('click', () => {
    limparResultado();
});


btnSomar.addEventListener('click', function somar() {
    operando1 = iptResultado.value;
    operador = 'SOMA';
    iptResultado.value = '';
})
btnMultiplicar.addEventListener('click', function multiplicar() {
    operando1 = iptResultado.value;
    operador = 'MULTIPLICACAO';
    iptResultado.value = '';
})
btnSubstrair.addEventListener('click', function subtrair() {
    operando1 = iptResultado.value;
    operador = 'SUBTRACAO';
    iptResultado.value = '';
})
btnDividir.addEventListener('click', function dividir() {
    operando1 = iptResultado.value;
    operador = 'DIVISAO';
    iptResultado.value = '';
})

btnResultado.addEventListener('click', () => {
    operando2 = iptResultado.value;
    iptResultado.value = parseFloat(operando1) + parseFloat(operando2);
})

btnResultado.addEventListener('click', () => {
    operando2 = iptResultado.value;
    iptResultado.value = parseFloat(operando1) * parseFloat(operando2);
})
btnResultado.addEventListener('click', () => {
    operando2 = iptResultado.value;
    iptResultado.value = parseFloat(operando1) - parseFloat(operando2);
})
btnResultado.addEventListener('click', () => {
    operando2 = iptResultado.value;
    iptResultado.value = parseFloat(operando1) / parseFloat(operando2);
})

function Valor() {

    if (verificarOperador(this.value)) {
        var aux = tela.value.substring(tela.value.length - 1, tela.value.length);
        if (verificarOperador(aux)) {
            btnApagar();
        }
    }
    if (this.value) {
        tela.value += this.value;
    }

}

function verificarOperador(valor) {
    switch (valor) {
        case "+":
            return true;
        case "-":
            return true;
        case "*":
            return true;
        case "/":
            return true;

        default:
            return false;
    }
}