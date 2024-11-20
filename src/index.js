document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        
        if (link !== 'NONE') {
            window.open(link, '_blank'); // Opens the link in a new tab
        } else {
            alert('No link available'); // Or any other action if no link exists
        }
    });
});

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
if(savedTheme === 'dark') {
    togglebtn.checked = true 
}


// Add event listener to the toggle
togglebtn.addEventListener('change', function () {
  const newTheme = this.checked ? 'dark' : 'light';
  applyTheme(newTheme);
});

var form = document.querySelector('.pageclip-form')
const button = form.querySelector('button[type="submit"]')
Pageclip.form(form, {
  onSubmit: function (event) { 
      button.innerText = "..."
      button.setAttribute('disabled', 'true');
  },
  onResponse: function (error, response) {
    button.innerText = "Send"
    button.removeAttribute('disabled');
    setTimeout(() => {
        document.querySelector('#form-success').remove(); 
    }, 2000);
  },
  successTemplate: '<span id="form-success">Thank you!</span>'
});

