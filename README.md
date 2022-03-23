# LogRocket + Firebase Issues

We've noticed LogRocket generating hundreds of "TypeError: Load Failed" errors in our session recordings for iOS devices. [Here's a link to a sample session](https://app.logrocket.com/kuto/client/s/5-4f1f473a-1624-46e9-84a7-08cd826d0188/2?fromTab=latest&t=1647666564444).

This repo demonstrates the issue as minimally as possible.

# How to Reproduce

First install deps and build the project:

```sh
npm install
npm run build

# Hosts the web client.
npm run preview

# (In a separate terminal session)
# Hosts the always-hanging server API.
npm run serve
```

Now grab an iOS device and visit `http://(IP of your machine):3020`

It will establish a LogRocket session and kick off a long-lived connection to the local API server (this is how Firestore operates).

Now turn off your screen, and wait a few seconds (This will cause the fetch request to be broken). Turn it back on. You'll see "unhandled rejection" printed a few times on the bottom half of the page.

Now visit the LogRocket session using the URL provided (I assume you have magic admin access) and you'll see a bunch of these errors:

```
Uncaught (in promise): TypeError: Load failed
Uncaught (in promise): TypeError: Load failed
Uncaught (in promise): TypeError: Load failed
…
```

The number of these messages seems to scale up with the amount of Firestore activity happening (in production). This toy project only kicks off one fetch request so it "only" generates a few errors. But our production app generates so much that it trips the "maximum errors per second" limiter in LogRocket.

**NOTE** These errors still occur when LogRocket is told NOT to monitor network requests by passing `{network: {isEnabled: false}}`!

# Guesses

This seems to be a bug in iOS related to `Response.clone()`. When a cloned response dies after receiving some data, it generates these errors no matter what you do with the result of `clone()`. In fact, simply calling `clone()` then doing nothing else is enough to trigger these errors. (You can try it yourself by commenting out everything related to LogRocket in `main.js` then uncommenting the block that calls `clone()`.

If there was an option to just disable LogRocket's capturing of fetch response data via `clone()`, we would use it.