const botaoMostrar = document.querySelectorAll("button");
const informacoes = document.querySelectorAll("li");

botaoMostrar.forEach(function (botao, i) {
  botaoMostrar[i].addEventListener("click", () => mostrarTexto(i));
});

function mostrarTexto(i) {
    informacoes[i].innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis egestas ex, a elementum est. Mauris auctor nunc quis erat.</p>"
}
