document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Get header height for accurate scroll position if header is fixed/sticky
                const headerHeight = document.querySelector('header').offsetHeight;
                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dark mode toggle
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

   
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.classList.replace('fa-moon', 'fa-sun'); 
    } else {
        // Default to light mode or respect user's system preference (not implemented here)
        body.classList.remove('dark-mode');
        themeToggleBtn.classList.replace('fa-sun', 'fa-moon'); // Change icon to moon
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode'); // Toggle the dark-mode class on the body
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.classList.replace('fa-moon', 'fa-sun'); 
            localStorage.setItem('theme', 'dark'); 
        } else {
            themeToggleBtn.classList.replace('fa-sun', 'fa-moon'); // Set icon to moon
            localStorage.setItem('theme', 'light'); 
        }
    });

    // Scroll to top button (located in the footer)
    document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
        });
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky'); 
        } else {
            header.classList.remove('sticky'); 
        }
    });
});