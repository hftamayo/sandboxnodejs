//leccion 73: adding rootDirectory component to short absolute refs
const path = require('path');
module.exports = path.dirname(process.mainModule.filename);
