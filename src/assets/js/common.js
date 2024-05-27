// Function to handle scroll event
const handleScroll = () => {
  const header = document.querySelector('.body-area');
  const scroll = window.scrollY;

  if (scroll >= 60) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

// Add scroll event listener to window after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', handleScroll);
});

// Function to handle window resize
const handleResize = () => {
  const header = document.querySelector('.body-area');

  if (header && window.innerWidth <= 1280) {
    // Remove sticky class if window width is less than or equal to 1280
    header.classList.remove('sticky');
  }
};

// Add resize event listener to window
window.addEventListener('resize', handleResize);

// Execute handleResize initially to handle the initial window size
handleResize();