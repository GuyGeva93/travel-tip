import { storageService } from './local-storage.service.js';

export const locService = {
    getLocs,
    addLoc
}

let nextId = 101

const STORAGE_KEY = 'locationsDB';
const locs = storageService.loadFromStorage(STORAGE_KEY) || [];

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

function addLocs(loc) {
    locs.push(loc)
    storageService.saveToStorage(STORAGE_KEY, locs);
    console.log(locs);
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
}


