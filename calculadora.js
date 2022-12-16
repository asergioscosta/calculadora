let operando1 = 0.0;
let operando2 = 0.0;
let operador = null;
let saida = document.getElementById('resultado');

let iptResultado = document.getElementById('txtResultado');



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


let btnLimpar = document.getElementById('btnLimpar')
let btnResultado = document.getElementById('btnResultado')
let btnApagar = document.getElementById("btnApagar");
let btnVirgula = document.getElementById("btnVirgula");



let btnSomar = document.getElementById('btnSomar')
let btnMultiplicar = document.getElementById('btnMultiplicar')
let btnSubstrair = document.getElementById('btnSubstrair')
let btnDividir = document.getElementById('btnDividir')


function escrever(num) {

    var numero = document.getElementById('txtResultado').innerHTML;
    document.getElementById('txtResultado').innerHTML = numero + num;
}
for (var i = 0; i < iptResultado.length; i++) {
    iptResultado[i].addEventListener("click", Valor);
}

function addNumero(numero) {
    iptResultado.value += numero;
}

function limpar() {

    document.getElementById('txtResultado').innerHTML = "";
}


btnUm.addEventListener('click', function clickUm() {
    addNumero(1);
});
btnDois.addEventListener('click', function clickDois() {
    addNumero(2);
});
btnTres.addEventListener('click', function clickTres() {
    addNumero(3);
});
btnQuatro.addEventListener('click', function clickQuatro() {
    addNumero(4);
});
btnCinco.addEventListener('click', function clickCinco() {
    addNumero(5);
});
btnSeis.addEventListener('click', function clickSeis() {
    addNumero(6);
});
btnSete.addEventListener('click', function clickSete() {
    addNumero(7);
});
btnOito.addEventListener('click', function clickOito() {
    addNumero(8);
});
btnNove.addEventListener('click', function clickNove() {
    addNumero(9);
});
btnZero.addEventListener('click', function clickZero() {
    addNumero(0);
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

function calcular() {

    var resultado = document.getElementById('txtResultado').innerHTML;
    if (txtResultado) {
        document.getElementById('txtResultado').innerHTML = eval(resultado);
    }
}