// Counter animation
const counters = document.querySelectorAll('.counter');

const runCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const update = () => {
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };
  update();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 1 });

counters.forEach(counter => {
  observer.observe(counter);
});
