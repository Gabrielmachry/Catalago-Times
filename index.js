import express from "express";

const app = express();
const PORT = 3000;

// Configura o EJS como motor de views
app.set("view engine", "ejs");
// Pasta onde ficam os arquivos .ejs
app.set("views", "./views");

// Dados armazenados em um array no servidor
const times = [
  { id: 1, nome: "Grêmio", estadio: "Arena do Grêmio", cidade: "Porto Alegre" },
  { id: 2, nome: "Internacional", estadio: "Beira-Rio", cidade: "Porto Alegre" },
  { id: 3, nome: "Juventude", estadio: "Alfredo Jaconi", cidade: "Caxias do Sul" },
  { id: 4, nome: "Flamengo", estadio: "Maracanã", cidade: "Rio de Janeiro" },
  { id: 5, nome: "Palmeiras", estadio: "Allianz Parque", cidade: "São Paulo" }
];

// GET / → página inicial com mensagem de boas-vindas
app.get("/", (req, res) => {
  res.render("index", {
    mensagem: "Bem-vindo ao Catálogo de Times! Confira a lista de times e veja os detalhes de cada um."
  });
});

// GET /times → lista de times
app.get("/times", (req, res) => {
  res.render("times", { times });
});

// GET /times/:id → detalhes de um time
app.get("/times/:id", (req, res) => {
  // Os parâmetros da URL chegam como texto, por isso a conversão para número
  const id = Number(req.params.id);
  const time = times.find((t) => t.id === id);

  if (!time) {
    return res.status(404).send(`
      <h1>Time não encontrado</h1>
      <p>Não existe time cadastrado com o ID informado.</p>
      <p><a href="/times">Voltar para a lista de times</a></p>
    `);
  }

  res.render("detalhe", { time });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
