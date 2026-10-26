// O conteúdo (animais, vídeos, contas, contatos) fica em js/dados.js

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const MESES_LONGOS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const reais = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const ICO_SETA = `<span class="btn-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>`;

function esc(texto) {
  return String(texto ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function formatarTelefone(numero) {
  const d = numero.replace(/\D/g, "");
  return d.length === 11 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}` : `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
}

function linkWhatsApp(numero, mensagem) {
  const texto = mensagem ? `?text=${encodeURIComponent(mensagem)}` : "";
  return `https://wa.me/55${numero.replace(/\D/g, "")}${texto}`;
}

// "2026-09" -> "set/2026" ou "setembro de 2026"
function mesCurto(aaaamm) {
  const [ano, mes] = aaaamm.split("-");
  return `${MESES[mes - 1]}/${ano}`;
}
function mesLongo(aaaamm) {
  const [ano, mes] = aaaamm.split("-");
  return `${MESES_LONGOS[mes - 1]} de ${ano}`;
}

// ---------- Menu ----------
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

// ---------- Contato principal ----------
const LINKS_CONTATO = {
  whatsapp: linkWhatsApp(CONTATO.whatsapp),
  instagram: `https://www.instagram.com/${CONTATO.instagram}/`,
};
const TEXTOS_CONTATO = {
  whatsapp: formatarTelefone(CONTATO.whatsapp),
  instagram: `@${CONTATO.instagram}`,
  pix: CONTATO.pix,
};

document.querySelectorAll("[data-contato]").forEach((el) => {
  const chave = el.dataset.contato;
  if (el.tagName === "A" && LINKS_CONTATO[chave]) el.href = LINKS_CONTATO[chave];
  if (el.hasAttribute("data-texto")) el.textContent = TEXTOS_CONTATO[chave];
});

// ---------- Os Castrados ----------
const listaCastrados = document.getElementById("lista-castrados");

listaCastrados.innerHTML = CASTRADOS.length
  ? CASTRADOS.map((v) => `
      <li class="video">
        <a href="${esc(v.link)}" target="_blank" rel="noopener" aria-label="Ver o vídeo de ${esc(v.nome)} no Instagram">
          <figure class="video-capa">
            <img src="${esc(v.capa)}" alt="" loading="lazy" width="480" height="600">
            <span class="video-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z"/></svg></span>
          </figure>
          <div class="video-info">
            <strong>${esc(v.nome)}</strong>
            <span>${esc(v.legenda)}</span>
            <time datetime="${esc(v.data)}">${mesCurto(v.data)}</time>
          </div>
        </a>
      </li>`).join("")
  : `<li class="vazio">Os vídeos dos castrados aparecem aqui em breve. Enquanto isso, acompanhe pelo Instagram.</li>`;

// ---------- Animais para adoção ----------
const listaAnimais = document.getElementById("lista-animais");

listaAnimais.innerHTML = ANIMAIS.map((a) => {
  const artigo = a.sexo === "Fêmea" ? "a" : "o";
  const telefone = a.telefone || CONTATO.whatsapp;
  const responsavel = a.responsavel || "Amor de Bicho Cajamar";
  const saudacao = a.responsavel ? `Olá, ${a.responsavel}!` : "Olá!";
  const mensagem = `${saudacao} Vi no site do Amor de Bicho Cajamar que ${artigo} ${a.nome} está para adoção e tenho interesse. Podemos conversar?`;

  return `
    <article class="ficha" data-especie="${esc(a.especie)}" data-idade="${esc(a.idade)}">
      <div class="ficha-core">
        <figure class="ficha-foto">
          <img src="${esc(a.foto)}" alt="${esc(a.alt)}" loading="lazy" width="640" height="720">
          ${a.selo ? `<span class="selo">${esc(a.selo)}</span>` : ""}
        </figure>
        <div class="ficha-corpo">
          <div class="ficha-topo">
            <h3>${esc(a.nome)}</h3>
            <span class="sexo">${esc(a.sexo)}</span>
          </div>
          <dl class="dados">
            <div><dt>Idade</dt><dd>${esc(a.idadeTexto)}</dd></div>
            <div><dt>Porte</dt><dd>${esc(a.porte)}</dd></div>
            <div><dt>Origem</dt><dd>${esc(a.origem)}</dd></div>
          </dl>
          <ul class="saude" aria-label="Saúde">
            ${a.saude.map((item) => `<li>${esc(item)}</li>`).join("")}
          </ul>
          <p class="nota">${esc(a.nota)}</p>
          <div class="responsavel">
            <span class="responsavel-rotulo">Quem está cuidando</span>
            <span class="responsavel-nome">${esc(responsavel)}</span>
            <a class="responsavel-tel" href="tel:+55${telefone.replace(/\D/g, "")}">${formatarTelefone(telefone)}</a>
          </div>
          <a class="btn-ficha" href="${esc(linkWhatsApp(telefone, mensagem))}" target="_blank" rel="noopener">
            Quero adotar ${artigo} ${esc(a.nome)}
            ${ICO_SETA}
          </a>
        </div>
      </div>
    </article>`;
}).join("");

document.getElementById("total-animais").textContent = ANIMAIS.length;

// ---------- Pedido urgente ----------
if (URGENTE) {
  document.getElementById("urgente-titulo").textContent = URGENTE.titulo;
  document.getElementById("urgente-texto").textContent = URGENTE.texto;
  if (URGENTE.meta) {
    const pct = Math.min(100, Math.round(((URGENTE.arrecadado || 0) / URGENTE.meta) * 100));
    document.getElementById("urgente-barra").style.width = `${pct}%`;
    document.getElementById("urgente-valores").textContent =
      `${reais.format(URGENTE.arrecadado || 0)} de ${reais.format(URGENTE.meta)} arrecadados`;
    document.getElementById("urgente-meta").hidden = false;
  }
}

// ---------- Prestação de contas ----------
const contasMeses = document.getElementById("contas-meses");
const contasRelatorio = document.getElementById("contas-relatorio");

function somar(lista) {
  return (lista || []).reduce((total, item) => total + item.valor, 0);
}

function linhas(lista) {
  if (!lista || !lista.length) return `<p class="linhas-vazio">Nada neste mês.</p>`;
  return `<ul class="linhas">${lista.map((item) => `
    <li><span>${esc(item.descricao)}</span><span class="valor">${reais.format(item.valor)}</span></li>`).join("")}
  </ul>`;
}

function mostrarPrestacao(indice) {
  const p = PRESTACOES[indice];
  const entrou = somar(p.entradas);
  const saiu = somar(p.saidas);
  const saldo = entrou - saiu;
  const anexos = p.anexos || [];

  contasMeses.querySelectorAll("button").forEach((b, i) => b.setAttribute("aria-pressed", String(i === indice)));

  contasRelatorio.innerHTML = `
    <div class="relatorio-topo">
      <h3>${mesLongo(p.mes)}</h3>
      ${p.instagram ? `<a class="link-post" href="${esc(p.instagram)}" target="_blank" rel="noopener">Ver o post no Instagram</a>` : ""}
    </div>
    <dl class="resumo">
      <div><dt>Entrou</dt><dd>${reais.format(entrou)}</dd></div>
      <div><dt>Saiu</dt><dd>${reais.format(saiu)}</dd></div>
      <div class="${saldo < 0 ? "negativo" : ""}"><dt>Saldo do mês</dt><dd>${reais.format(saldo)}</dd></div>
    </dl>
    <div class="lancamentos">
      <div><h4>Entradas</h4>${linhas(p.entradas)}</div>
      <div><h4>Saídas</h4>${linhas(p.saidas)}</div>
    </div>
    ${p.observacao ? `<p class="obs">${esc(p.observacao)}</p>` : ""}
    ${anexos.length ? `
      <div class="anexos">
        <h4>Comprovantes</h4>
        <ul>${anexos.map((a) => `
          <li><a href="${esc(a.arquivo)}" target="_blank" rel="noopener">
            <span class="anexo-tipo">${esc(a.arquivo.split(".").pop().toUpperCase())}</span>${esc(a.nome)}
          </a></li>`).join("")}
        </ul>
      </div>` : ""}`;
}

if (PRESTACOES.length) {
  contasMeses.innerHTML = PRESTACOES.map((p, i) =>
    `<button type="button" data-indice="${i}" aria-pressed="false">${mesCurto(p.mes)}</button>`).join("");
  contasMeses.querySelectorAll("button").forEach((botao) =>
    botao.addEventListener("click", () => mostrarPrestacao(Number(botao.dataset.indice))));
  mostrarPrestacao(0);
} else {
  contasRelatorio.innerHTML = `<p class="linhas-vazio">A primeira prestação de contas será publicada aqui em breve.</p>`;
}

// ---------- Copiar PIX ----------
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
