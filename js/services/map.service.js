export const mapService = {
  initMap,
  addMarker,
  panTo
}

var gMap;

function initMap(lat = 32.0749831, lng = 34.9120554) {
  console.log('InitMap');
  return _connectGoogleApi()
    .then(() => {
      console.log('google available');
      gMap = new google.maps.Map(
        document.querySelector('#map'), {
        center: { lat, lng },
        zoom: 15
      })
      return gMap
    })

}

function addMarker(loc, title) {
  var marker = new google.maps.Marker({
    position: loc,
    map: gMap,
    title
  });
  return marker;
}


function panTo(lat, lng) {
  var laLatLng = new google.maps.LatLng(lat, lng);
  gMap.panTo(laLatLng);
}

function _connectGoogleApi() {
<<<<<<< HEAD
    if (window.google) return Promise.resolve()
    const API_KEY = 'AIzaSyBOCP1C7QADD9uueRe46CBBkb-mZc2Aj4o';
    var elGoogleApi = document.createElement('script')
    elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    elGoogleApi.async = true;
    document.body.append(elGoogleApi);

    return new Promise((resolve, reject) => {
        elGoogleApi.onload = resolve;
        elGoogleApi.onerror = () => reject('Google script failed to load')
    })
=======
  if (window.google) return Promise.resolve()
  const API_KEY = 'AIzaSyBOCP1C7QADD9uueRe46CBBkb-mZc2Aj4o';
  var elGoogleApi = document.createElement('script')
  elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
  elGoogleApi.async = true;
  document.body.append(elGoogleApi);

  return new Promise((resolve, reject) => {
    elGoogleApi.onload = resolve;
    elGoogleApi.onerror = () => reject('Google script failed to load')
  })
>>>>>>> ed2b30deab1befc2ad022f1e758c3843c13a11ff
}