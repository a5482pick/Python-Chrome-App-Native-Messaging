Note: All code was tested on Python 2.7.6, for 'little endian'.  For simplicity and transparency, these alterations currently limit messages to size 0xFF.  

The Chrome App native messaging example https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/nativeMessaging/host/ 
(and linked to from https://developer.chrome.com/extensions/nativeMessaging) has here been reduced to a bare-bones example.  To highlight the key lines of the code, much of the code (e.g. the Python GUI) has been removed, to leave only the communication from the app, to the Python script, 
and back again.  Note the initial extraction of the message's length for both input and output.  To use this code, replace the original 
native-messaging-example-host with this one, and run the app.  

File n-m-e-h-1 is an alternative that can be renamed to native-messaging-example-host.  This version shows how to communicate with the app WITHOUT using Python's 
struct.pack and struct.unpack.  This is to aid translation in to other languages.
