/*
Faça um programa que leia a altura (em centímetros) de uma pessoa e exiba-a em metros e
centímetros.
Ex: 120 -> 1m 20cm
*/

let alturaMetros;

alturaMetros = prompt("Insira sua altura em metros:");

let alturaCm;

alturaCm = alturaMetros * 100;

document.body.innerHTML = `Dados: <br/>`;
document.body.innerHTML += `Altura em metros: ${alturaMetros} metros <br/>`;
document.body.innerHTML += `Altura em centímetros: ${alturaCm} centímetros <br/>`;
