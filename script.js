function gerarLink() {
  const webhookURL = document.getElementById("webhookInput").value.trim();
  const notificacao = document.getElementById("notificacao");

  notificacao.textContent = "";

  if (!webhookURL.startsWith("https://discord.com/api/webhooks/")) {
    alert("Webhook inválido!");
    return;
  }

  // Código Nitro de 24 caracteres (letras maiúsculas/minúsculas e números)
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let codigo = "";
  for (let i = 0; i < 24; i++) {
    codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  const link = `https://discord.gift/${codigo}`;

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: `🎁 Nitro grátis de 1 mês: ${link}` })
  })
  .then(response => {
    if (response.ok) {
      notificacao.style.color = "#0f0";
      notificacao.textContent = "✅ Link gerado e enviado ao webhook!";
    } else {
      notificacao.style.color = "#f00";
      notificacao.textContent = "❌ Falha ao enviar para o webhook.";
    }
  })
  .catch(() => {
    notificacao.style.color = "#f00";
    notificacao.textContent = "❌ Erro na rede ao enviar webhook.";
  });
}

// Neve caindo
function criarNeve() {
  const floco = document.createElement("div");
  floco.classList.add("snowflake");
  floco.style.left = Math.random() * window.innerWidth + "px";
  floco.style.fontSize = Math.random() * 10 + 10 + "px";
  floco.innerText = "❄";
  document.body.appendChild(floco);

  setTimeout(() => floco.remove(), 10000);
}

setInterval(criarNeve, 200);
