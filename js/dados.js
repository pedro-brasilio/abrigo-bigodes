// =====================================================================
//  CONTEÚDO DO SITE — edite só este arquivo para atualizar o site.
//  Tudo aqui é EXEMPLO: troque nomes, telefones, fotos e valores reais
//  antes de publicar.
// =====================================================================

// Contato principal (usado no rodapé, no PIX e nos anúncios sem telefone próprio)
const CONTATO = {
  whatsapp: "11999990000", // DDD + número, só dígitos
  instagram: "amordebichocajamar", // sem o @
  pix: "pix@amordebichocajamar.com.br",
};

// ---------------------------------------------------------------------
//  ANIMAIS PARA ADOÇÃO
//  especie: "gato" | "cachorro"
//  idade:   "filhote" | "adulto" | "idoso"  (usado nos filtros)
//  origem:  "Comunitário" | "Resgatado"
//  responsavel / telefone: quem cuida do animal. Só divulgue o telefone
//  com autorização da pessoa. Sem telefone, o anúncio usa o CONTATO principal.
//  selo (opcional): faixa vermelha sobre a foto.
// ---------------------------------------------------------------------
const ANIMAIS = [
  {
    nome: "Pipoca", especie: "gato", idade: "filhote", sexo: "Fêmea",
    idadeTexto: "3 meses", porte: "Pequeno", origem: "Resgatado",
    foto: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Pipoca, gatinha tigrada sentada no chão olhando para a câmera",
    saude: ["Vacinada (1ª dose)", "Vermifugada", "FIV/FeLV negativo"],
    nota: "Brinca com tudo, até com a própria sombra. Dorme no colo depois.",
  },
  {
    nome: "Paçoca", especie: "cachorro", idade: "adulto", sexo: "Macho",
    idadeTexto: "3 anos", porte: "Médio", origem: "Comunitário",
    foto: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Paçoca, cachorro caramelo e branco com a língua de fora, sorrindo",
    saude: ["Castrado", "V10 e antirrábica", "Microchipado"],
    nota: "Anda na guia como um lorde. Se dá bem com gatos e crianças.",
    responsavel: "Carla", telefone: "11988881111",
  },
  {
    nome: "Seu Bento", especie: "gato", idade: "idoso", sexo: "Macho",
    idadeTexto: "11 anos", porte: "Médio", origem: "Comunitário",
    foto: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Seu Bento, gato tigrado deitado tranquilo sobre um sofá claro",
    saude: ["Castrado", "V4 e antirrábica", "FIV/FeLV negativo"],
    nota: "Um senhor educado. Quer sol na janela e alguém pra conversar à noite.",
    selo: "Esperando há 1 ano e 7 meses",
  },
  {
    nome: "Biscoito", especie: "cachorro", idade: "filhote", sexo: "Macho",
    idadeTexto: "4 meses", porte: "Grande (adulto)", origem: "Resgatado",
    foto: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Biscoito, filhote de pelo dourado com coleira vermelha",
    saude: ["V10 (2ª dose)", "Vermifugado", "Castração agendada"],
    nota: "Vai crescer bastante! Precisa de quintal e de alguém com energia.",
    responsavel: "Marcos", telefone: "11977772222",
  },
  {
    nome: "Mimosa", especie: "gato", idade: "adulto", sexo: "Fêmea",
    idadeTexto: "2 anos", porte: "Pequeno", origem: "Comunitário",
    foto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Mimosa, gata branca com manchas pretas apoiada numa mesa de madeira",
    saude: ["Castrada", "V4 e antirrábica", "FIV/FeLV negativo"],
    nota: "Tímida no começo, depois não sai do seu pé. Ideal para apartamento telado.",
  },
  {
    nome: "Tobias", especie: "cachorro", idade: "idoso", sexo: "Macho",
    idadeTexto: "10 anos", porte: "Grande", origem: "Resgatado",
    foto: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Tobias, cachorro de pelo dourado com focinho já grisalho, sorrindo",
    saude: ["Castrado", "V10 e antirrábica", "Controle de artrose"],
    nota: "Passeio curto, cochilo longo. O cachorro mais calmo que você vai conhecer.",
    selo: "Esperando há 1 ano e 2 meses",
    responsavel: "Carla", telefone: "11988881111",
  },
  {
    nome: "Tico", especie: "gato", idade: "filhote", sexo: "Macho",
    idadeTexto: "2 meses", porte: "Pequeno", origem: "Resgatado",
    foto: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Tico, gatinho tigrado e branco de olhos grandes",
    saude: ["Vermifugado", "1ª vacina em nov", "FIV/FeLV negativo"],
    nota: "Resgatado de um bueiro junto com a mãe. Hoje ronrona alto e come bem.",
  },
  {
    nome: "Nina", especie: "cachorro", idade: "adulto", sexo: "Fêmea",
    idadeTexto: "5 anos", porte: "Médio", origem: "Comunitário",
    foto: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Nina, cachorra branca com orelhas pretas sorrindo numa calçada",
    saude: ["Castrada", "V10 e antirrábica", "Microchipada"],
    nota: "Sabe sentar, dar a pata e pedir carinho com o focinho. Prefere ser filha única.",
    responsavel: "Dona Lúcia", telefone: "11966663333",
  },
  {
    nome: "Laranjinha", especie: "gato", idade: "adulto", sexo: "Macho",
    idadeTexto: "4 anos", porte: "Grande", origem: "Comunitário",
    foto: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Laranjinha, gato laranja peludo deitado olhando para cima",
    saude: ["Castrado", "V4 e antirrábica", "FIV/FeLV negativo"],
    nota: "Mia pra dar bom dia e pra pedir sachê. Convive bem com outros gatos.",
  },
  {
    nome: "Amora", especie: "cachorro", idade: "filhote", sexo: "Fêmea",
    idadeTexto: "5 meses", porte: "Pequeno (adulto)", origem: "Resgatado",
    foto: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Amora, filhote caramelo de orelhas grandes em pé",
    saude: ["V10 completa", "Vermifugada", "Castração agendada"],
    nota: "As orelhas chegam antes dela. Já está aprendendo a fazer xixi no tapete.",
    responsavel: "Marcos", telefone: "11977772222",
  },
  {
    nome: "Dona Nena", especie: "gato", idade: "idoso", sexo: "Fêmea",
    idadeTexto: "9 anos", porte: "Médio", origem: "Comunitário",
    foto: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Dona Nena, gata de pelo bege com cara séria sentada perto de uma janela",
    saude: ["Castrada", "V4 e antirrábica", "Ração renal"],
    nota: "A cara é de brava, mas é só charme. Adora escova e casa silenciosa.",
  },
  {
    nome: "Dona Cacau", especie: "cachorro", idade: "idoso", sexo: "Fêmea",
    idadeTexto: "9 anos", porte: "Pequeno", origem: "Resgatado",
    foto: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=640&h=720&fit=crop&q=75&auto=format",
    alt: "Dona Cacau, cachorra pequena tricolor com orelhas dobradas",
    saude: ["Castrada", "V10 e antirrábica", "Microchipada"],
    nota: "Ainda corre atrás de bolinha como filhote. Ótima companhia para quem mora sozinho.",
    responsavel: "Dona Lúcia", telefone: "11966663333",
  },
];

