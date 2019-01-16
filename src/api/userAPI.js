//Seems that fetch is built in in a browser!!!
//const fetch = require('node-fetch');

module.exports = {
  getUsers: function () {
    return get('users');
  }
};

function get(url){
  return fetch(url).then(onSuccess, onError);
}

// Promise resolution is abstracted away
function onSuccess(response){
  return response.json();
}

// Promise error handling is abstracted away as well
function onError(error){
  console.log(error); //eslint-disable-line no-console
}
