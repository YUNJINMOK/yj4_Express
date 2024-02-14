"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.get('/', function (req, res) {
  return res.send({
    name: 'ken'
  });
});
app.listen(3000, function () {
  return console.log("http://localhost:3000");
});