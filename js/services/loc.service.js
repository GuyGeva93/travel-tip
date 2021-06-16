import { storageService } from './local-storage.service.js';

export const locService = {
    getLocs,
    addLoc
<<<<<<< HEAD
}

let nextId = 101
const STORAGE_KEY = 'locationsDB';

function addLoc(title, lat, lng) {
    let loc = {
        id: _makeId(),
        title,
        lat,
        lng,
        createdAt: Date.now()
    }
    addLocs(loc)
}

=======
}

let nextId = 101
const STORAGE_KEY = 'locationsDB';

function addLoc(title, lat, lng) {
    let loc = {
        id: _makeId(),
        title,
        lat,
        lng,
        createdAt: Date.now()
    }
    addLocs(loc)
}

>>>>>>> ed2b30deab1befc2ad022f1e758c3843c13a11ff
const locs = []

function addLocs(loc) {
    locs.push(loc)
    storageService.saveToStorage(STORAGE_KEY, locs);
}


function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

function _makeId() {
    return nextId++;
<<<<<<< HEAD
}
=======
}


>>>>>>> ed2b30deab1befc2ad022f1e758c3843c13a11ff
