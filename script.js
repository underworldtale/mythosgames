// Modal UnderWorld Tale
function abrirModal() {
  document.getElementById("modalUWT").classList.add("open")
  document.body.style.overflow = "hidden"
}

function cerrarModalBtn() {
  document.getElementById("modalUWT").classList.remove("open")
  document.body.style.overflow = ""
}

function cerrarModal(e) {
  if (e.target === document.getElementById("modalUWT")) cerrarModalBtn()
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") cerrarModalBtn()
})

// NAV scroll effect
window.addEventListener("scroll", function() {
  var nav = document.getElementById("nav")
  if (window.scrollY > 40) nav.classList.add("scrolled")
  else nav.classList.remove("scrolled")
})

// Menú móvil
function toggleMenu() {
  document.getElementById("navMobile").classList.toggle("open")
}

// Cerrar menú al hacer scroll
window.addEventListener("scroll", function() {
  document.getElementById("navMobile").classList.remove("open")
})

// Formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault()
  var ok  = document.getElementById("form-ok")
  var err = document.getElementById("form-err")
  var campos = this.querySelectorAll(".form-campo")
  var valido = true

  campos.forEach(function(c) {
    if (!c.value.trim()) { c.style.borderColor = "rgba(255,100,100,0.5)"; valido = false }
    else c.style.borderColor = ""
  })

  if (!valido) {
    err.textContent = "Por favor, rellena todos los campos."
    err.style.display = "block"
    ok.style.display = "none"
    return
  }

  ok.textContent = "¡Mensaje enviado! Te responderemos pronto."
  ok.style.display = "block"
  err.style.display = "none"
  this.reset()
})

// Newsletter
document.getElementById("newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault()
  var email = this.querySelector("input[type='email']")
  var ok  = document.getElementById("nl-ok")
  var err = document.getElementById("nl-err")
  if (!email.value.trim() || !email.value.includes("@")) {
    err.textContent = "Introduce un email válido."
    err.style.display = "block"
    ok.style.display = "none"
    return
  }
  ok.textContent = "¡Suscripción confirmada! Pronto tendrás noticias."
  ok.style.display = "block"
  err.style.display = "none"
  this.reset()
})

// Animación de entrada para secciones
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) entry.target.classList.add("visible")
  })
}, { threshold: 0.1 })

document.querySelectorAll(".juego-card, .valor, .nosotros-texto, .devlog-card").forEach(function(el) {
  el.classList.add("fade-in")
  observer.observe(el)
})
