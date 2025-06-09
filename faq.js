 const items = document.querySelectorAll('.faq-item');
 items.forEach(item => {
  const question = item.querySelector('h3');

  question.addEventListener('click', () => {
    // Close all other items
    items.forEach(el => {
      if (el !== item) {
        el.classList.remove('active');
      }
    });

    // Toggle current item
    item.classList.toggle('active');
  });
});
