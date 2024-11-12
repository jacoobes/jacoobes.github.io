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
