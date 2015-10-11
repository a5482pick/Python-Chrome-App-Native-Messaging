The Chrome App native messaging example https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/nativeMessaging/host/ 
(and linked to from https://developer.chrome.com/extensions/nativeMessaging) has here been reduced to several alternative  'bare-bone' examples.  To highlight the key lines of the code, much of the code (e.g. the Python GUI) has been removed, to leave only the communication from the app, to the Python script, 
and back again.  Note the initial extraction of the message's length for both input and output.  

Note: All code was tested on Python 2.7.6, for 'little endian'.  (For 'big endian', pack the returned message's length with the zeros to the left instead).  For simplicity and transparency, all code currently limits messages to size 0xFF.

The following five files are five alternatives to the 'native-messaging-example-host' file of the original Google example.  Select the one you want to use, 
rename it 'native-messaging-example-host', and replace accordingly:

File native-messaging-example-host:  A skeletal version of the original example.  

File n-m-e-h-1:  Communicates with the app WITHOUT using Python's struct.pack and struct.unpack.  This aids translation in to other languages.

File n-m-e-h-1b: Decodes using the 'binascii' module.  (Works in Python 2 and 3.)

File n-m-e-h-1c: Decodes with decode('hex').  (Works in Python 2 only.)

File n-m-e-h-1d: Decodes using the base64 module.  (Works in Python 2 and Python 3.)



Folder 'App': The Google-provided example uses deprecated code.  I have therefore modified manifest.json and created background.js, so the example here is up-to-date.

saveAppMessageToFile: A simple program to clarify that the message from the App may be saved.
