document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     EmailJS (Formulário)
  ========================== */
  if (typeof emailjs === "undefined") {
    console.error("EmailJS não carregou. Confira o <script> do CDN no HTML.");
  } else {
    emailjs.init("3mxx1_DEEl5awD0To");

    const form = document.getElementById("contact-form");
    if (!form) {
      console.error("Form #contact-form não encontrado no DOM.");
    } else {
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        emailjs
          .sendForm("service_r086kap", "template_h5niivp", form)
          .then(() => {
            alert("Mensagem enviada com sucesso! 😊");
            form.reset();
          })
          .catch((err) => {
            console.error("Erro EmailJS:", err);
            alert("Erro ao enviar. Veja o console (F12).");
          });
      });
    }
  }

  /* =========================
     Drawer (Menu lateral)
  ========================== */
const openBtn = document.getElementById("hamburger");
  const closeBtn = document.getElementById("drawer-close");
const overlay = document.getElementById("drawer-overlay");
const drawer = document.getElementById("mobile-drawer");

function openDrawer() {
  document.body.classList.add("drawer-open");
  openBtn?.setAttribute("aria-expanded", "true");
  drawer?.setAttribute("aria-hidden", "false");

    // foco no botão fechar (A11y)
    setTimeout(() => closeBtn?.focus(), 0);
}

function closeDrawer() {
    // devolve foco pro hamburger ANTES de esconder via aria-hidden (A11y)
    setTimeout(() => openBtn?.focus(), 0);

  document.body.classList.remove("drawer-open");
  openBtn?.setAttribute("aria-expanded", "false");
  drawer?.setAttribute("aria-hidden", "true");
}

  openBtn?.addEventListener("click", openDrawer);
  closeBtn?.addEventListener("click", closeDrawer);
overlay?.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("drawer-open")) {
      closeDrawer();
    }
});

drawer?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeDrawer);
});

  /* =========================
     Header hide on scroll
  ========================== */
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    // se drawer estiver aberto, não mexe no header
    if (document.body.classList.contains("drawer-open")) return;

    const header = document.querySelector(".header");
    if (!header) return;

    const currentY = window.scrollY;

    if (currentY > lastScrollY && currentY > 120) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    lastScrollY = currentY;
  });
});
