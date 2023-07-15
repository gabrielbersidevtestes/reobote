const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

// Supondo que você tenha um formulário HTML com o id "prayerForm"
const form = document.getElementById("prayerForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores de entrada do usuário
  const nome = document.querySelector('input[name="usuario"]').value;
  const pedidoOracao = document.querySelector('input[name="senha"]').value;

  // Cria uma tabela para armazenar as informações do usuário
  const tabela = document.createElement("table");
  const linha1 = tabela.insertRow();
  const colunaNome = linha1.insertCell();
  const colunaPedidoOracao = linha1.insertCell();

  colunaNome.textContent = "Nome";
  colunaPedidoOracao.textContent = "Pedido de Oração";

  const linha2 = tabela.insertRow();
  const valorNome = linha2.insertCell();
  const valorPedidoOracao = linha2.insertCell();

  valorNome.textContent = nome;
  valorPedidoOracao.textContent = pedidoOracao;

  // Converte a tabela para uma string
  const tabelaComoString = tabela.outerHTML;

  // Envia a tabela como SMS usando uma API de gateway SMS
  enviarSmsParaAdministradores(tabelaComoString);
});

function enviarSmsParaAdministradores(mensagem) {
  // Faça uma solicitação à API para enviar o SMS
  // Substitua os espaços reservados pelos seus próprios dados de API e números de telefone dos destinatários
  const apiKey = "SUA_CHAVE_API";
  const apiSecret = "SEU_SECRET_API";
  const numerosAdmin = ["NUMERO_ADMIN_1", "NUMERO_ADMIN_2"];

  for (const numero of numerosAdmin) {
    const dadosSms = {
      apiKey,
      apiSecret,
      para: numero,
      mensagem: mensagem,
    };

    // Faça uma solicitação AJAX ou use uma biblioteca adequada para enviar o SMS
    // Aqui você precisará usar uma biblioteca específica ou implementar a lógica para se comunicar com a API do gateway SMS que você está usando.
  }
}
