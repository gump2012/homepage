/**
 * Created by lishiming on 14-7-17.
 */
var http = require("http");
var url = require("url");
var visitRes = require("./visitRes/visitRes");

exports.start = function (){
    function onRequest(request,response){
        visitRes.visitRes(request,response);
    }

    http.createServer(onRequest).listen(80);
    console.log("home server has started");
}