# Amor de Bicho Cajamar

Site do Amor de Bicho Cajamar, trabalho independente de proteção animal em Cajamar – SP.

## O que é

Apresenta o trabalho de proteção animal independente (sem abrigo e sem equipe fixa), com foco no Protocolo CED (Captura, Esterilização e Devolução), na divulgação de animais para adoção, no recebimento de doações e na transparência das contas.

## Seções

- **Nosso trabalho**: objetivo do projeto e explicação do Protocolo CED
- **Os Castrados**: vídeos dos animais atendidos pelo CED, com link para o Instagram
- **Animais para adoção**: fichas com filtros por espécie e idade, contato do responsável por cada animal e botão que abre o WhatsApp com a mensagem pronta
- **Finais felizes**: animais que já foram adotados
- **Nos ajude a salvar mais vidas**: doações, pedido urgente com barra de progresso e PIX com botão de copiar
- **Prestação de contas**: relatórios mensais com entradas, saídas, saldo e comprovantes, com histórico dos meses anteriores

Tema claro e escuro automático e layout responsivo (celular a desktop).

## Como atualizar o conteúdo

Todo o conteúdo editável fica em `js/dados.js`, sem precisar mexer no HTML:

| O quê | Onde em `js/dados.js` |
| --- | --- |
| WhatsApp, Instagram e chave PIX principais | `CONTATO` |
| Animais para adoção (com telefone de cada responsável) | `ANIMAIS` |
| Vídeos de Os Castrados | `CASTRADOS` |
| Caso urgente da seção de doações | `URGENTE` (use `null` quando não houver) |
| Prestação de contas mensal | `PRESTACOES` |

Comprovantes da prestação de contas (PDF ou imagem) vão na pasta `contas/`, por exemplo `contas/2026-09/notas.pdf`.

Só divulgue o telefone de um responsável com a autorização dele. Anúncios sem `telefone` usam o contato principal.

## Tecnologias

- HTML5, CSS3, JavaScript puro
- Google Fonts: Calistoga, Figtree, Gochi Hand

## Como executar

Abra o `index.html` no navegador ou use o Live Server do VS Code.

## Observação

Nomes, telefones, PIX, fotos, vídeos e valores da prestação de contas são exemplos e precisam ser trocados pelos dados reais antes da publicação.

## Licença

MIT
