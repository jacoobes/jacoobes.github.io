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
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme(prefersDarkScheme ? 'dark' : 'light');
}


// Add event listener to the toggle
document.getElementById('dark-mode-toggle').addEventListener('change', function () {
  const newTheme = this.checked ? 'dark' : 'light';
  applyTheme(newTheme);
});

