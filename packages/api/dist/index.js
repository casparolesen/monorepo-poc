"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var port = 4000;
app.use(cors_1.default());
app.get('/users', function (req, res) {
    var users = [{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Doe' }];
    res.send(users);
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
