/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our", "your", "weedle", "biggie"];
  var adj = ["great", "big", "others", "pipe"];
  var noun = ["jogger", "racoon", "kali", "malvin"];
  var dom = [".com", ".es", ".net", ".org"];

  let sentence =
    pronoun[numAle(pronoun.length)] +
    adj[numAle(adj.length)] +
    noun[numAle(noun.length)] +
    dom[numAle(dom.length)];

  let excuse = document.querySelector("#p-domain");
  excuse.innerHTML = sentence;
};

function numAle(length) {
  let number = Math.floor(Math.random() * length);
  return number;
}
