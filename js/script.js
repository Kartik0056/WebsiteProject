var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
let btn_open = document.querySelector('.btn-open-modal');
let btn_close = document.querySelector('.btn-close');
let modal_container = document.querySelector('.modal-container');

btn_open.addEventListener('click', () => {
  modal_container.classList.add('active');
});
btn_close.addEventListener('click', () => {
  modal_container.classList.remove('active');
});
modal_container.addEventListener('click', (e) => {
  if (e.target.closest("modal-inner")) {
    modal_container.classList.add('active');
  } else {
    e.target.classList.remove('active')
  }
})

// scrolling

let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter-item .counter');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 200;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 10);
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);




// back to top

    let back_to_top = document.querySelector('.back_to_top');
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
          back_to_top.classList.add('show');
        } else {
          back_to_top.classList.remove('show');
        }
      });
      back_to_top.addEventListener('click', function (e) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      });


      // Back to top 2

      

    
// cursor





      