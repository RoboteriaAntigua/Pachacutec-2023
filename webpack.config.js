const path = require('path');

const bootstrap_min ="/home/kuark/Escritorio/angular/pachacutec/node_modules/bootstrap/dist/js/bootstrap.min.js";

module.exports = {
  entry: bootstrap_min,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

const main_ts ="/home/kuark/Escritorio/angular/pachacutec/src/main.ts";
