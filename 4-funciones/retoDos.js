//ejercicio 2 crea una funcion que reciba 4 parametros y devuleva como valor la media de todos ellos
function operacion() {
    var num1 = parseInt(document.getElementById('txt').value);
    var num2 = parseInt(document.getElementById('txt2').value);
    var num3 = parseInt(document.getElementById('txt3').value);
    var num4 = parseInt(document.getElementById('txt4').value);
    var media = (num1 + num2 + num3 + num4) / 4;
    document.getElementById('text').innerHTML = media;
}