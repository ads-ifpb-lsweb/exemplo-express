import express from "express";

const port = 3000; // A porta que será usada pela sua aplicação.
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const filmes = [
  {
    id: 1,
    titulo: "Carros",
    ano: 2004,
  },
  {
    id: 2,
    titulo: "John Wick",
    ano: 2014,
  },
  {
    id: 3,
    titulo: "Shrek",
    ano: 2001,
  },
];

app.get("/filmes", (req, res) => res.send(filmes));

app.get("/filmes/:id", (req, res) => {
  const indiceFilme = filmes.findIndex((filme) => filme.id == req.params.id);
  if (indiceFilme >= 0) {
    res.status(200).send(filmes[indiceFilme]);
  } else res.status(404).send({ mensagem: "Não foi encontrado" });
});

app.post("/filmes", (req, res) => {
  const { titulo, ano } = req.body;
  const maxId = Math.max(...filmes.map((filme) => filme.id)) + 1;
  const novoFilme = {
    id: maxId,
    titulo,
    ano,
  };
  filmes.push(novoFilme);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Executando em http://localhost:${port}`);
});
