// Simply calling init() is enough to enable the fetch() interception which
// triggers the iOS webkit bug - even though network.isEnabled is false!
import LogRocket from "logrocket";
LogRocket.init("hfkxwa/vota-production", { network: { isEnabled: false } });

// Render on the page the same repeated errors that we see in the LogRocket
// sessions.
window.addEventListener("unhandledrejection", (e) =>
  logError("Unhandled Rejection", e.message ?? "")
);

// Run the test.
async function test() {
  let response, text;

  // You need to run `npm run serve` first.
  log("Begin Fetch…");
  const request = fetch(`http://${location.hostname}:3020`);

  // This should succeed immediately since the server writes the response
  // headers plus a little bit of data before hanging forever.
  try {
    response = await request;
  } catch (error) {
    log("Error awaiting response:", error.message);
    return;
  }

  log("Response:", response?.status || "None");

  // Uncomment this block to reproduce the error without LogRocket being
  // involved (you can comment out the two LogRocket lines above).
  //
  // const cloned = response.clone();
  // log("Cloned response");
  // try {
  //   const text2 = await cloned.text();
  //   log("Cloned text:", text2);
  // } catch (error) {
  //   log("Error awaiting cloned text:", error);
  // }

  // This will hang forever, or until you turn off the screen on your iOS
  // device and wait a few seconds.
  try {
    text = await response.text();
  } catch (error) {
    log("Error awaiting text:", error.message);
  }

  log("Text:", text);
}

// Basic on-page logging.

function logTo(sel, ...text) {
  document.querySelector(sel).innerHTML +=
    text.map((t) => String(t)).join(" ") + "<br/>";
}

const log = (...text) => logTo("#logs", ...text);
const logError = (...text) => logTo("#errors", ...text);

// Run the test.

test();
