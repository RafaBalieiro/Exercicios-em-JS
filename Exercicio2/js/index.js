//Cálculo de distância entre dois pontos

let coordenada_x1;
let coordenada_x2;
let coordenada_y1;
let coordenada_y2;

coordenada_x1 = prompt("Insira o valor da Coordenada X1:");
document.body.innerHTML = `Valor da coordenada X1: ${coordenada_x1} </br>`;

coordenada_y1 = prompt("Insira o valor da coordenada Y1:");
document.body.innerHTML += `Valor da coordenada Y1: ${coordenada_y1} </br>`;

coordenada_x2 = prompt("Insira o valor da coordenada X2:");
document.body.innerHTML += `Valor da coordenada X2: ${coordenada_x2} </br>`;

coordenada_y2 = prompt("Insira o valor da coordenada Y2");
document.body.innerHTML += `Valor da coordenada Y2: ${coordenada_y2} </br> </br>`;

document.body.innerHTML += `Ponto 1: (${coordenada_x1},${coordenada_y1}) Ponto 2: (${coordenada_x2},${coordenada_y2}) </br> </br>`;

//Cálculo da Distância entre pontos

let distancia;

distancia = Math.sqrt(
  Math.pow(coordenada_x1 + coordenada_x2, 2) +
    Math.pow(coordenada_y1 + coordenada_y2, 2)
);

distancia = distancia.toFixed(2);

document.body.innerHTML += `Distancia entre os pontos P1 e P2: ${distancia}`;
