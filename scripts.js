
function toast(msg, ok = true) {
  const el = document.getElementById("toastMsg");
  if (!el) return alert(msg);

  el.querySelector(".toast-body").textContent = msg;

  
  const icon = el.querySelector(".toast-header i");
  if (icon) {
    icon.className = ok
      ? "bi bi-check-circle-fill me-2 text-success"
      : "bi bi-x-circle-fill me-2 text-danger";
  }

  const t = new bootstrap.Toast(el, { delay: 2000 });
  t.show();
}


document.querySelectorAll('a.nav-link[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });


    const menu = document.getElementById("menu");
    if (menu && menu.classList.contains("show")) {
      new bootstrap.Collapse(menu).hide();
    }
  });
});

const btnTop = document.createElement("button");
btnTop.id = "btnTop";
btnTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
btnTop.title = "Volver arriba";
document.body.appendChild(btnTop);

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  btnTop.style.display = window.scrollY > 450 ? "block" : "none";
});


const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre.length < 3) return toast("Tu nombre debe tener al menos 3 letras.", false);
    if (!/^\S+@\S+\.\S+$/.test(correo)) return toast("Correo inválido. Ej: tucorreo@gmail.com", false);
    if (mensaje.length < 10) return toast("Tu mensaje es muy corto (mínimo 10).", false);


    contactForm.reset();
    toast("Mensaje enviado ✅ Te responderemos pronto.", true);
  });
}

const formLogin = document.getElementById("formLogin");
if (formLogin) {
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("password").value.trim();

    
    const USER_OK = "admin";
    const PASS_OK = "1234";

    if (user === USER_OK && pass === PASS_OK) {
      toast("Login correcto ✅ Bienvenido " + user, true);

    
      const modalEl = document.getElementById("modalLogin");
      const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      modal.hide();

     
      const loginLink = document.querySelector('[data-bs-target="#modalLogin"]');
      if (loginLink) {
        loginLink.innerHTML = '<i class="bi bi-person-check me-1"></i> Sesión activa';
        loginLink.classList.add("text-white");
        loginLink.removeAttribute("data-bs-toggle");
        loginLink.removeAttribute("data-bs-target");
        loginLink.href = "#";
      }
      formLogin.reset();
    } else {
      toast("Usuario o contraseña incorrectos ❌", false);
    }
  });
}
document.querySelectorAll("img").forEach((img) => {
  img.style.opacity = "0";
  img.style.transition = "opacity .35s ease";
  if (img.complete) img.style.opacity = "1";
  else img.addEventListener("load", () => (img.style.opacity = "1"));
});