// ---------------------------------------------------------------------
//  OS CASTRADOS — vídeos do Protocolo CED publicados no Instagram
//  link: endereço do post/reel no Instagram
//  capa: uma foto do animal (pode ficar na pasta img/)
//  data: "AAAA-MM"
//  Coloque os mais recentes primeiro.
// ---------------------------------------------------------------------
const CASTRADOS = [
  {
    nome: "Frajola",
    legenda: "Castrado e devolvido à colônia do mercado",
    data: "2026-10",
    link: "https://www.instagram.com/amordebichocajamar/",
    capa: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=480&h=600&fit=crop&q=75&auto=format",
  },
  {
    nome: "Mel",
    legenda: "Castrada e de volta à praça onde vive",
    data: "2026-10",
    link: "https://www.instagram.com/amordebichocajamar/",
    capa: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=480&h=600&fit=crop&q=75&auto=format",
  },
  {
    nome: "Pretinho",
    legenda: "Recuperado da cirurgia e devolvido ao bairro",
    data: "2026-09",
    link: "https://www.instagram.com/amordebichocajamar/",
    capa: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=480&h=600&fit=crop&q=75&auto=format",
  },
  {
    nome: "Fumaça",
    legenda: "Castrada junto com mais três da mesma colônia",
    data: "2026-09",
    link: "https://www.instagram.com/amordebichocajamar/",
    capa: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=480&h=600&fit=crop&q=75&auto=format",
  },
];

// ---------------------------------------------------------------------
//  PEDIDO URGENTE — aparece na seção de doações.
//  Use null quando não houver nenhum caso urgente.
//  meta e arrecadado são opcionais (mostram uma barra de progresso).
// ---------------------------------------------------------------------
const URGENTE = {
  titulo: "Cirurgia do Caramelo",
  texto: "Resgatado atropelado na Estrada dos Romeiros. Precisa operar a pata traseira e de remédios para as próximas semanas.",
  meta: 1800,
  arrecadado: 650,
};

// ---------------------------------------------------------------------
//  PRESTAÇÃO DE CONTAS — uma entrada por mês, a mais recente primeiro.
//  mes: "AAAA-MM"
//  entradas / saidas: lista de { descricao, valor }
//  anexos (opcional): comprovantes e relatórios. Coloque os arquivos na
//  pasta contas/ e use o caminho, ex.: "contas/2026-09/notas.pdf".
//  instagram (opcional): link do post da prestação de contas.
// ---------------------------------------------------------------------
const PRESTACOES = [
  {
    mes: "2026-09",
    entradas: [
      { descricao: "Doações via PIX", valor: 1420 },
      { descricao: "Rifa de setembro", valor: 380 },
    ],
    saidas: [
      { descricao: "Castrações do Protocolo CED (6 gatos)", valor: 900 },
      { descricao: "Consulta e exames da Pipoca", valor: 260 },
      { descricao: "Medicamentos e vermífugos", valor: 185.5 },
      { descricao: "Ração para colônias", valor: 312 },
    ],
    observacao: "Seis gatos da colônia do mercado passaram pelo CED este mês.",
    anexos: [
      // { nome: "Notas fiscais", arquivo: "contas/2026-09/notas.pdf" },
      // { nome: "Recibo da clínica", arquivo: "contas/2026-09/recibo.jpg" },
    ],
    instagram: "https://www.instagram.com/amordebichocajamar/",
  },
  {
    mes: "2026-08",
    entradas: [
      { descricao: "Doações via PIX", valor: 980 },
    ],
    saidas: [
      { descricao: "Castrações do Protocolo CED (4 gatos)", valor: 600 },
      { descricao: "Ração para colônias", valor: 290 },
      { descricao: "Transporte até a clínica", valor: 120 },
    ],
    anexos: [],
    instagram: "https://www.instagram.com/amordebichocajamar/",
  },
];
