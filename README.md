<div align="center">

<img src="./favicon.svg" width="80" height="80" alt="TechNova Logo" />

# TechNova

### Loja de informática com estética cyberpunk pastel

**Construída do zero em HTML, CSS e JavaScript puro** — sem frameworks, sem bibliotecas, sem dependências externas.

<br>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Canvas API](https://img.shields.io/badge/Canvas_API-FF6B6B?style=for-the-badge)](#)

[![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-b8ffe0?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/license-MIT-ffb3d9?style=for-the-badge)](#-licença)
[![PRs](https://img.shields.io/badge/PRs-bem--vindos-a8d8ff?style=for-the-badge)](#-contribuindo)

<br>

[🌐 **Ver demo ao vivo**](#-demo) · [📸 **Screenshots**](#-screenshots) · [🚀 **Como rodar**](#-como-rodar-localmente) · [📖 **Documentação**](#-documentação-técnica)

</div>

---

## 📖 Sobre o projeto

**TechNova** é um site de e-commerce fictício de tecnologia, criado como projeto de estudo e portfólio. O objetivo foi construir uma experiência visual **imersiva e única**, explorando os limites do que é possível fazer com **HTML, CSS e JavaScript puro** — sem React, sem Vue, sem Three.js, sem nada.

O maior desafio técnico foi desenvolver uma **esfera 3D animada no hero** com projeção perspectiva real e emissão de ondas sonoras, rodando a **60 fps** em qualquer dispositivo, mesmo sem WebGL.

### 🎯 Objetivos do projeto

- ✅ Praticar **Canvas 2D** e matemática de projeção 3D
- ✅ Explorar uma **estética incomum** (cyberpunk em tons pastéis)
- ✅ Demonstrar domínio de **CSS moderno** (grid, custom properties, clip-path, backdrop-filter)
- ✅ Construir um **design system** escalável e reutilizável
- ✅ Criar um **site de portfólio** com qualidade profissional

---

## 📸 Screenshots

<div align="center">

### 🏠 Home — Hero com esfera 3D animada
![Home](./assets/screenshot-home.png)

### 🛒 Página de produtos
![Produtos](./assets/screenshot-produtos.png)

### 📱 Versão mobile
<img src="./assets/screenshot-mobile.png" width="280" alt="Mobile" />

</div>

> 💡 **Nota:** crie a pasta `assets/` e adicione as screenshots com os nomes acima. Depois é só remover esta nota.

---

## ✨ Destaques

<table>
<tr>
<td width="50%">

### 🌐 Canvas 3D customizado
Esfera de Fibonacci com **1500 pontos** distribuídos uniformemente na superfície. Projeção perspectiva real com câmera virtual e culling de pontos fora da tela.

</td>
<td width="50%">

### 🔊 Ondas sonoras em cascata
A esfera **pulsa** e **emite cascas esféricas em wireframe** que se expandem pra fora e desaparecem. Efeito tipo alto-falante 3D.

</td>
</tr>
<tr>
<td width="50%">

### 🎨 Cyberpunk pastel
Paleta única de **rosa, lilás e azul suave** sobre fundo preto arroxeado. Diferente do neon saturado tradicional — mais sofisticado.

</td>
<td width="50%">

### 📱 100% responsivo
Funciona perfeitamente em **desktop, tablet e celular**. O canvas redimensiona em tempo real e respeita `devicePixelRatio` (retina).

</td>
</tr>
<tr>
<td width="50%">

### ⚡ Zero dependências
Nenhum framework. Nenhuma biblioteca. Apenas **HTML, CSS e JavaScript** nativos rodando direto no navegador.

</td>
<td width="50%">

### ✨ Micro-animações
Reveal on scroll, glitch ocasional no título, typing effect, brilho que segue o cursor nos cards, transições suaves em tudo.

</td>
</tr>
</table>

---

## 🎨 Identidade visual

### Paleta de cores

| Cor | Hex | Uso |
|:---:|:---:|-----|
| 🩷 Rosa pastel | `#ffb3d9` | Accent principal, links ativos, destaques |
| 💜 Lilás | `#d5b3ff` | Gradiente, bordas hover |
| 🔵 Azul pastel | `#a8d8ff` | Accent secundário, tags |
| 💚 Menta | `#b8ffe0` | Badges "novo" |
| 🧡 Pêssego | `#ffd5b8` | Badges "hot" |
| ⬛ Preto arroxeado | `#0a0812` | Background principal |
| ⚪ Branco lavanda | `#f0e8ff` | Texto principal |

### Gradiente da marca

```css
linear-gradient(135deg, #ffb3d9 0%, #d5b3ff 50%, #a8d8ff 100%);
Tipografia
Space Grotesk — títulos e headings

Inter — corpo do texto

JetBrains Mono — detalhes técnicos, badges, código

🗂️ Estrutura do projeto
text
TechNova/
│
├── 📄 index.html              # Home — hero com canvas 3D + destaques
├── 📄 produtos.html           # Catálogo completo de produtos
├── 📄 notebooks.html          # Categoria: Notebooks
├── 📄 pecas.html              # Categoria: Peças e componentes
├── 📄 perifericos.html        # Categoria: Periféricos
├── 📄 suporte.html            # Central de ajuda + FAQ
│
├── 📁 css/
│   ├── 🎨 style.css           # Estilos globais (variáveis, header, hero, footer)
│   └── 🎨 page.css            # Estilos das páginas internas (cards, filtros, FAQ)
│
├── 📁 js/
│   ├── ⚡ sphere.js           # Canvas 3D — esfera pulsante com ondas sonoras
│   └── ⚡ main.js             # Header scroll, chips, carrinho, reveal on scroll
│
├── 📁 assets/                 # Imagens e screenshots
│   ├── 🖼️ preview.png
│   ├── 🖼️ screenshot-home.png
│   ├── 🖼️ screenshot-produtos.png
│   └── 🖼️ screenshot-mobile.png
│
├── 🎨 favicon.svg             # Ícone do site (vetorial)
├── 📝 README.md               # Este arquivo
└── 📝 LICENSE                 # Licença MIT
🛠️ Stack técnica
<div align="center">
Camada	Tecnologia	Uso
Estrutura	HTML5 semântico	6 páginas com tags semânticas (header, nav, section, article, footer)
Estilo	CSS3 moderno	Grid, Flexbox, custom properties, clip-path, backdrop-filter, mask-image
Comportamento	JavaScript ES6+	Canvas 2D API, IntersectionObserver, requestAnimationFrame, Pointer Events
Tipografia	Google Fonts	Space Grotesk, Inter, JetBrains Mono
Ícones	SVG inline + Emojis	Zero bibliotecas de ícones
</div>
🚀 Como rodar localmente
Opção 1 — Abrir direto no navegador
bash
# Baixe o repositório
git clone https://github.com/MisaAndrejezieski/TechNova.git

# Entre na pasta
cd TechNova

# Abra o arquivo
# Windows: duplo clique em index.html
# Mac:     open index.html
# Linux:   xdg-open index.html
Opção 2 — Live Server (recomendado)
Se você usa VS Code:

Instala a extensão Live Server

Clica com o botão direito em index.html

Escolhe "Open with Live Server"

A página abre em http://127.0.0.1:5500 com auto-reload ao salvar.

Opção 3 — Servidor local em Python
bash
# Python 3
python -m http.server 8000

# Abre http://localhost:8000 no navegador
Opção 4 — Node.js
bash
npx serve
🌐 Deploy
Este projeto está pronto para deploy estático em qualquer plataforma gratuita:

Plataforma	Como fazer	URL gerada
GitHub Pages	Settings → Pages → Branch main → Save	misaandrejezieski.github.io/TechNova
Vercel	Importa o repositório em vercel.com	technova.vercel.app
Netlify	Arrasta a pasta em app.netlify.com/drop	technova.netlify.app
Cloudflare Pages	Conecta o repositório em pages.cloudflare.com	technova.pages.dev
📚 Documentação técnica
Como o canvas 3D funciona
O efeito do hero é construído em 5 etapas:

1️⃣ Distribuição de pontos (Fibonacci Sphere)
Para distribuir 1500 pontos uniformemente numa esfera, uso a espiral de Fibonacci — mesmo algoritmo de girassóis e pinhas:

js
const phi   = Math.acos(1 - 2 * k / n);        // latitude
const theta = Math.PI * (1 + Math.sqrt(5)) * k; // longitude (ângulo áureo)
Isso evita o problema do "polo aglomerado" que acontece com distribuição aleatória.

2️⃣ Rotação em duas dimensões
Aplico duas matrizes de rotação sequencialmente — primeiro Y (yaw), depois X (pitch):

js
// Rotação Y
const x1 =  x * cy - z * sy;
const z1 =  x * sy + z * cy;

// Rotação X
const y2 =  y1 * cp - z1 * sp;
const z2 =  y1 * sp + z1 * cp;
3️⃣ Projeção perspectiva
Cada ponto 3D é projetado em 2D usando divisão por profundidade — ponto mais longe = menor na tela:

js
const zc = z2 + state.camZ;   // distância da câmera
const k  = FOCAL / zc;         // fator de escala
const sx = cx + x2 * k;        // posição X na tela
const sy = cy - y2 * k;        // posição Y na tela
4️⃣ Ordenação (Painter's Algorithm)
Para o efeito de profundidade correto, os pontos são ordenados por profundidade antes de desenhar — os mais distantes primeiro:

js
buf.sort((p, q) => q[4] - p[4]);
5️⃣ Ondas sonoras
As ondas são cascas esféricas em wireframe. Cada casca é desenhada como 3 anéis 3D que expandem radialmente e desaparecem:

js
w.r += w.speed * dt;   // expande
w.life -= dt * 0.5;    // desaparece
Por que Canvas 2D e não WebGL?
1500 pontos é pouco — Canvas 2D dá conta a 60fps fácil

Código muito mais simples de entender e manter

WebGL valeria a pena a partir de ~10.000 pontos ou se precisasse de shaders complexos

🎨 Como customizar
Trocar as cores do site
Todas as cores estão centralizadas em CSS variables no topo de css/style.css:

css
:root {
  --pink:  #ffb3d9;
  --lilac: #d5b3ff;
  --cyan:  #a8d8ff;
  --mint:  #b8ffe0;
  --bg:    #0a0812;
  /* ... */
}
Basta trocar aqui e o site inteiro se adapta.

Trocar as cores do canvas
No arquivo js/sphere.js, procure o array PALETTE:

js
const PALETTE = [
  [255, 179, 217],  // rosa pastel
  [213, 179, 255],  // lilás
  [168, 216, 255],  // azul pastel
  [184, 255, 224],  // menta
  [255, 213, 184],  // pêssego
  [255, 243, 184],  // amarelo pastel
];
Cada entrada é [R, G, B] (0-255). O canvas cicla automaticamente a cada 7 segundos.

Ajustar velocidade das ondas
js
const WAVE_INTERVAL = 0.9;  // segundos entre ondas
w.speed = 0.95;              // velocidade de expansão
Adicionar um novo produto
Copia um bloco <article class="card"> inteiro em qualquer página de categoria e cola dentro da product-grid-lg.

Trocar o nome da loja
Busca por "TechNova" em todos os arquivos HTML e substitui pelo seu nome.

📊 Performance
⚡ Zero dependências externas (exceto Google Fonts)

🚀 60 fps garantidos no canvas via requestAnimationFrame

✂️ Culling ativo — pontos fora da tela são descartados

🖼️ Imagens vetoriais em SVG (leves e nítidas em qualquer resolução)

📦 Peso total: ~45 KB (HTML + CSS + JS, sem contar fontes)

Testes em dispositivos
Dispositivo	Performance
🖥️ Desktop (Chrome/Edge/Firefox)	60 fps estável
💻 Notebook	60 fps estável
📱 iPhone (Safari)	55-60 fps
📱 Android (Chrome)	55-60 fps
🧭 Decisões técnicas
<details> <summary><strong>Por que não usei React/Vue?</strong></summary>
O objetivo era demonstrar domínio de fundamentos. Frameworks escondem o que está acontecendo por baixo. Construir do zero força você a entender:

Como o DOM funciona de verdade

Como gerenciar estado sem um framework

Como otimizar renderização manualmente

Como estruturar código em módulos

Além disso, o resultado final é muito mais leve — 45 KB vs. centenas de KB de um bundle React típico.

</details><details> <summary><strong>Por que separar <code>style.css</code> e <code>page.css</code>?</strong></summary>
Separação de responsabilidades:

style.css — estilos globais (variáveis, reset, header, footer, hero)

page.css — estilos específicos das páginas internas (cards, filtros, FAQ)

Isso facilita manutenção: se eu mexer no header, sei que só preciso olhar o style.css. Se eu mexer nos cards, só o page.css.

</details><details> <summary><strong>Por que <code>sphere.js</code> só carrega na home?</strong></summary>
O canvas da esfera só existe na home. Carregar sphere.js nas outras 5 páginas seria desperdício de banda.

Solução: cada página importa apenas os scripts que precisa:

html
<!-- Home -->
<script src="js/sphere.js"></script>
<script src="js/main.js"></script>

<!-- Páginas internas -->
<script src="js/main.js"></script>
</details><details> <summary><strong>Por que <code>clip-path</code> em vez de <code>border-radius</code>?</strong></summary>
Os botões e o logo têm cantos chanfrados (estilo HUD cyberpunk), não arredondados. border-radius só faz cantos arredondados; clip-path permite cortar em ângulo:

css
clip-path: polygon(
  8px 0,                      /* topo esquerdo chanfrado */
  100% 0,
  100% calc(100% - 8px),      /* baixo direito chanfrado */
  calc(100% - 8px) 100%,
  0 100%,
  0 8px
);
</details>
🗺️ Roadmap
Funcionalidades planejadas para próximas versões:

🎯 Curto prazo
□ Menu mobile funcional (drawer lateral)
□ Carrinho lateral com drawer
□ Busca overlay com resultados
□ Página individual de produto
🎨 Médio prazo
□ Filtros funcionais (mostrar/esconder cards de verdade)
□ Modo claro/escuro alternável
□ Sistema de avaliações
□ Lista de desejos
□ Cursor customizado com rastro
🚀 Longo prazo
□ Backend simples (Node.js + Express + SQLite)
□ Login e cadastro de usuário
□ Checkout integrado (Stripe / Mercado Pago)
□ Painel administrativo
□ PWA (instalável no celular)
🤝 Contribuindo
Contribuições são muito bem-vindas! Se você quer melhorar algo:

Faz um fork do projeto

Cria uma branch pra sua feature: git checkout -b feature/minha-feature

Commit suas mudanças: git commit -m 'feat: adiciona minha feature'

Push pra branch: git push origin feature/minha-feature

Abre um Pull Request

Convenção de commits
Uso o padrão Conventional Commits:

feat: nova funcionalidade

fix: correção de bug

docs: alteração na documentação

style: formatação, ponto e vírgula faltando, etc.

refactor: refatoração de código

perf: melhoria de performance

chore: atualização de build, deps, etc.

📄 Licença
Este projeto está sob a licença MIT — veja o arquivo LICENSE para detalhes.

Você é livre para usar, modificar e distribuir — inclusive comercialmente. Só pedimos que mantenha o crédito original.

👤 Autor
<div align="center">
Misa Andrejezieski

https://img.shields.io/badge/GitHub-MisaAndrejezieski-181717?style=for-the-badge&logo=github
https://img.shields.io/badge/LinkedIn-Conectar-0A66C2?style=for-the-badge&logo=linkedin
https://img.shields.io/badge/Portf%C3%B3lio-Ver_site-ffb3d9?style=for-the-badge

</div>
🙏 Créditos
🔤 Fontes: Google Fonts — Space Grotesk, Inter, JetBrains Mono

🎨 Inspiração visual: Estética cyberpunk, HUDs de ficção científica, Awwwards

🧮 Algoritmo da esfera: Fibonacci Sphere — distribuição uniforme de pontos

🛠️ Ferramentas: VS Code + Live Server

<div align="center">
⭐ Se este projeto te ajudou ou inspirou, deixa uma estrela no repositório!
Feito com 💜 e muito ☕ por Misa Andrejezieski

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=24&height=80&section=footer" /></div> ```