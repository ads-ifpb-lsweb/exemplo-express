window.addEventListener("load", () => {
  fetch("http://localhost:3000/filmes")
    .then((resposta) => resposta.json())
    .then((filmes) => {
      carregarFilmes(filmes);
    });
});

function carregarFilmes(filmes) {
  const listaFilmes = document.querySelector("#filmes");
  for (const filme of filmes) {
    const itemFilme = document.createElement("li");
    itemFilme.textContent = `${filme.titulo} - ${filme.ano}`;
    listaFilmes.appendChild(itemFilme);
  }
}
