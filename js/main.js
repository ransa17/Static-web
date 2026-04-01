function loadComponent(id, file, pageName) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            
            if (id === 'navbar-placeholder') {
                initNav(); 
                setActiveLink(pageName); 
            }
        })
        .catch(err => console.error("Failed to load component:", err));
}

function initNav() {
    const navToggle = document.getElementById('navToggle');
    const navClose = document.getElementById('navClose');
    const navOverlay = document.getElementById('navOverlay');

    if (navToggle && navOverlay) {
        navToggle.addEventListener('click', () => navOverlay.classList.add('active'));
    }
    if (navClose && navOverlay) {
        navClose.addEventListener('click', () => navOverlay.classList.remove('active'));
    }
}

function setActiveLink(pageName) {
    const links = document.querySelectorAll('.nav-item');
    links.forEach(link => {
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });
}