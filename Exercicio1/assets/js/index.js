//Faça um programa que mostre o sucessor e o antecessor de um número inteiro fornecido pelo usuário.

let numero = prompt("Insira um valor númerico");

numero = Number(numero);

let sucessor = numero + 1;
let antecessor = numero - 1;

alert(
  `Número digitado: ${numero} Sucessor: ${sucessor} Antecessor: ${antecessor}`
);
