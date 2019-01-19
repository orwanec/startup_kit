/* eslint-disable no-console */

const schema = require('./mockDataSchema').schema;
const jsf = require('json-schema-faker');
const faker = require('faker');
const fs = require('fs');
const chalk = require('chalk');

//from v0.5.x for json-schema-faker we need to add a piece of code to instanciate faker:
jsf.extend("faker", function() {
  return faker
})

const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./src/api/db.json", json, function(err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(json + "\n" + chalk.green("Mock data generated."));
  }
});

