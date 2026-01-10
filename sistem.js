kirim = document.querySelector('#kirim'); script
  (function () {
    seteltimer = 100000
    let restTimer = setTimeout("resting()", seteltimer)
    kirim.style.display = 'none';
  })();

sydaken = document.querySelector('#syarat');
sydaken.onclick = function () { kirim.style.display = 'block'; }

document.getElementById("sembunyi").onclick = function () {
  document.getElementById("ingat").style.display = 'none';
  document.body.classList.remove('no-scroll');
  document.getElementById("rest").style.display = 'none';
};

// Berubah scren time berdasarkan umur
const logo = [asset / logo_website.svg, asset / teensweb.svg];
let imgindex = 0;
const umur = document.querySelector('#KidsORteens');
document.querySelector('.pilihKids').onclick = function () {
  seteltimer = 5000
  restTimer = setTimeout("resting()", seteltimer)
  umur.style.display = 'none';
}
document.querySelector('.pilihTeens').onclick = function () {
  seteltimer = 9000
  restTimer = setTimeout("resting()", seteltimer)
  umur.style.display = 'none';
}
document.querySelector('.pilihAdult').onclick = function () {

  restTimer = null
  umur.style.display = 'none';
}

function resting() {
  document.body.classList.add('no-scroll');
  document.getElementById('rest').style.display = 'block';
  setTimeout("notrest()", 6000)
}
function notrest() {
  document.getElementById('rest').style.display = 'none';
  document.body.classList.remove('no-scroll');
  document.getElementById('ingat').style.display = 'block';
}

jam = menit / 60
menit = detik / 60
detik = seteltimer / 1000

const jamEl = document.querySelector("#jam");
const menitEL = document.getElementById('menit');
const detikEl = document.getElementById('detik');
jamEl.textContent = "5";
menitEL.textContent = menit;
detikEl.textContent = detik + "detik";
//let hours = Math.floor(diff  / hour_to_miliseconds);

//let minutes = Math.floor((diff % hour_to_miliseconds) / minute_to_miliseconds);

//let seconds = Math.floor((diff % minute_to_miliseconds) / second_to_miliseconds);

function fullscreen(imglink) {
  document.getElementById("FullIframe").src = imglink;
  document.getElementById("fullscreen").style.display = "block";
}

function toggleFullscreen() {
  var iframe = document.querySelector('.iframe');

  // Periksa apakah browser mendukung mode layar penuh
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.mozRequestFullScreen) { /* Firefox */
    iframe.mozRequestFullScreen();
  } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { /* IE/Edge */
    iframe.msRequestFullscreen();
  }
}


