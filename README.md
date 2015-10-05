The Chrome App native messaging example https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/nativeMessaging/host/ 
(and linked to from https://developer.chrome.com/extensions/nativeMessaging) has here been reduced to a bare-bones example.  In an attempt to highlight the key 
lines of the code, much of the code (e.g. the Python GUI) has been removed, to just leave a few lines that show the communication from the app, to the Python script, 
and back again.  The main point to note is the initial extraction of the message's length for both input and output.  To use this code, replace the original 
native-messaging-example-host with this one, and run the app.  This should aid those whose Python is rusty and wish to proceed immediately in Java, for example.  
