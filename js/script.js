// Troque pelo número de WhatsApp da ONG (com DDI 55 + DDD, só números)
const WHATSAPP_ONG = "5519999990000";

const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

function fecharMenu() {
  menu.classList.remove("aberto");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-label", "Abrir menu");
}

menuBtn.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuBtn.setAttribute("aria-expanded", String(aberto));
  menuBtn.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});
menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", fecharMenu));

const modal = document.getElementById("modal-adotar");
const form = document.getElementById("form-adotar");
const selectAnimal = document.getElementById("f-animal");

document.querySelectorAll(".js-adotar").forEach((botao) => {
  botao.addEventListener("click", () => {
    selectAnimal.value = botao.dataset.nome || "Ainda não escolhi";
    fecharMenu();
    modal.showModal();
  });
});

modal.querySelector(".modal-fechar").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dados = new FormData(form);
  const linhas = [
    `Olá! Tenho interesse em adotar: ${dados.get("animal")}.`,
    `Meu nome é ${dados.get("nome")}, moro em ${dados.get("cidade")} (${dados.get("moradia")}).`,
  ];
  const mensagem = dados.get("mensagem").trim();
  if (mensagem) linhas.push(mensagem);

  const url = `https://wa.me/${WHATSAPP_ONG}?text=${encodeURIComponent(linhas.join("\n"))}`;
  window.open(url, "_blank", "noopener");
  modal.close();
  form.reset();
});

document.querySelectorAll("[data-copiar]").forEach((botao) => {
  botao.addEventListener("click", async () => {
    const alvo = document.getElementById(botao.dataset.copiar);
    try {
      await navigator.clipboard.writeText(alvo.textContent.trim());
      botao.textContent = "Copiado!";
    } catch {
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(alvo);
      sel.removeAllRanges();
      sel.addRange(range);
      botao.textContent = "Selecionado";
    }
    setTimeout(() => (botao.textContent = "Copiar"), 2000);
  });
});
