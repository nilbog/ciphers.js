# Ciphers.js

### Description
**_Ciphers.js_** is a series of jQuery-based functions that perform some different ciphers

#### What's Included
Name | Function | Arguments
--- | --- | --- |
caesar64 | caesar cipher + base64 encoding | string, integer (shift)
de_caesar64 | base64 decoding + caesar decipher | string, integer (shift)


##Usage
#### *_Caesar64_*
Caesar64() takes a string and an optional integer (shift). If no integer is present, it defaults to 3.
Currently works with all alphanumeric characters.
_working to include punctuation as well_

`caesar64('hello world');` returns `"a2hvb3IgenJ1b2c="`
`caesar64('HeLlo woRlD');` returns `"S2hPb3IgenJVb0c="`

*_using the optional shift argument_*
`caesar64('hello world', 5);` returns `"bWpxcXQgYnR3cWk="`
