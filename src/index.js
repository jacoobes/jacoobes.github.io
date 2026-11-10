// Function to set the theme based on user preference
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
let savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  let resolved = prefersDarkScheme ? 'dark' : 'light';
  savedTheme = resolved;
  applyTheme(prefersDarkScheme ? 'dark' : 'light');
}

const togglebtn = document.getElementById('dark-mode-toggle');
if (togglebtn) {
  togglebtn.checked = savedTheme === 'dark';
  togglebtn.addEventListener('change', function () {
    applyTheme(this.checked ? 'dark' : 'light');
  });
} 


//var form = document.querySelector('.pageclip-form')
//const button = form.querySelector('button[type="submit"]')
//Pageclip.form(form, {
//  onSubmit: function (event) {
//      button.innerText = "..."
//      button.setAttribute('disabled', 'true');
//  },
//  onResponse: function (error, response) {
//    button.innerText = "Send"
//    button.removeAttribute('disabled');
//    setTimeout(() => {
//        document.querySelector('#form-success').remove(); 
//    }, 2000);
//  },
//  successTemplate: '<span id="form-success">Thank you!</span>'
//});
//

// LoveBytes slideshow — manual prev/next controls
if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-slideshow]').forEach((root) => {
    const slides = Array.from(root.querySelectorAll('.lb-slide'));
    if (!slides.length) return;

    const counter = root.querySelector('.lb-counter');
    const prev = root.querySelector('.lb-prev');
    const next = root.querySelector('.lb-next');

    const pad = (n) => String(n + 1).padStart(2, '0');
    const total = String(slides.length).padStart(2, '0');
    let index = 0;

    const show = (n) => {
      index = (n + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
      if (counter) counter.textContent = `${pad(index)} / ${total}`;
    };

    if (prev) prev.addEventListener('click', () => show(index - 1));
    if (next) next.addEventListener('click', () => show(index + 1));

    show(0);
  });
}
