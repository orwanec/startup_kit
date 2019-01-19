module.exports = {
  getBaseUrl: function () {
    const inDevelopment = window.location.hostname === 'localhost';
    console.log(inDevelopment);
    return inDevelopment ? 'http://localhost:3002/' : '/';
  }
};
