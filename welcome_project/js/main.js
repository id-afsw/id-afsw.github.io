/*
 *  Copyright (c) 2020 The LG Electronics. All Rights Reserved.
*/

var date = new Date();

function run() {
  initialize();
}

function initialize() {
  try {
    setDebugMode()
    log("initialize completed!");   
  }
  catch (e) {
    log("Initialize Error: " + e.message);
  }
}

function log(msg) {
  var logArea = document.getElementById('log_area');
  logArea.innerHTML += ('[' + getTimeStamp() + '] ' + msg + '<br/>');
  scrollToBottom();
}

function clearLogMsg() {
  var logArea = document.getElementById('log_area');
  logArea.innerHTML = "Log Messages Clear<br>";
}

function scrollToBottom() {
  var logContainer = document.getElementById('logContainer');
  logContainer.scrollTop = logContainer.scrollHeight;
}

function setDebugMode() {
  hcap.system.getBrowserDebugMode({
    "onSuccess": function (s) {
      console.log("Success to get browser debug mode" + s.debugMode?"true":"false");
      if (!s.debugMode){
        hcap.system.setBrowserDebugMode({
          "debugMode": true,
          "onSuccess": function () {
            log("#Success to set browser debug mode");
          },
          "onFailure": function (f) {
            log("#Fail to set browser debug mode(errorMessage = " + f.errorMessage + ")");
          }
        });
      }
    },
    "onFailure": function (f) {
      log("#Fail to set browser debug mode(errorMessage = " + f.errorMessage + ")");
    }
  });
}

function getTimeStamp() {
  var result = ("0" + (date.getMonth() + 1)).slice(-2) + '-' +
    ("0" + date.getDate()).slice(-2) + ' ' +
    ("0" + date.getHours()).slice(-2) + ':' +
    ("0" + date.getMinutes()).slice(-2) + ':' +
    ("0" + date.getSeconds()).slice(-2);
  return result;
}

function hideShow(element, status){
  document.getElementById(element).style.display = status;
} 

function reboot(){
  hcap.power.reboot({
      "onSuccess" : function() {
        log("onSuccess");
      }, 
      "onFailure" : function(f) {
        log("onFailure : errorMessage = " + f.errorMessage);
      }
  });
}