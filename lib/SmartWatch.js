var Watch = require('./Watch')
var Tablet = require('./Tablet')

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

function SmartWatch() {
  Watch.call(this)
}


extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);



module.exports = SmartWatch;