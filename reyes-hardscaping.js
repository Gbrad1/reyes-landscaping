// Define your local photo sets
const photoSets = {
  'patios': [
    'images/patios/patio-1.JPG',
    'images/patios/patio-2.JPG',
    'images/patios/patio-3.JPG',
    'images/patios/patio-4.JPG',
    'images/patios/patio-5.JPG',
    'images/patios/patio-6.JPG',
    'images/patios/patio-7.JPG',
    'images/patios/patio-8.JPG',
    'images/patios/patio-9.JPG',
    'images/patios/patio-10.JPG',
    'images/patios/patio-11.JPG',
    'images/patios/patio-12.JPG',
    'images/patios/patio-13.JPG'
    ],
  'retaining-walls': [
    'images/retaining-walls/retaining_wall_1.JPG',
    'images/retaining-walls/retaining_wall_2.JPG',
    'images/retaining-walls/retaining_wall_3.JPG',
    'images/retaining-walls/retaining_wall_4.JPG',
    'images/retaining-walls/retaining_wall_5.JPG',
    'images/retaining-walls/retaining_wall_6.JPG',
    'images/retaining-walls/retaining_wall_7.JPG',
    'images/retaining-walls/retaining_wall_8.JPG'
    ],
  'walkways': [
    'images/walkways/walkway-1.JPG',
    'images/walkways/walkway-2.JPG',
    'images/walkways/walkway-3.JPG',
    'images/walkways/walkway-4.JPG',
    'images/walkways/walkway-5.JPG',
    'images/walkways/walkway-6.JPG',
    'images/walkways/walkway-7.JPG',
    'images/walkways/walkway-8.JPG',
    'images/walkways/walkway-9.JPG',
    'images/walkways/walkway-10.JPG',
    'images/walkways/walkway-11.JPG',
    'images/walkways/walkway-12.JPG',
    'images/walkways/walkway-13.JPG'
    ],
  'featured-project': [
    'images/featured-project/fp-1.JPG',
    'images/featured-project/fp-2.JPG',
    'images/featured-project/fp-3.JPG',
    'images/featured-project/fp-4.JPG',
    'images/featured-project/fp-5.JPG',
    'images/featured-project/fp-6.JPG',
    'images/featured-project/fp-7.JPG',
    'images/featured-project/fp-8.JPG',
    'images/featured-project/fp-9.JPG'
  ]
};

let currentSet = [];
let currentIndex = 0;

function openModal(category) {
  currentSet = photoSets[category];
  currentIndex = 0;
  document.getElementById('modalImage').src = currentSet[currentIndex];
  document.getElementById('galleryModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('galleryModal').style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex >= currentSet.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = currentSet.length - 1;
  document.getElementById('modalImage').src = currentSet[currentIndex];
}

// Close modal if user clicks outside the image
window.onclick = function(event) {
  if (event.target == document.getElementById('galleryModal')) {
    closeModal();
  }
}

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    document.querySelector('nav').style.boxShadow =
      window.scrollY > 60 ? '0 4px 40px rgba(0,0,0,0.5)' : 'none';
  });