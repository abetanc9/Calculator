function numeros(valor) {
    document.getElementById('resultado').value += valor;
}

function operacion() {
    let opera = document.getElementById('resultado').value;
    if( opera == 0){
        document.getElementById('resultado').value = "Sin operacion";
    } else{
        document.getElementById('resultado').value = eval(opera);
    }    
}

function resetear() {
    document.getElementById('resultado').value = " ";
}

function borrar() {
    let resultado = document.getElementById('resultado').value;
    let nuevoResultado = resultado.slice(0, -1); //esto es para eliminar último digito

    document.getElementById('resultado').value = nuevoResultado; 
}