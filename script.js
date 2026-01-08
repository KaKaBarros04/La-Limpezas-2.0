
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
