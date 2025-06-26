const images = [
  'assets/img2.png',
  'assets/img3.png',
  'assets/img4.png',
  'assets/img5.png',
  'assets/img6.png',
  'assets/img7.png',
  'assets/img8.png'
];

const track = document.getElementById('tickerTrack');

// Adding images twice for seamless looping
[...images, ...images].forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  track.appendChild(img);
});
