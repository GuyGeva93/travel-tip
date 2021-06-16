import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'

window.onload = onInit;
window.onAddMarker = onAddMarker;
window.onPanTo = onPanTo;
window.onGetLocs = onGetLocs;
window.onGetUserPos = onGetUserPos;


function onInit() {
<<<<<<< HEAD
    mapService.initMap()
        .then((map) => {
            map.addListener("click", (mapsMouseEvent) => {
                let title = prompt('location name');
                mapService.addMarker(mapsMouseEvent.latLng, title)
                let latLng = mapsMouseEvent.latLng.toJSON()
                locService.addLoc(title, latLng.lat, latLng.lng);
            })
        })
        .catch(() => console.log('Error: cannot init map'));
=======
  mapService.initMap()
    .then((map) => {
      map.addListener("click", (mapsMouseEvent) => {
        let title = prompt('location name');
        mapService.addMarker(mapsMouseEvent.latLng, title)
        let latLng = mapsMouseEvent.latLng.toJSON()
        locService.addLoc(title, latLng.lat, latLng.lng);
      })
    })
    .catch(() => console.log('Error: cannot init map'));
>>>>>>> ed2b30deab1befc2ad022f1e758c3843c13a11ff
}

// This function provides a Promise API to the callback-based-api of getCurrentPosition
function getPosition() {
<<<<<<< HEAD
    console.log('Getting Pos');
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
=======
  console.log('Getting Pos');
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
>>>>>>> ed2b30deab1befc2ad022f1e758c3843c13a11ff
}

//TODO -> renderLocs
function onGetLocs() {
  locService.getLocs()
    .then(locs => {
      console.log('Locations:', locs)
      document.querySelector('.locs').innerText = JSON.stringify(locs)
    })
}

function onGetUserPos() {
  getPosition()
    .then(pos => {
      console.log('User position is:', pos.coords);
      document.querySelector('.user-pos').innerText =
        `Latitude: ${pos.coords.latitude} - Longitude: ${pos.coords.longitude}`
    })
    .catch(err => {
      console.log('err!!!', err);
    })
}

function onPanTo() {
  console.log('Panning the Map');
  mapService.panTo(35.6895, 139.6917);
}