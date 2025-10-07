function initReviews() {
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const track = slider.querySelector('.slides');
  const slides = Array.from(track.children);
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  slider.querySelector('[data-dir="prev"]').addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });
  slider.querySelector('[data-dir="next"]').addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });

  setInterval(() => {
    index = (index + 1) % slides.length;
    update();
  }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
  initReviews();
});
