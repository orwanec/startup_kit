// file that points to either mock API or the real API (served by Xpress)
module.exports = {
  getBaseUrl: function () {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3002/' : '/';
  }
};

/* eslint-disable no-useless-escape */
function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

