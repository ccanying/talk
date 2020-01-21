var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/",function (req,res) {
    res.sendFile(__dirname+"/talk.html")
})
app.listen(3030,function () {
    console.log("服务器已连接")
})