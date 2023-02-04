function colocarAlgo(num){
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
};

function limparDisplay(){
    document.getElementById('resultado').innerHTML = "";
};

function calcular(){
    const resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('conta').innerHTML = resultado;
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Coloque algo";
    }
};

function apagar(){
    const resultado = document.getElementById('resultado').innerHTML;
    const numero = resultado.substring(1);
    document.getElementById('resultado').innerHTML = numero;
    document.getElementById('conta').innerHTML = resultado;
}