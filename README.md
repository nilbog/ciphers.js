# Ciphers.js

### Description
**_Ciphers.js_** is a series of JavaScript functions that perform some different ciphers

#### What's Included
Name | Function | Arguments
--- | --- | --- |
caesar64 | caesar cipher + base64 encoding | string, integer (shift)
de_caesar64 | base64 decoding + caesar decipher | string, integer (shift)


##Usage
#### _Caesar64_
Caesar64( ) takes a string and an optional integer (shift). If no integer is present, it defaults to a shift of 3.

Currently works with all alphanumeric characters. _(working to include punctuation as well)_

`caesar64('hello world');` returns `"a2hvb3IgenJ1b2c"`

`caesar64('HeLlo woRlD 123');` returns `"S2hPb3IgenJVb0cgNDU2"`

**_using the optional shift argument:_**

`caesar64('hello world', 5);` returns `"bWpxcXQgYnR3cWk"`

`caesar64('HeLlo woRlD 123', 5);` returns `"TWpRcXQgYnRXcUkgNjc4"`

---
#### _De\_Caesar64_
De\_Caesar64( ) takes a string and an optional integer (shift). If no integer is present, it defaults to a shift of 3.

Currently works with all alphanumeric characters. _(working to include punctuation as well)_

`de_caesar64("a2hvb3IgenJ1b2c")` returns `"hello world"`

`de_caesar64("S2hPb3IgenJVb0cgNDU2")` returns `"HeLlo woRlD 123"`

**_using the optional shift argument:_**

`de_caesar64("bWpxcXQgYnR3cWk", 5)` returns `"hello world"`

`de_caesar64("TWpRcXQgYnRXcUkgNjc4", 5)` returns `"HeLlo woRlD 123"`

