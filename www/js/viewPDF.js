// JavaScript Document
cordova.exec(function(winParam) {}, function(error) {}, "service",
             "action", ["firstArgument", "secondArgument", 42,
             false]);
			 
window.viewPDF = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "Echo", "echo", [str]);
};
