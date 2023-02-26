"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var data = [1, 2, 3, 4];
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log('this is logging middleware');
    next();
});
app.get('/cats/som', function (req, res, next) {
    console.log('this is som middleware');
    next();
});
app.get('/', function (req, res) {
    console.log('cats');
    res.send({ cats: app_model_1.Cat });
});
app.get('/cats/blue', function (req, res) {
    console.log('blue');
    res.send({ cats: app_model_1.Cat, blue: app_model_1.Cat[0] });
});
app.get('/cats/som', function (req, res) {
    console.log('som');
    res.send({ som: app_model_1.Cat[1] });
});
app.use(function (req, res, next) {
    console.log('this is error middleware');
    res.send({ error: '404 not found error' });
});
app.listen(8000, function () {
    console.log('serve is on...');
});
//# sourceMappingURL=app.js.map