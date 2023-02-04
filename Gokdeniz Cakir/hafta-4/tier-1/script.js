const input = document.getElementById('input');
const button = document.getElementById('button');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let value = '';
let canvasURL = '';
canvas.width = 500;
canvas.height = 280;
const img = new Image();
img.src = './name_tag.png';

input.addEventListener('input', e => {
  value = e.target.value;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '56px Dancing Script';
  ctx.fillStyle = '#717171';
  ctx.textAlign = 'center';
  ctx.fillText(value, canvas.width / 2, 170);

  ctx.globalCompositeOperation = 'destination-over';
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});

button.addEventListener('click', () => {
  canvasURL = canvas.toDataURL('image/jpeg', 0.5);
  const createEl = document.createElement('a');
  createEl.href = canvasURL;
  createEl.download = 'my-name-tag';
  createEl.click();
  createEl.remove();
});
