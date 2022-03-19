import{i as c,p as d,h as l,G as u,L as s}from"./vendor.5fd0ab31.js";const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};f();const p={apiKey:"AIzaSyA7hx2chhb2uRKmPO3l2nRGN6qmYYGYpK8",authDomain:"farina-game.firebaseapp.com",projectId:"farina-game",storageBucket:"farina-game.appspot.com",messagingSenderId:"552603215269",appId:"1:552603215269:web:bd9c6253eb465234a3344c"};document.querySelector("#app").innerText="Starting\u2026";window.addEventListener("unhandledrejection",o=>{document.querySelector("#errors").innerHTML+=`
    <div>Error: ${o.message}</div>
  `});m();async function m(){var t;let o="",r=null;const a=c(p),i=d(a),e=l(i,"cities","SF");r=await u(e),s.init("hfkxwa/vota-production"),o=await new Promise(n=>s.getSessionURL(n)),document.querySelector("#app").innerHTML=`
    Session URL: <a href="${o}">${o}</a>
    <br/>
    Data:
    <pre>${JSON.stringify((t=r==null?void 0:r.data())!=null?t:{},null,2)}</pre>
    <br/>
    Loaded: ${new Date().toISOString()}
  `}
