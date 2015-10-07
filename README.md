The Chrome App native messaging example https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/nativeMessaging/host/ 
(and linked to from https://developer.chrome.com/extensions/nativeMessaging) has here been reduced to a bare-bones example.  To highlight the key lines of the code, much of the code (e.g. the Python GUI) has been removed, to just leave a few lines that show the communication from the app, to the Python script, 
and back again.  Note in particular the  initial extraction of the message's length for both input and output.  To use this code, replace the original 
native-messaging-example-host with this one, and run the app.  This might aid those whose Python is rusty and wish to proceed in a different language.  

File n-m-e-h-1 is alternative number 1.  This receives a message as before, but Python's struct is NOT used for the return message.  It works for a 'little endian' machine.  For a 'big endian' 
machine it is required to pad the extra zeros before, not after as I have.  This 'lower-level' approach aids understanding.  If you want to run n-m-e-h-1, remember to rename it 'native-messaging-example-host'. 
