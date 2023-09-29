const shadowbox = document.querySelector('.shadowbox');
const horizontalSlider = document.getElementById('horizontal-slider');
const verticalSlider = document.getElementById('vertical-slider');

// Обработчик события для ползунков
function updateShadow() {
    shadowbox.style.setProperty('--h-shadow', horizontalSlider.value + 'px');
    shadowbox.style.setProperty('--v-shadow', verticalSlider.value + 'px');
}

horizontalSlider.addEventListener('input', updateShadow);
verticalSlider.addEventListener('input', updateShadow);

// Изначальная установка тени
updateShadow();