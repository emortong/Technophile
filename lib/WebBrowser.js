function WebBrowser() {}

WebBrowser.prototype.open = function(url) {
  var message = "Browsing to " + url;
  return message;

};

module.exports = WebBrowser;