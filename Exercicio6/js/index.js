/*
De um modo geral, as ligações telefônicas são cobradas pelas suas durações. O sistema registra os instantes em
que a ligação foi iniciada e concluída e é acionado um programa que determina o intervalo de tempo decorrido
entre aqueles dois instantes dados. Escreva um programa receba dois instantes dados em horas e minutos e
mostre o intervalo de tempo (em horas e minutos) decorrido entre eles.
*/

let hora_inicial;
let hora_termino;

hora_inicial = prompt("Digite a hora de início da ligação (Hora:minutos):");
hora_termino = prompt("Digite a hora de término da ligação (Hora:Min):");

document.body.innerHTML = `Hora de ínicio: ${hora_inicial} </br>`;
document.body.innerHTML += `Hora de término: ${hora_termino} </br>`;

hora_inicial = parseNumber(hora_inicial);
hora_termino = parseNumber(hora_termino);

let intervalo;

intervalo = hora_termino - hora_inicial;

document.body.innerHTML += `Intervalo: ${intervalo} </br>`;
