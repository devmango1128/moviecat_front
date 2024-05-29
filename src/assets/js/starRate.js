// src/assets/js/starRate.js
export default function starRate() {
  const rateWrap = document.querySelectorAll('.rating');
  const opacityHover = '0.5';

  rateWrap.forEach(wrap => {
    const stars = wrap.querySelectorAll('.star-icon');
    const inputs = wrap.querySelectorAll('.rating__input');
    
    wrap.addEventListener('mouseenter', () => {
      stars.forEach((starIcon, idx) => {
        starIcon.addEventListener('mouseenter', () => {
          initStars(wrap);
          filledRate(stars, idx);
          updateStarOpacity(stars, opacityHover);
        });

        starIcon.addEventListener('mouseleave', () => {
          resetStarOpacity(stars);
          checkedRate(wrap);
        });
      });
    });

    wrap.addEventListener('mouseleave', () => {
      resetStarOpacity(stars);
      checkedRate(wrap);
    });

    inputs.forEach(input => {
      input.addEventListener('change', () => {
        checkedRate(wrap);
      });
    });

    checkedRate(wrap);
  });

  function filledRate(stars, index) {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('filled');
    }
  }

  function checkedRate(wrap) {
    const checkedRadio = wrap.querySelector('.rating__input:checked');
    if (checkedRadio) {
      initStars(wrap);
      let previousSiblings = getPreviousSiblings(checkedRadio.parentElement);
      previousSiblings.forEach(sibling => {
        sibling.querySelector('.star-icon').classList.add('filled');
      });
      checkedRadio.nextElementSibling.classList.add('filled');
    }
  }

  function getPreviousSiblings(element) {
    let siblings = [];
    let prevSibling = element.previousElementSibling;

    while (prevSibling) {
      siblings.push(prevSibling);
      prevSibling = prevSibling.previousElementSibling;
    }
    return siblings;
  }

  function initStars(wrap) {
    const stars = wrap.querySelectorAll('.star-icon');
    stars.forEach(star => {
      star.classList.remove('filled');
    });
  }

  function updateStarOpacity(stars, opacity) {
    stars.forEach(star => {
      if (star.classList.contains('filled')) {
        star.style.opacity = opacity;
      }
    });
  }

  function resetStarOpacity(stars) {
    stars.forEach(star => {
      star.style.opacity = '1';
    });
  }
}
