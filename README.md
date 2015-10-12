The Chrome App native messaging example https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/nativeMessaging/host/ 
(and linked to from https://developer.chrome.com/extensions/nativeMessaging) has here been reduced to several alternative  'bare-bone' examples, each using a different Python module.  Note in particular the initial extraction of the message's length for both input and output.  The aim is to produce code that is easily translated to other languages, and that is a good starting point for more complex applications.  

Note: All code was tested on Python 2.7.6, for 'little endian'.  (For 'big endian', pack the returned message's length with the zeros to the left instead).  For transparency, all code currently limits messages to size 0xFF.

----------------------

The following five files are alternatives to the 'native-messaging-example-host' file of the original Google example.  (Note: 'usingDecode' won't work with Python 3.)  Select the one you want to use, 
rename it 'native-messaging-example-host', and replace accordingly:

File usingStruct:  A skeletal version of the original native-messaging-example-host.  

File usingCodecs:  A version of native-messaging-example-host that uses the 'codecs' module.  Additionally, the message is saved to file.

File usingBinascii: A version of native-messaging-example-host that uses the 'binascii' module.

File usingBase64: A version of native-messaging-example-host that uses the 'base64' module. 

File usingDecode: This version is limited to Python 2.

----------------------

Folder 'App': The Google-provided example uses deprecated code.  I have therefore modified manifest.json and created background.js, so the example here is up-to-date.

