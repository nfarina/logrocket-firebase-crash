# LogRocket + Firebase Issues

We've noticed LogRocket generating hundreds of "TypeError: Load Failed" errors in our session recordings for iOS devices.

This repo demonstrates the issue as minimally as possible.

# See it Live

I've prebuilt this project and hosted it here on Github Pages.

Grab an iOS device and visit this link in Safari:

  [https://nfarina.github.io/logrocket-firebase-crash/](https://nfarina.github.io/logrocket-firebase-crash/)

It will establish a LogRocket session and read some data from Firestore.

Now turn off your screen, and wait a few seconds. Turn it back on. Do this one more time if needed. After at most 2 times, you'll see "Error: undefined" printed a few times on the page.

Now visit the LogRocket session using the URL provided (I assume you have magic admin access) and you'll see a bunch of "TypeError: Load Failed" messages.

The number of these messages seems to scale up with the amount of Firestore activity happening. This toy project only reads a single document so it "only" generates a few errors. But our production app generates so much that it trips the "maximum errors per second" limiter in LogRocket.

# "Workaround"

If you disable either of the blocks marked out in main.js, the errors will go away. So there is some kind of interaction happening between Firebase and LogRocket.

I've tried debugging this myself but both LR and Firebase code is minified so it's difficult to pin down.