function limpaRetangulo () {
    document.getElementById("img-do-retangulo").style.display = "none";
    document.getElementById("info-retangulo").style.display = "none";
}

function mostraDadosDecodificador () {
    document.getElementById('dados-decodificador').style.display = "block";
}

function criptografa () {
    var textoCriptografado = textoCru.value.replace(/e/ig, 'enter');
    textoCriptografado = textoCriptografado.replace(/i/ig, 'imes');
    textoCriptografado = textoCriptografado.replace(/a/ig, 'ai');
    textoCriptografado = textoCriptografado.replace(/o/ig, 'obter');
    textoCriptografado = textoCriptografado.replace(/u/ig, 'ufat');

    limpaRetangulo();
    mostraDadosDecodificador();
    textoResultante.value = textoCriptografado;
}

function descriptografa () {
    var textoDescriptografado = textoCru.value.replace(/ufat/ig, 'u');
    textoDescriptografado = textoDescriptografado.replace(/obter/ig, 'o');
    textoDescriptografado = textoDescriptografado.replace(/ai/ig, 'a');
    textoDescriptografado = textoDescriptografado.replace(/imes/ig, 'i');
    textoDescriptografado = textoDescriptografado.replace(/enter/ig, 'e');

    limpaRetangulo();
    mostraDadosDecodificador();
    textoResultante.value = textoDescriptografado;
}

var textoCru = document.querySelector("textarea");
textoCru.focus();

var btCriptografar = document.getElementById('bt-criptografar');
btCriptografar.onclick = criptografa;

var btDescriptografar = document.getElementById('bt-descriptografar');
btDescriptografar.onclick = descriptografa;

var textoResultante = document.querySelector('#resultado-do-texto');