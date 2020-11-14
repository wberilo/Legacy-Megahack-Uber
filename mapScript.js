let map = L.map('mapid').setView([-23.5813856, -46.66364], 12.75);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//Ao clicar no botão schedule
document.querySelector('.submit-button').addEventListener('click', () => {
  L.marker([-23.5924371, -46.6807035])
    .addTo(map)
    .bindPopup('Avenida Br. Faria Lima')
    .openPopup();

  L.marker([-23.623819, -46.69024])
    .addTo(map)
    .bindPopup('Rua Novo Cancioneiro')
    .openPopup();
  document.querySelectorAll('.leaflet-marker-icon')[0].src = 'marker-icon-red.png'
});
