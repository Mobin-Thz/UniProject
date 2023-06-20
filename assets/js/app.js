const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  if (currentActive === 1) {
    document.getElementById('cardimg-1').src =
      'https://assets3.razerzone.com/je0rnigt6ZxOo8zdJmpSRzTJnSo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2c%2Fh2e%2F9042123751454%2FRZ04-02830200-R3U1-500x500.png';
    document.getElementById('cardimg-2').src =
      'https://assets3.razerzone.com/6isdhYESyVMJZouniw4ZdyPZBbo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh80%2Fhf9%2F9522060525598%2Fblackshark-v2-esl-500x500.png';
    document.getElementById('cardimg-3').src =
      'https://assets3.razerzone.com/lHk6V-EjuaRhT4cASrJP78uJmXE=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8b%2Fh62%2F9242259816478%2Fblackshark-v2-x-green-500x500.png';
  } else if (currentActive === 2) {
    document.getElementById('cardimg-1').src =
      'https://assets3.razerzone.com/0hfUawch_bcD6BssG6F0x0l9m4U=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh9c%2Fh79%2F9431346348062%2Fblackshark-v2-x-usb-500x500.png';
    document.getElementById('cardimg-2').src =
      'https://assets3.razerzone.com/3jSMTX1WWXo7njBMSvEuPN4xuFY=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe8%2Fhfc%2F9522060623902%2Fbarracuda-pro-3-500x500.png';
    document.getElementById('cardimg-3').src =
      'https://assets3.razerzone.com/LsF-0I2mnVv__GEJ7a3o5uaPWc8=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhab%2Fhfb%2F9397630271518%2Fkraken-v3-3-500x500.png';
  } else if (currentActive === 3) {
    document.getElementById('cardimg-1').src =
      'https://assets3.razerzone.com/cjFzPnAY6_Rl7gNlS9vmxgDX5iI=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh31%2Fh0e%2F9447199211550%2Fblackshark-v2-x-quartz-500x500.png';
    document.getElementById('cardimg-2').src =
      'https://assets3.razerzone.com/H0fQWONyzA3uxTRpiup4_q0hwZA=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhfb%2Fhe4%2F9412836884510%2Fbarracuda-x-mercury-2022-2-500x500.png';
    document.getElementById('cardimg-3').src =
      'https://assets3.razerzone.com/FZ9wbW2d5IkaX1nQKeHkZrhPiG8=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh48%2Fh9f%2F9533909991454%2Fdeathstalker-v2-pro-4-500x500.png';
  } else if (currentActive === 4) {
    document.getElementById('cardimg-1').src =
      'https://assets3.razerzone.com/96b-kCxaVynmyNVUp-JJydnqi_s=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh19%2Fha6%2F9533909794846%2Fblackwidow-v3-pro-4-500x500.png';
    document.getElementById('cardimg-2').src =
      'https://assets3.razerzone.com/8ZZyy1_8A5G1tQtvGQ0eMLCXlPo=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha0%2Fhb6%2F9529652445214%2Fbasilisk-v3-pro-black-2-500x500.png';
    document.getElementById('cardimg-3').src =
      'https://assets3.razerzone.com/xe4P8Y_ajpV36genrpU6hTr64fM=/500x500/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh71%2Fh7b%2F9399589732382%2F2-blackshark-v2-black-se-500x500.png';
  }

  console.log(currentActive);
}
