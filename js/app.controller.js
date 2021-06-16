import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'

window.onload = onInit;
// window.onAddMarker = onAddMarker;
window.onPanTo = onPanTo;
window.onGetLocs = renderLocs;
window.onGetUserPos = onGetUserPos;


function onInit() {
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
}

// This function provides a Promise API to the callback-based-api of getCurrentPosition
function getPosition() {
  console.log('Getting Pos');
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

//TODO -> renderLocs
function renderLocs() {
  locService.getLocs()
    .then(locs => {
      if (!locs || !locs.length) return
      let strHtml = locs.map(loc => {
        return `<tr>
        <td>${loc.title}</td>
        <td>${loc.lat}</td>
        <td>${loc.lng}</td>
        <td>${loc.createdAt}</td>
        </tr>`
      })
      document.querySelector('.locs-table').innerHTML += strHtml;
      // document.querySelector('.locs').innerText = JSON.stringify(locs)
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