#apMessage

> show your messages in popup window.

##How to use

**1)** Include `jquery library` first.

**2)** Include `jquery.apMessages.js` or `jquery.apMessages_min.js`  and `jquery.apMessages.css`.

**3)** Call apMessage function when you need show a message

For example:

```javascript
apMessage("my message");
```

##Options
**1)** delay: This option can be set by the message will disappear after a few seconds. defult is 5000ms

**2)** in_animate: animate functions when message comes.

```
function list: fade_in[defualt], from_right, from_left
```
       
**3)** out_animate: animate functions when message ends.

```
function list: fade_out[defualt], from_right, from_left
```

##How to use Options
When you call apMessage function you can be set options.

For example:
```javascript
apMessage("my message", {
  delay: 1000,
  in_animate: 'from_right'
});
```
