console.log("Global JS loaded");

function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        
        updateActiveNav(id);
      }
    });
  });
}

function updateActiveNav(targetId) {
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === targetId) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScrolling();
  
  const observer = new MutationObserver(() => {
    initSmoothScrolling();
  });
  
  const sectionsContainer = document.getElementById('sections-container');
  if (sectionsContainer) {
    observer.observe(sectionsContainer, { childList: true, subtree: true });
  }
});