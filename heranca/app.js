const inputNome = document.querySelector(".nome");
const inputCodigo = document.querySelector(".codigo");
const inputTipo = document.querySelector(".tipos");
const inputCor = document.querySelector(".cor");
const inputMaterial = document.querySelector(".material");
const inputTamanho = document.querySelector(".tamanho");
const inputEstoque = document.querySelector(".estoque");
const form = document.querySelector(".formulario");
const cadastro = document.querySelector(".cadastros");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = inputNome.value;
  const codigo = inputCodigo.value;
  const tipo = inputTipo.value;
  const cor = inputCor.value;
  const material = inputMaterial.value;
  const tamanho = inputTamanho.value;
  const estoque = inputEstoque.value;

  criaProduto(nome, codigo, tipo, cor, material, tamanho, estoque);
});

//Função Construtora

function Produto(nome, codigo, tipo) {
  this.nome = nome;
  this.codigo = codigo;
  this.tipo = tipo;
}

//Heranças

function Camiseta(nome, codigo, tipo, cor, material, tamanho, estoque) {
  Produto.call(this, nome, codigo, tipo);
  this.cor = cor;
  this.material = material;
  this.tamanho = tamanho;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, codigo, tipo, cor, material, tamanho, estoque) {
  Produto.call(this, nome, codigo, tipo);
  this.cor = cor;
  this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

function Tenis(nome, codigo, tipo, cor, material, tamanho, estoque) {
  Produto.call(this, nome, codigo, tipo);
  this.cor = cor;
  this.material = material;
  this.tamanho = tamanho;
}

Tenis.prototype = Object.create(Produto.prototype);
Tenis.prototype.constructor = Tenis;

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function criaProduto(nome, codigo, tipo, cor, material, tamanho, estoque) {
  let produto = new Produto(nome, codigo, tipo);

  if (produto.tipo === "Camisa") {
    let camiseta = new Camiseta(
      nome,
      codigo,
      tipo,
      cor,
      material,
      tamanho,
      estoque
    );
    inseriProduto(camiseta);
  } else if (produto.tipo === "Caneca") {
    let caneca = new Caneca(
      nome,
      codigo,
      tipo,
      cor,
      material,
      tamanho,
      estoque
    );
    inseriProduto(caneca);
  } else if (produto.tipo === "Tênis") {
    let tenis = new Tenis(nome, codigo, tipo, cor, material, tamanho, estoque);
    inseriProduto(tenis);
  } else {
    alert("Não existe categoria para esse produto!");
  }
}

function inseriProduto(produto) {
  const li = criaLi();
  const hr = document.createElement("hr");

  if (produto.tipo === "Camisa") {
    li.innerHTML += `${produto.codigo}</br>`;
    li.innerHTML += `Nome: ${produto.nome} / cor: ${produto.cor} / Material: ${produto.material} / Tamanho: ${produto.tamanho}`;
  } else if (produto.tipo === "Tênis") {
    li.innerHTML += `${produto.codigo}</br>`;
    li.innerHTML += `Nome: ${produto.nome} / cor: ${produto.cor} / Tamanho: ${produto.tamanho}`;
  } else if (produto.tipo === "Caneca") {
    li.innerHTML += `${produto.codigo}</br>`;
    li.innerHTML += `Nome: ${produto.nome} / cor: ${produto.cor} / Material: ${produto.material}`;
  }

  cadastro.appendChild(li);
  cadastro.appendChild(hr);
}
