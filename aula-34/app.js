// Aguarda o carregamento completo do DOM antes de acessar elementos
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle'); // Botão hamburger
  const navMenu   = document.getElementById('navMenu');   // Lista de navegação

  // Ao clicar no botão, alterna abertura do menu e atualiza aria-expanded
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');     // Adiciona/remove classe
    navToggle.setAttribute('aria-expanded', isOpen);     // Atualiza atributo para leitores de tela

    // Atualiza ícone visual: ☰ quando fechado, × quando aberto
    navToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });
});

const form = document.getElementById("contactForm");

form.querySelectorAll("input, textarea").forEach( fild =>{
  fild.addEventListener("input", () => {
    fild.classList.remove("error")
    fild.nextElementSibling.textContent = ''
  })
})

form.addEventListener("submit", event =>{
  event.preventDefault()

  const valido = true

  function showError(fild, msg){
    fild.classList.add("error")
    fild.nextElementSibling.textContent =  msg
    valido = false
  }

  const nome = form.name.value.trim()
  if(nome.length < 3){
    showError(form.name, "Digite um nome maior que 3 digitos")
  }

  const email = form.email.value.trim()
  const rejacsEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!rejacsEmail.test(email)){
    showError(form.email, "Email incorreto")
  }

})

