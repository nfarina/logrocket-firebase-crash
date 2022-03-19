import LogRocket from "logrocket";
import {initializeApp} from "firebase/app";
import {doc, getDoc, getFirestore} from "firebase/firestore";

// This is a real Firebase project that I use for testing.
const firebaseConfig = {
  apiKey: "AIzaSyA7hx2chhb2uRKmPO3l2nRGN6qmYYGYpK8",
  authDomain: "farina-game.firebaseapp.com",
  projectId: "farina-game",
  storageBucket: "farina-game.appspot.com",
  messagingSenderId: "552603215269",
  appId: "1:552603215269:web:bd9c6253eb465234a3344c"
};

document.querySelector('#app').innerText = `Starting…`

// Render on the page the same repeated errors that we see in the LogRocket
// sessions.
window.addEventListener("unhandledrejection", e => {
  document.querySelector('#errors').innerHTML += `
    <div>Error: ${e.message}</div>
  `;
})

test();

async function test() {
  let url = "";
  let snapshot = null;

  // Initialize Firebase. Comment this out to make the errors go away.
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);  
  const docRef = doc(db, "cities", "SF");
  snapshot = await getDoc(docRef);

  // Initialize LogRocket. Comment this out to make the errors go away.
  LogRocket.init('hfkxwa/vota-production');
  url = await new Promise(resolve => LogRocket.getSessionURL(resolve));

  document.querySelector('#app').innerHTML = `
    Session URL: <a href="${url}">${url}</a>
    <br/>
    Data:
    <pre>${JSON.stringify(snapshot?.data() ?? {}, null, 2)}</pre>
    <br/>
    Loaded: ${new Date().toISOString()}
  `;
}
