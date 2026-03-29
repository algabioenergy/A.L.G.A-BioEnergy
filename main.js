// ── Scroll reveal ──
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Traducción ES ↔ EN ──
let currentLang = 'es';

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  const btn = document.getElementById('langBtn');
  btn.textContent = currentLang === 'es' ? 'EN' : 'ES';

  // Todos los elementos con data-es y data-en
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    const text = el.getAttribute('data-' + currentLang);
    // Si es un <br> o tiene innerHTML complejo, usar innerHTML
    if (text.includes('\n')) {
      el.innerHTML = text.replace(/\n/g, '<br>');
    } else {
      el.textContent = text;
    }
  });

  // Actualizar el lang del html
  document.documentElement.lang = currentLang;
}
// Conectar el botón de idioma de forma segura
const btnLang = document.getElementById('langBtn');
if (btnLang) {
  btnLang.addEventListener('click', toggleLang);
}