Note: All code was tested on Python 2.7.6.  Python 3.x may require  one or two lines to be (hopefully trivially) tweaked. 

The Chrome App native messaging example https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/nativeMessaging/host/ 
(and linked to from https://developer.chrome.com/extensions/nativeMessaging) has here been reduced to a bare-bones example.  To highlight the key lines of the code, much of the code (e.g. the Python GUI) has been removed, to just leave a few lines that show the communication from the app, to the Python script, 
and back again.  Note in particular the  initial extraction of the message's length for both input and output.  To use this code, replace the original 
native-messaging-example-host with this one, and run the app.  

(To run the following alternatives, rename them 'native-messaging-example-host', then replace as before.)

File n-m-e-h-1 is alternative 1.  This receives a message as before, but Python's struct.pack method is NOT used for the return message.  It works for 'little endian'.  For a 'big endian' 
machine it is required to pad the extra zeros to the left. 

File n-m-e-h-2 is alternative 2.  The length of the message from the app is deduced WITHOUT using Python's struct.unpack method.  This is tested for 'little endian'.  For 'big endian', try text_length_bytes[3].  Experiments n-m-e-h-1 and 2  should aid translation in to languages that don't offer struct-like facilities.  Python 3.x users can implement the int.from_bytes() function to turn the byte string to an integer.  This can replace the 'enumerate' line.  
