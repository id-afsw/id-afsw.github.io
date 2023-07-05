var Key = {
  'Number1': hcap.key.Code.NUM_1,
  'Number2': hcap.key.Code.NUM_2,
  'Number3': hcap.key.Code.NUM_3,
  'Number4': hcap.key.Code.NUM_4,
  'Number5': hcap.key.Code.NUM_5,
  'Number6': hcap.key.Code.NUM_6,
  'Number7': hcap.key.Code.NUM_7,
  'Number8': hcap.key.Code.NUM_8,
  'Number9': hcap.key.Code.NUM_9,
  'Number0': hcap.key.Code.NUM_0,
  'Up': hcap.key.Code.UP,
  'Left': hcap.key.Code.LEFT,
  'OK': hcap.key.Code.ENTER,
  'Right': hcap.key.Code.RIGHT,
  'Down': hcap.key.Code.DOWN,
  'Power': hcap.key.Code.POWER,
  'ChannelUp': hcap.key.Code.CH_UP,
  'ChannelDown': hcap.key.Code.CH_DOWN,
  'VolumeUp' : hcap.key.Code.VOL_UP,
  'VolumeDown' : hcap.key.Code.VOL_DOWN,
  'Red': hcap.key.Code.RED,
  'Green': hcap.key.Code.GREEN,
  'Yellow': hcap.key.Code.YELLOW,
  'Blue': hcap.key.Code.BLUE,
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
  'Text': hcap.key.Code.TEXT,
  'Power': hcap.key.Code.POWER,
  'Portal': hcap.key.Code.PORTAL
}

document.addEventListener("keydown", onKeyDown, true);

function onKeyDown(event) {
  console.log("event.keyCode: "+event.keyCode);
  switch (event.keyCode) {
    case Key.Portal:
      window.location.href = "./index.html";
      break;
    default:
      break
  }
}