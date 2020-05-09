var url = "http://mylogger.io/log";

function log(message){
    //send httprequest
    console.log(message)
}

//just export the normal log
module.exports.log = log;
//give it a new name
module.exports.endPoint = url;