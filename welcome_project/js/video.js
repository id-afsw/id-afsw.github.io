// VARIABLE
var Key = {
  'Rewind': hcap.key.Code.REWIND,
  'Play': hcap.key.Code.PLAY,
  'Pause': hcap.key.Code.PAUSE,
  'Forward': hcap.key.Code.FAST_FORWARD,
  'Stop': hcap.key.Code.STOP,
  'Back': hcap.key.Code.BACK,
  'Menu': hcap.key.Code.MENU,
  'Home': hcap.key.Code.PORTAL,
  'Exit': hcap.key.Code.EXIT,
  'Guide': hcap.key.Code.GUIDE,
  'TV': hcap.key.Code.TV,
  'Info': hcap.key.Code.INFO,
  'Opt': hcap.key.Code.T_OPT,
  'Portal': hcap.key.Code.PORTAL
}
var media = null;

//Event Listener
document.addEventListener("keydown", onKeyDown, true);
document.addEventListener("media_event_received", 
  function (param) {
    console.log("event type = " + param.eventType);
    console.log(media);
  },
false);

function onKeyDown(event) {
  console.log("event.keyCode : "+event.keyCode);
  switch(event.keyCode) {
    case Key.Play:
      console.log("key play");
      media.resume({
        "onSuccess" : function() {
            console.log("onSuccess");
        },
        "onFailure" : function(f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
    });
      break;
    case Key.Pause:
      console.log("Pause");
      media.pause({
        "onSuccess" : function() {
          console.log("onSuccess");
        },
        "onFailure" : function(f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
      })
      break;
    case Key.Forward:
      console.log("Forward");
      media.setPlaySpeed({
        "speed" : 2,
        "onSuccess" : function() {
            console.log("onSuccess");
        },
        "onFailure" : function(f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
      })
      break;
    case Key.Rewind:
      console.log("Rewind");
      media.setPlaySpeed({
        "speed" : 1,
        "onSuccess" : function() {
            console.log("onSuccess");
        },
        "onFailure" : function(f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
      })
      break;
    case Key.Stop:
      console.log("Stop");
      media.stop({
        "onSuccess" : function() {
          console.log("onSuccess");
          media.destroy({
            "onSuccess" : function() {
              console.log("onSuccess");
              hcap.Media.shutDown({
                "onSuccess" : function() {
                  console.log("onSuccess");
                }, 
                "onFailure" : function(f) {
                  console.log("onFailure : errorMessage = " + f.errorMessage);
                }
              });
            }, 
            "onFailure" : function(f) {
              console.log("onFailure : errorMessage = " + f.errorMessage);
            }
          });
        },
        "onFailure" : function(f) {
          console.log("onFailure : errorMessage = " + f.errorMessage);
        }
      });
      hideShow("Container", 'block');
      break;
  }
}



function initVideo(){
  console.log("initial Videos")
  hcap.Media.startUp({
    "onSuccess": function () {
      console.log("onSuccess");
      hideShow("Container", 'none');
      media = hcap.Media.createMedia({
        "url": "http://10.177.33.73:4000/media/avatar.mpg",
        "mimeType": "video/mp4",
        "subtitleUrl": "http://10.177.33.73:4000/media/avatar.smi"
      });
      media.play({
        "repeatCount" : 2,
        "onSuccess" : function() {
            console.log("onSuccess");
        }, 
        "onFailure" : function(f) {
            console.log("onFailure : errorMessage = " + f.errorMessage);
        }
      })
    },  
    "onFailure": function (f) {
        console.log("onFailure : errorMessage = " + f.errorMessage);
    }
  });
}