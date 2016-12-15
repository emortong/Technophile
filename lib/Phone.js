
function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber;
}

Phone.prototype.callPhone = function(phoneNumber) {
  var message = this.phoneNumber + " calls " + phoneNumber;
  return message;
};

module.exports = Phone;