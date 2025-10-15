document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  alert(`Спасибо! Я свяжусь с вами по контакту: ${data.contact}`);
  form.reset();
});
