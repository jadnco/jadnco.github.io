var notWindows = false,
    currentPlatform = navigator.platform,
    platforms  = [
      "MacIntel",
      "iPad",
      "iPhone",
      "iPod"
    ];

for (var i = 0; i < platforms.length; i++) {
  if (currentPlatform === platforms[i]) {
    notWindows = true;
  }
}

if (notWindows) {
  document.getElementsByTagName('body')[0].className += " mac";
}
