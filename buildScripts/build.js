const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.prod');
/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. It takes a while...'));
webpack(webpackConfig).run((err, stats) => {
  if (err) { // if a fatal error appears we need to stop here
    console.log(chalk.red(err));
    return 1;
  } else {

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
      return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
      console.log(chalk.yellow('Webpack generated the following warnings: '));
      jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${stats}`);

    //if we got here => we are succeeded.
    console.log(chalk.green('The app has been built successfully for production and written to /dist!'));

    return 0;  // success
  }
});
