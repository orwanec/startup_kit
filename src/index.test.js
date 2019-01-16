const expect = require('chai').expect;
const fs = require('fs');

let jsdom = require('jsdom');
const JSDOM = jsdom.JSDOM;
const document = (new JSDOM(fs.readFileSync('./src/index.html', 'utf-8'))).window.document;
global.document = document;

// let dom = new JSDOM(``, {
//   url: "https://localhost/",
//   referrer: "",
//   contentType: "text/html",
//   includeNodeLocations: true,
//   storageQuota: 10000000
// });
// HTML goes inside ``

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say to Hassan', () => {
    const h1 = document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal('Hi Hassan');
  });

  it('should not say hello', () => {
    const div = document.getElementsByTagName('div')[0];
    expect(div.innerHTML).to.not.have.string('wo123rld');
  });

  //For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
  it('should not say hello', (done) => {
    const div = document.getElementsByTagName('div')[0];
    expect(div.innerHTML).to.have.string('world');
    done();
  });

});
