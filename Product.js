const colorButtons = document.querySelectorAll('.color-btn');
const tshirtImage = document.getElementById('tshirt-image');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const imageSrc = button.getAttribute('data-image');
    tshirtImage.src = imageSrc;
  });
});