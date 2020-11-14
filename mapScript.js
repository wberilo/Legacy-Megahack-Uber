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

const fillInput = (inputClass, content) => {
  const input = document.getElementsByClassName(inputClass);
  let counter = 0;
  let inputToChange = input[counter];
  while (inputToChange.value.length !== 0) {
     counter++
     inputToChange = input[counter];
   }

  inputToChange.value = content;
}

function onMapClick(e) {
  // alert("You clicked the map at " + e.latlng);
  var apikey = '12fc857d51b74fbdb51b38dff544a4d9';
  var latitude = e.latlng.lat;
  var longitude = e.latlng.lng;

  var api_url = 'https://api.opencagedata.com/geocode/v1/json'

  var request_url = api_url
    + '?'
    + 'key=' + apikey
    + '&q=' + encodeURIComponent(latitude + ',' + longitude)
    + '&pretty=1'
    + '&no_annotations=1';

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  var request = new XMLHttpRequest();
  request.open('GET', request_url, true);

  request.onload = function () {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status == 200) {
      // Success!
      var data = JSON.parse(request.responseText);
      fillInput( 'input-address', data.results[0].formatted);

    } else if (request.status <= 500) {
      // We reached our target server, but it returned an error

      console.log("unable to geocode! Response code: " + request.status);
      var data = JSON.parse(request.responseText);
      console.log(data.status.message);
    } else {
      console.log("server error");
    }
  };

  request.onerror = function () {
    // There was a connection error of some sort
    console.log("unable to connect to server");
  };

  request.send();  // make the request
}

map.on('click', onMapClick);





