# Catálogo de Times – Node.js, Express e EJS

Aplicação que exibe uma lista de times de futebol e os detalhes de cada um, usando Express para as rotas e EJS para renderizar as páginas. Os dados ficam em um array no servidor.

## Como executar

```bash
npm install
npm start
```

O servidor sobe em http://localhost:3000.

## Rotas

| Rota | Descrição |
|------|-----------|
| `GET /` | Renderiza `index.ejs` com a mensagem de boas-vindas |
| `GET /times` | Renderiza `times.ejs` com a tabela de times |
| `GET /times/:id` | Renderiza `detalhe.ejs` com os dados do time (ou "Time não encontrado") |

## Estrutura

```
catalogo-times/
├── views/
│   ├── index.ejs
│   ├── times.ejs
│   └── detalhe.ejs
├── index.js
└── package.json
```
