chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    'alwaysOnTop' : true,
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});
