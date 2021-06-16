export const storageService = {
<<<<<<< HEAD
    loadFromStorage,
    saveToStorage
=======
  loadFromStorage,
  saveToStorage
>>>>>>> ed2b30deab1befc2ad022f1e758c3843c13a11ff
}


function loadFromStorage(key) {
<<<<<<< HEAD
    var json = localStorage.getItem(key);
    var data = JSON.parse(json);
    return data;
}

function saveToStorage(key, data) {
    var json = JSON.stringify(data);
    localStorage.setItem(key, json);
=======
  var json = localStorage.getItem(key);
  var data = JSON.parse(json);
  return data;
}

function saveToStorage(key, data) {
  var json = JSON.stringify(data);
  localStorage.setItem(key, json);
>>>>>>> ed2b30deab1befc2ad022f1e758c3843c13a11ff
}