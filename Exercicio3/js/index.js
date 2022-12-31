/*
Faça um programa para calcular quantos metros de madeira serão necessários para emoldurar um
quadro cujas dimensões (largura e altura) serão fornecidas pelo usuário.
*/

let largura;
let altura;

largura = prompt("Insira a largura do quadro (em metros):");
altura = prompt("Insira a altura do quadro (em metros):");

//Calculo da área do quadro

let area;

area = largura * altura;

document.body.innerHTML = `DADOS: <br/>`;
document.body.innerHTML += `Largura do quadro: <strong> ${largura} metros</strong> <br/>`;
document.body.innerHTML += `Altura do quadro: <strong> ${altura} metros</strong> <br/>`;
document.body.innerHTML += `Área do quadro: <strong> ${area} metros<sup>2</sup></strong> <br/>`;
