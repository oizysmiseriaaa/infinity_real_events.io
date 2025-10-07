let lightbox = null;

function initGallery() {
  lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: false,
    moreText: 'View More',
    moreLength: 60,
    zoomable: true,
    draggable: true,
    dragToleranceX: 40,
    dragToleranceY: 65,
    preload: true,
    descPosition: 'bottom',
    openEffect: 'fade',
    closeEffect: 'fade',
    slideEffect: 'slide',
    svg: {
      close: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
      next: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"></polyline></svg>',
      prev: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15,18 9,12 15,6"></polyline></svg>',
      zoomIn: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>',
      zoomOut: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path><line x1="8" y1="11" x2="14" y2="11"></line></svg>',
      rotate: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23,4 23,10 17,10"></polyline><polyline points="1,20 1,14 7,14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4a9 9 0 0 1-14.85 4.36L23 14"></path></svg>',
      download: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7,10 12,15 17,10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>'
    }
  });

  lightbox.on('open', () => {
    setTimeout(() => {
      const desc = document.querySelector('#glightbox-body .gslide-description .gslide-desc');
      if (desc) {
        desc.style.display = 'block !important';
        desc.style.visibility = 'visible !important';
        desc.style.opacity = '1 !important';
        desc.style.position = 'relative !important';
        desc.style.zIndex = '999 !important';
        
        if (desc.textContent.trim() === '') {
          const currentSlide = document.querySelector('#glightbox-body .gslide-current');
          if (currentSlide) {
            const img = currentSlide.querySelector('img');
            if (img) {
              const src = img.src;
              const link = document.querySelector(`a[href="${src}"]`);
              if (link && link.getAttribute('data-description')) {
                desc.textContent = link.getAttribute('data-description');
              }
            }
          }
        }
      }
    }, 200);
  });

  lightbox.on('slide_changed', ({ prev, current, next }) => {
    setTimeout(() => {
      const desc = document.querySelector('#glightbox-body .gslide-description .gslide-desc');
      if (desc) {
        desc.style.display = 'block !important';
        desc.style.visibility = 'visible !important';
        desc.style.opacity = '1 !important';
        desc.style.position = 'relative !important';
        desc.style.zIndex = '999 !important';
        
        const currentSlide = document.querySelector('#glightbox-body .gslide-current');
        if (currentSlide) {
          const img = currentSlide.querySelector('img');
          if (img) {
            const src = img.src;
            const link = document.querySelector(`a[href="${src}"]`);
            if (link && link.getAttribute('data-description')) {
              desc.textContent = link.getAttribute('data-description');
            }
          }
        }
      }
    }, 100);
  });

  document.addEventListener('keydown', function(e) {
    if (lightbox.isOpen) {
      switch(e.key) {
        case 'ArrowLeft':
          lightbox.prev();
          break;
        case 'ArrowRight':
          lightbox.next();
          break;
        case 'Escape':
          lightbox.close();
          break;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initGallery();
});
