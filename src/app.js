/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [
    "My dog ",
    "Obelix ",
    "Some biblically accurate angel ",
    "Alexander the great "
  ];
  let action = [
    "cast an overpowered magic card targeting ",
    "Dropped some macarrones con tomatico over ",
    "destroyed in a really creepy way "
  ];
  let what = [
    "my homework ",
    "my excuse generator project ",
    "the present i bought to my granma "
  ];
  let when = [
    "in a non euclidean temporal line ",
    "as a part of a secret operation in the cold war ",
    "tomorrow... mmm ... wait, this is some kind of temporal paradox "
  ];

  let message =
    who[Math.floor(Math.random() * who.length)] +
    action[Math.floor(Math.random() * action.length)] +
    what[Math.floor(Math.random() * what.length)] +
    when[Math.floor(Math.random() * when.length)];

  document.getElementById("text").innerHTML = message;
};
