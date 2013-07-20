#apMessage

> show your messages in popup window.

##How to use

**1)** Include `jquery library` first.

**2)** Include `jquery.apMessages.js` and `jquery.apMessages.css`.

**3)** call apMessage function when you need show a message

For example:

```javascript
apMessage("my message");
```

##Options
**1)** delay: This option can be set by the message will disappear after a few seconds. defult is 5000ms

##How to use Options
when you call apMessage function you can be set options.

For example:
```javascript
apMessage("my message", {
  delay: 1000
});
```
