
document.addEventListener("DOMContentLoaded", () => {
  // Confere se a lib carregou
  if (typeof emailjs === "undefined") {
    console.error("EmailJS não carregou. Confira o <script> do CDN no HTML.");
    return;
  }

  emailjs.init("3mxx1_DEEl5awD0To"); // sua public key

  const form = document.getElementById("contact-form");
  if (!form) {
    console.error("Form #contact-form não encontrado no DOM.");
    return;
  }

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
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // fecha menu ao clicar em um link
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }
});
 let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  const currentY = window.scrollY;

  // se o menu estiver aberto, não esconde
  const nav = document.getElementById("nav");
  const isMenuOpen = nav && nav.classList.contains("open");
  if (isMenuOpen) return;

  if (currentY > lastScrollY && currentY > 120) {
    header.classList.add("hide"); // rolando pra baixo
  } else {
    header.classList.remove("hide"); // rolando pra cima
  }

  lastScrollY = currentY;
});
