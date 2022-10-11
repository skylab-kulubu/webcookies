const left = document.getElementById('left');
const right = document.getElementById('right');
const sliders = document.getElementById('sliders');

var index = 0;

const left_btn = () => {
    right.classList.remove('disabled');
    index += 1;
    sliders.style.left = `${index * 600}px`;
    if(index == 0) {
        left.classList.add('disabled');
    }
}
const right_btn = () => {
    left.classList.remove('disabled');
    index -= 1;
    sliders.style.left = `${index * 600}px`;
    if(index == -2) {
        right.classList.add('disabled');
    }
}