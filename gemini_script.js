const addToCartButtons = document.querySelectorAll('.featured-products button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Add item to cart logic here (e.g., store in local storage)
    alert('Item added to cart!');
  });
});
