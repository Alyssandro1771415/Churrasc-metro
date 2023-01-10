let inputAdultos = document.getElementById("adultos");
let inputCriacas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriacas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = (carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)) / 1000;

    let qtdCerveja = cervejaPP(duracao) * adultos;

    let qtdsuco_refri = (suco_refriPP(duracao) * adultos + (suco_refriPP(duracao) / 2 * criancas)) / 1000;

    let qtdAgua = (aguaPP(duracao) * adultos + (aguaPP(duracao) / 2 * criancas)) / 1000;

    resultado.innerHTML = `<p>As Quantidade Necessária São:`;
    resultado.innerHTML += `<p>${qtdTotalCarne}Kg de Carne`;
    resultado.innerHTML += `<p>${qtdCerveja}mL de Cerveja`;
    resultado.innerHTML += `<p>${Math.ceil(qtdsuco_refri)}L de Sucos e Refrigerantes`;
    resultado.innerHTML += `<p>${Math.ceil(qtdAgua)}L de Água`;
}
function carnePP(duracao){

    if(duracao >= 6){
        return 650;
    } 
    else{
        return 400;
    }
    
}

function acompanhamentoPP(duracao){

    if(duracao >= 6){
        return 200;
    }
    else{
        return 300;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function suco_refriPP(duracao){

    if(duracao >= 6){
        return 1000;
    }
    else{
        return 1500;
    }

}

function aguaPP(duracao){

    if(duracao >= 6){
        return 800;
    }
    else{
        return 500;
    }
}
