function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultadosTexto");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector("#nome");
    const sobrenome = form.querySelector("#sobrenome");
    const idade = form.querySelector("#idade");
    const email = form.querySelector("#email");

    let contador = 1;
    contador++;

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      idade: idade.value,
      email: email.value,
    });

    console.log(pessoas);

    resultado.innerHTML += `<strong> </br> Nome:${nome.value} / Sobrenome:${sobrenome.value} / Idade:${idade.value}anos / Email:${email.value} </strong></br>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
