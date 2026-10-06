<div align="center">

# 🌆 TechNova

### Loja de informática fictícia com estética cyberpunk pastel

Construída do zero em HTML, CSS e JavaScript puro — sem frameworks, sem bibliotecas, sem dependências.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Canvas](https://img.shields.io/badge/Canvas_API-FF6B6B?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-b8ffe0?style=for-the-badge)](#-licença)

</div>

---

## 📸 Preview

![Preview do site](./assets/preview.png)

> 💡 **Dica:** substitua o `preview.png` por um screenshot ou GIF do seu site rodando.

---

## ✨ Destaques

- 🌐 **Canvas 3D customizado** no hero — esfera de pontos com projeção perspectiva e ondas sonoras emitindo em cascatas esféricas
- 🎨 **Estética cyberpunk pastel** — paleta única de rosa, lilás e azul suave sobre fundo preto arroxeado
- 📱 **100% responsivo** — funciona perfeitamente em desktop, tablet e celular
- ⚡ **Zero dependências** — apenas HTML, CSS e JavaScript puro
- 🎯 **Design system** com CSS variables (cores, raios, sombras, gradientes)
- 🧩 **Estrutura modular** — HTML, CSS e JS separados por responsabilidade
- 🔤 **Tipografia profissional** — Space Grotesk (títulos), Inter (corpo), JetBrains Mono (detalhes)
- ✨ **Micro-animações** — reveal on scroll, glitch ocasional no título, typing effect, hover 3D nos cards
- 🖼️ **Navegação completa** — 6 páginas com breadcrumbs e highlight automático da página ativa

---

## 🚀 Demo ao vivo

🔗 **[technova.vercel.app](#)** *(substitua pelo link real após o deploy)*

---

## 🗂️ Estrutura do projeto
technova/
│
├── index.html # Home — hero com canvas 3D + destaques
├── produtos.html # Catálogo completo
├── notebooks.html # Categoria: Notebooks
├── pecas.html # Categoria: Peças e componentes
├── perifericos.html # Categoria: Periféricos
├── suporte.html # Central de ajuda + FAQ
├── favicon.svg # Ícone do site
├── README.md # Este arquivo
│
├── css/
│ ├── style.css # Estilos globais (header, hero, footer, variáveis)
│ └── page.css # Estilos das páginas internas (cards, filtros, FAQ)
│
├── js/
│ ├── sphere.js # Canvas 3D — esfera pulsante com ondas sonoras
│ └── main.js # Header scroll, chips, carrinho, reveal on scroll
│
└── assets/ # Imagens e recursos (vazio por padrão)
└── preview.png # (adicione o preview do site aqui)

text

---

## 🛠️ Stack

| Tecnologia | Uso |
|-----------|-----|
| **HTML5** | Estrutura semântica das 6 páginas |
| **CSS3** | Grid, Flexbox, custom properties, animações, clip-path |
| **JavaScript ES6+** | Canvas API, IntersectionObserver, requestAnimationFrame |
| **Google Fonts** | Space Grotesk, Inter, JetBrains Mono |
| **Canvas 2D** | Renderização da esfera 3D com projeção perspectiva |

---

## ⚙️ Rodando localmente

### Opção 1 — Abrir direto no navegador

Basta abrir o arquivo `index.html` no seu navegador.

### Opção 2 — Live Server (recomendado)

Se você usa **VS Code**:

1. Instala a extensão **Live Server**
2. Clica com o botão direito em `index.html`
3. Escolhe **"Open with Live Server"**

A página vai abrir em `http://127.0.0.1:5500` com auto-reload ao salvar.

### Opção 3 — Servidor local com Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
Depois abre http://localhost:8000 no navegador.

Opção 4 — Node.js
bash
npx serve
🎨 Paleta de cores
Nome	Hex	Uso
Rosa pastel	#ffb3d9	Accent principal, links ativos
Lilás	#d5b3ff	Gradiente, bordas hover
Azul pastel	#a8d8ff	Accent secundário
Menta	#b8ffe0	Badges "novo"
Pêssego	#ffd5b8	Badges "hot"
Fundo	#0a0812	Background principal (preto arroxeado)
Texto	#f0e8ff	Texto principal (branco lavanda)
O gradiente principal é:

css
linear-gradient(135deg, #ffb3d9 0%, #d5b3ff 50%, #a8d8ff 100%);
🎯 Como customizar
Trocar as cores do site
Todas as cores estão centralizadas em CSS variables no topo de css/style.css:

css
:root {
  --pink:   #ffb3d9;
  --lilac:  #d5b3ff;
  --cyan:   #a8d8ff;
  /* ... */
}
Basta trocar aqui e o site inteiro se adapta.

Trocar as cores do canvas 3D
No arquivo js/sphere.js, procure o array PALETTE:

js
const PALETTE = [
  [255, 179, 217],  // rosa pastel
  [213, 179, 255],  // lilás
  [168, 216, 255],  // azul pastel
  // ...
];
Cada entrada é [R, G, B] (0-255). O canvas cicla automaticamente entre elas a cada 7 segundos.

Adicionar um produto
Copia um bloco <article class="card">...</article> inteiro e cola dentro da product-grid-lg.

Trocar o nome da loja
Busca por "TechNova" em todos os arquivos HTML e substitui pelo seu nome.

🌐 Deploy
Vercel (recomendado)
Faz push do projeto para um repositório no GitHub

Entra em vercel.com e conecta o repositório

Deploy automático — te dá uma URL tipo technova.vercel.app

Netlify (mais rápido)
Arrasta a pasta do projeto direto em app.netlify.com/drop

Pronto. URL instantânea.

GitHub Pages (grátis)
Faz push do projeto para o GitHub

Vai em Settings → Pages

Escolhe Branch: main e Folder: / (root)

Salva. URL: seunome.github.io/technova

📈 Performance
Zero dependências externas (exceto Google Fonts)

Canvas otimizado com requestAnimationFrame e culling de pontos fora da tela

Imagens nativas em SVG e emojis (sem peso)

CSS puro — sem frameworks pesados

Peso total: ~40 KB (HTML + CSS + JS somados, sem contar fontes)

🧭 Aprendizados / Decisões técnicas
Por que Canvas 2D e não WebGL? — Para o volume de pontos atual (1500), Canvas 2D é suficiente e muito mais simples. WebGL valeria a pena a partir de ~10k pontos.

Por que CSS variables? — Facilita manutenção e permite trocar o tema inteiro mudando um único bloco.

Por que JS separado por arquivo? — sphere.js só é carregado na home (onde o canvas existe), economizando banda nas outras páginas.

Por que separar style.css e page.css? — Separa estilos globais (header/footer/hero) dos estilos específicos das páginas internas. Facilita manutenção.

🚧 Roadmap
Funcionalidades planejadas para próximas versões:

□ Menu mobile funcional (drawer lateral)
□ Carrinho lateral com drawer
□ Busca overlay com resultados
□ Página individual de produto
□ Filtros funcionais (filtrar cards de verdade)
□ Modo claro/escuro
□ Backend simples (Node/Supabase)
□ Checkout integrado (Stripe/Mercado Pago)
□ PWA (instalável no celular)
📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Você é livre para usar, modificar e distribuir — inclusive comercialmente.

👤 Autor
Seu Nome

🌐 Portfólio: seu-site.com

💼 LinkedIn: linkedin.com/in/seu-perfil

🐙 GitHub: @seu-usuario

✉️ Email: seu@email.com

🙏 Créditos
Fontes: Google Fonts — Space Grotesk, Inter, JetBrains Mono

Inspiração visual: Estética cyberpunk, HUD interfaces, Awwwards

Ferramentas: VS Code + Live Server

<div align="center">
⭐ Se este projeto te ajudou ou inspirou, deixa uma estrela no repositório!

Feito com 💜 e muito ☕

</div> ```