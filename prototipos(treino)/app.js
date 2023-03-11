// Revisão sobre protótipos

const inputPrimeiroNome = document.querySelector(".primeiroNome");
const inputSobrenome = document.querySelector(".sobrenome");
const inputEmail = document.querySelector(".email");
const inputDia = document.querySelector(".dia");
const inputMes = document.querySelector(".mes");
const inputAno = document.querySelector(".ano");
const form = document.querySelector(".form");
const container = document.querySelector(".container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const primeiroNome = inputPrimeiroNome.value;
  const sobrenome = inputSobrenome.value;
  const email = inputEmail.value;
  const dia = inputDia.value;
  const mes = inputMes.value;
  const ano = inputAno.value;

  if (!primeiroNome) alert("Insira um primeiro nome válido!");
  else if (!sobrenome) alert("Insira um sobrenome válido!");
  else if (!email) alert("Insira um email válido!");
  else if (!dia || !mes || !ano) alert("Insira uma data de nascimento válida!");
  else criaPerfil(primeiroNome, sobrenome, email, dia, mes, ano);
});

function criaLi() {
  const li = document.createElement("li");
  return li;
}

//Função Construtora

function Pessoa(primeiroNome, sobrenome, email, dia, mes, ano) {
  this.primeiroNome = primeiroNome;
  this.sobrenome = sobrenome;
  this.email = email;
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;
}

//Prototypes

Pessoa.prototype.saudacao = function () {
  return `Olá ${this.primeiroNome} ${this.sobrenome}!`;
};

Pessoa.prototype.idade = function () {
  let dataAtual = new Date();

  if (dataAtual.getMonth() < this.mes)
    return dataAtual.getFullYear() - this.ano - 1;
  if (dataAtual.getMonth() == this.mes && dataAtual.getDate() < this.dia)
    return dataAtual.getFullYear() - this.ano - 1;
  else return dataAtual.getFullYear() - this.ano;
};

function criaPerfil(primeiroNome, sobrenome, email, dia, mes, ano) {
  //Instâncias

  let perfil = new Pessoa(primeiroNome, sobrenome, email, dia, mes, ano);
  console.log(perfil);
  //Conteúdo

  const li = criaLi();
  const hr = document.createElement("hr");

  li.innerHTML += `${perfil.saudacao()}</br></br>`;
  li.innerHTML += `Dados => Primeiro nome: ${
    perfil.primeiroNome
  } / Sobrenome: ${perfil.sobrenome} / Email: ${perfil.email} / Nascimento: (${
    perfil.dia
  } / ${perfil.mes} / ${perfil.ano}) / Idade: ${perfil.idade()} anos</br></br>`;

  container.appendChild(li);
  container.appendChild(hr);
}
