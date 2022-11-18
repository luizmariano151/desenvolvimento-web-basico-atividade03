const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    
    //estava dando erro quando uso o e.target
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado("Peso inválido!", false);
    }else if(!altura){
        setResultado("Altura inválida!", false);
    }else{
        const nivel = getNivel(getImc(peso, altura));
        setResultado(nivel, true);
    }
});

function getNivel(imc){
    let msg = "";
    if(imc < 17){
        msg = "Muito abaixo do peso";
    }else if (imc < 18.49){
        msg = "Abaixo do peso";
    }else if(imc < 24.99){
        msg = "Peso normal";
    }else if (imc < 29.99){
        msg = "Acima do peso";
    }else if(imc < 34.99){
        msg = "Obesidade I";
    }else if(imc < 39.99){
        msg = "Obesidade II (severa)";
    }else {
        msg = "Obesidade III (mórbida)";
    }
    return msg;
}

function getImc(peso, altura){
    const imc = peso/altura ** 2;
    return imc.toFixed(2);
}

function setResultado(msg, value) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";
    
    const p = document.createElement('p');
    p.innerHTML = msg;

    if(value){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('paragrafo-bad');
    }

    resultado.appendChild(p);
}

