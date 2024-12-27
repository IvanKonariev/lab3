const imageList = document.getElementById('imageList');
const displayedImage = document.getElementById('displayedImage');
const imageWidth = document.getElementById('imageWidth');
const imageHeight = document.getElementById('imageHeight');
const borderThickness = document.getElementById('borderThickness');
const altText = document.getElementById('altText');
const applyChanges = document.getElementById('applyChanges');

displayedImage.style.border = '2px solid black';

imageList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        const imageName = target.getAttribute('data-image');
        displayedImage.src = `images/${imageName}`;
        altText.value = target.textContent;

        document.querySelectorAll('#imageList button').forEach((btn) => btn.classList.remove('active'));
        target.classList.add('active');
    }
});

applyChanges.addEventListener('click', () => {
    displayedImage.style.width = imageWidth.value + 'px';
    displayedImage.style.height = imageHeight.value !== 'auto' ? imageHeight.value + 'px' : 'auto';

    // Додаємо стиль і товщину рамки
    displayedImage.style.borderStyle = 'solid';
    displayedImage.style.borderColor = 'black';
    displayedImage.style.borderWidth = borderThickness.value + 'px';

    // Оновлюємо альтернативний текст
    displayedImage.alt = altText.value;
});