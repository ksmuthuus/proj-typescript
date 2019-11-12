"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "http://jsonplaceholder.typicode.com/comments/1";
axios_1["default"].get(url).then(function (res) {
    var comment = res.data;
    console.log("id: " + comment.id + "\nname: " + comment.name + "\nemail:" + comment.email);
});
