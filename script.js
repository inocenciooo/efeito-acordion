const botaoMostrar = document.querySelectorAll("button");
const perguntas = document.querySelectorAll("li");

botaoMostrar.forEach(function (botao, i) {
  botaoMostrar[i].addEventListener("click", () => {
    if (perguntas[i].classList.contains("mostrar")) {
      esconderTexto(i);
    } else {
      perguntas.forEach((pergunta) => {
        pergunta.classList.remove("mostrar");
      });
      mostrarTexto(i);
    }
  });
});

function mostrarTexto(i) {
  perguntas[i].classList.add("mostrar");
}

function esconderTexto(i) {
  perguntas[i].classList.remove("mostrar");
}
