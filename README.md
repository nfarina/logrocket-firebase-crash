# LogRocket + Firebase Issues

We've noticed LogRocket generating hundreds of "TypeError: Load Failed" errors in our session recordings for iOS devices. [Here's a link to a sample session](https://app.logrocket.com/kuto/client/s/5-4f1f473a-1624-46e9-84a7-08cd826d0188/2?fromTab=latest&t=1647666564444).

This repo demonstrates the issue as minimally as possible.

# See it Live

I've prebuilt this project and hosted it here on Github Pages.

Grab an iOS device and visit this link in Safari:

  [https://nfarina.github.io/logrocket-firebase-crash/](https://nfarina.github.io/logrocket-firebase-crash/)

It will establish a LogRocket session and establish a long-lived connection to Firestore.

Now turn off your screen, and wait a few seconds (This will cause Firestore's fetch request to be broken). Turn it back on. You'll see "Error: undefined" printed a few times on the page.

Now visit the LogRocket session using the URL provided (I assume you have magic admin access) and you'll see a bunch of these errors:

```
Uncaught (in promise): TypeError: Load failed
Uncaught (in promise): TypeError: Load failed
Uncaught (in promise): TypeError: Load failed
…
```

The number of these messages seems to scale up with the amount of Firestore activity happening. This toy project only reads a single document so it "only" generates a few errors. But our production app generates so much that it trips the "maximum errors per second" limiter in LogRocket.

# Guesses

If you use the Web Inspector on a desktop to connect to Safari on iOS remotely, you'll see a series of "channel" requests in the Network tab that represents Firestore's continuous connection to their servers. They time out after about a minute then reconnect immediately.

What I've noticed is that LogRocket will receive a fetch "response" to a new "channel" request immediately after the connection is established, and it will call `clone().text()` right away. But that Promise doesn't resolve until the channel request terminates. If the request terminates abnormally (i.e. switching off the screen and making Safari go to sleep) then when the device wakes up, "TypeError: Load failed" are printed from unhandled promises…somewhere. I've noticed that simply calling `clone()` on your intercepted fetch response is enough to trigger these errors, even if the rest of the response fiddling is disabled.

# Building Locally

You can clone this project and run `npm run build` to get the hosted example above in the `dist` folder. Then `npm run preview` to host a server you can connect an iOS device to.

If you disable either of the blocks marked out in main.js, the errors will go away. So there is some kind of interaction happening between Firebase and LogRocket.
