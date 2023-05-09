function copiar() {
    var copiarTexto = document.querySelector("#resultado-do-texto");
    copiarTexto.select();
    document.execCommand("copy");
}

var btCopiar = document.getElementById('bt-copiar');
btCopiar.onclick = copiar;