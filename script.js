var peso;
var altura;
var resultado;
var imc;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso / (altura * altura);
    resultado = document.getElementById('resultado');

    if(imc < 17){        
        resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br/><br/> Cuidado! Muito abaixo do peso.';
    }else if(imc > 17 && imc <= 18.49){
        resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br/><br/> Abaixo do peso.';
    }else if(imc >= 18.5 && imc < 24.99){
        resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br/><br/> Peso ideal.';
    }else if(imc >= 25 && imc <= 29.99){
        resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br/><br/> Acima do peso.';
    }else if(imc >= 30){
        resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br/><br/> Cuidado! Obesidade.';
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}