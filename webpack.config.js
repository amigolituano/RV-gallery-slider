const path = require('path');
module.exports = {
  entry: { main: './src/RV-gallery.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'RV-gallery.min.js'
  }
};