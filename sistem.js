// ============================
// SETUP AWAL
// ============================

// // default waktu istirahat
// let restTimer = setTimeout(resting, 10000);

// ambil elemen yang membutuhkan manipulasi
const kirim = document.querySelector('#kirim');
const u5 = document.querySelector('#w5');
const u9 = document.querySelector('#w9');
const u0 = document.querySelector('#w0');

// sembunyikan elemen di awal
kirim.style.display = 'none';
u5.style.display = 'none';
u9.style.display = 'none';
u0.style.display = 'none';

// tombol “lihat syarat”
const sydaken = document.querySelector('#syarat');
sydaken.onclick = function () {
  kirim.style.display = 'block';
};

// ==================================
// PILIH UMUR → SET WAKTU ISTIRAHAT
// ==================================
const batasWaktu = document.querySelector('#batas');
const umur = document.querySelector('#KidsORteens');
const detikEl = document.getElementById("detik");
const menitEl = document.getElementById("menit");
const jamEl = document.getElementById("jam");
//let seteltimer = 0;
let detik = 0;
let menit = 0;
let jam = 0;
const time = null;
document.querySelector('#pilihKids').onclick = function () {
  umur.style.display = 'none';
  // nanti ubah jadi 2 jam
  const targetTimeKid = new Date().getTime() + (10 * 1000);
  const interval = setInterval(() => {
    const nowKid = new Date().getTime();
    const distanceKid = targetTimeKid - nowKid;

    // Hitung jam-menit-detik
    // const hoursKid = Math.floor(distanceKid / (1000 * 60 * 60));
    // const minutesKid = Math.floor((distanceKid % (1000 * 60 * 60)) / (1000 * 60)); nanti diaktifkan lagi
    const secondsKid = Math.floor((distanceKid % (1000 * 60)) / 1000);

    // // Tampilkan
    // jamEl.textContent = hoursKid.toString().padStart(2, "0");
    // menitEl.textContent = minutesKid.toString().padStart(2, "0");nanti aktifkan lagi
    detikEl.textContent = secondsKid.toString().padStart(2, "0");

    // Kalau sudah habis
    if (distanceKid < 0) {
      clearInterval(interval);
      document.getElementById("batas").textContent = "Waktu Habis!";
      resting();
    }
  }, 1000);
};

document.querySelector('#pilihTeens').onclick = function () {
  umur.style.display = 'none';
  // Countdown 4 jam dari sekarang
  const targetTimeTeens = new Date().getTime() + (4 * 60 * 60 * 1000);
  const interval = setInterval(() => {
    const nowTeen = new Date().getTime();
    const distanceteen = targetTimeTeens - nowTeen;

    // Hitung jam-menit-detik
    const hours = Math.floor(distanceteen / (1000 * 60 * 60));
    const minutes = Math.floor((distanceteen % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceteen % (1000 * 60)) / 1000);

    // Tampilkan
    jamEl.textContent = hours.toString().padStart(2, "0");
    menitEl.textContent = minutes.toString().padStart(2, "0");
    detikEl.textContent = seconds.toString().padStart(2, "0");

    // Kalau sudah habis
    if (distanceteen < 0) {
      clearInterval(interval);
      document.getElementById("batas").textContent = "Waktu Habis!";
      resting();
    }
  }, 1000);
}
// for (detik = 10; detik > 0; detik--) {
//   document.getElementById("detik").textContent = detik;
// }
// detik = Math.floor(9000 / 1000) % 60;
// menit = Math.floor(9000 / (1000 * 60)) % 60;
// jam = Math.floor(9000 / (1000 * 60 * 60));
// batasWaktu.textContent = 'Batas waktu ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik';
document.querySelector('#pilihAdult').onclick = function () {
  umur.style.display = 'none';
  batasWaktu.style.display = 'none';
};


// if (detik > 59) {
//   menit++;
//   detik = detik - 60;
// }
// if (menit > 59) {
//   jam++;
//   menit = menit - 60;
// }

// document.getElementById("jam").textContent = parseInt(jam);
// document.getElementById("menit").textContent = parseInt(menit);




// ============================
// FUNGSI ISTIRAHAT
// ============================

function resting() {
  document.body.classList.add('no-scroll');
  document.getElementById('rest').style.display = 'block';

  // kembali normal setelah 6 detik
  setTimeout(notrest, 6000);
}

function notrest() {
  document.getElementById('rest').style.display = 'none';
  document.body.classList.remove('no-scroll');
  // nonaktifkan ini saat sudah presentasi : setTimeout(resting, seteltimer);
  setTimeout(resting, 7200000);
  batasWaktu.style.display = 'none';
  // elemen #ingat sudah tidak ada di HTML
  // jadi jangan dipanggil lagi untuk mencegah error
}


// ============================
// FULLSCREEN IMAGE (AMAN)
// ============================

function fullscreen(imglink) {
  document.getElementById("FullIframe").src = imglink;
  document.getElementById("fullscreen").style.display = "block";
}

function toggleFullscreen() {
  const iframe = document.querySelector('.iframe');

  if (iframe.requestFullscreen) iframe.requestFullscreen();
  else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
  else if (iframe.mozRequestFullScreen) iframe.mozRequestFullScreen();
  else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
}
