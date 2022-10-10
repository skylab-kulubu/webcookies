const rocket = document.getElementById('rocket');
const box = document.getElementById('box');

window.addEventListener('scroll', () => {
    var scroll = Math.floor(window.pageYOffset/(document.body.scrollHeight-window.innerHeight)*100);
    rocket.style.left = `${scroll}%`
})

setInterval(() => {
    box.classList.toggle('active')
},300)