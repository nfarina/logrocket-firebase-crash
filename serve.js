const express = require('express');
const Readable = require('stream').Readable;
const app = express();
const port = 3020;

app.get('/', (req, res) => {
  // Send the header to the client, then nothing else.
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*"
  });

  // Stream a little bit of response data…
  const stream = new Readable({ read(size) {} });
  stream.push("Hello...");
  stream.pipe(res);

  // …then just hang forever.

  // setTimeout(() => {
  //   stream.push(" World!");
  //   stream.push(null);
  // }, 2000);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})