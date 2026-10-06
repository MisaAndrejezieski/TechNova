/* ============================================================
   Scripts gerais do site — Cyberpunk Pastel
============================================================ */
(() => {
  "use strict";

  /* ---------- Header: muda ao rolar ---------- */
  const header = document.getElementById("header");
  if (header) {
    let last = 0;
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y > 40 && last <= 40) header.classList.add("scrolled");
      if (y <= 40 && last > 40) header.classList.remove("scrolled");
      last = y;
    }, { passive: true });
  }

  /* ---------- Marca link ativo baseado na URL ---------- */
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  /* ---------- Chips de filtro ---------- */
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const group = chip.parentElement;
      group.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
    });
  });

  /* ---------- Botões "adicionar ao carrinho" ---------- */
  const badge = document.querySelector(".cart-badge");
  document.querySelectorAll(".btn-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!badge) return;
      const n = parseInt(badge.textContent, 10) || 0;
      badge.textContent = n + 1;
      btn.style.transform = "scale(1.2)";
      setTimeout(() => { btn.style.transform = ""; }, 200);
    });
  });

  /* ---------- Efeito 3D: brilho pastel segue o mouse no card ---------- */
  document.querySelectorAll(".product-card, .card, .support-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--mx", x + "%");
      card.style.setProperty("--my", y + "%");
    });
  });

  /* ---------- Reveal on scroll (fade-in suave) ---------- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll(
      ".product-card, .card, .support-card, .section-header, .faq-item"
    ).forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)";
      io.observe(el);
    });
  }

  /* ---------- Efeito "typing" no hero-tag (opcional) ---------- */
  const heroTag = document.querySelector(".hero-tag");
  if (heroTag) {
    const originalText = heroTag.textContent.trim();
    heroTag.textContent = "";
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < originalText.length) {
        heroTag.textContent += originalText[i];
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 45);
  }

  /* ---------- Timestamp ao vivo no footer ---------- */
  const footerBottom = document.querySelector(".footer-bottom");
  if (footerBottom) {
    const updateTime = () => {
      const d = new Date();
      const pad = (n) => String(n).padStart(2, "0");
      const timeStr = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
      // preserva o texto original do copyright
      const base = footerBottom.dataset.base || footerBottom.textContent;
      footerBottom.dataset.base = base;
      footerBottom.textContent = base;
      const span = document.createElement("span");
      span.style.marginLeft = "12px";
      span.style.color = "rgba(255, 179, 217, 0.5)";
      span.textContent = `· ${timeStr} · SYSTEM ONLINE`;
      footerBottom.appendChild(span);
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  /* ---------- Botão "menu mobile" (visual — fecha ao clicar) ---------- */
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      // futuro: abrir drawer
      menuToggle.style.transform = "scale(0.9)";
      setTimeout(() => menuToggle.style.transform = "", 150);
    });
  }
})();