/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  //numero central
  let num = Math.floor(Math.random() * 14) + 1;
  switch (num) {
    case 11:
      this.document.querySelector("h1").innerHTML = "K";
      break;
    case 12:
      this.document.querySelector("h1").innerHTML = "Q";
      break;
    case 13:
      this.document.querySelector("h1").innerHTML = "J";
      break;
    case 14:
      this.document.querySelector("h1").innerHTML = "A";
      break;
    default:
      this.document.querySelector("h1").innerHTML = num;
      break;
  }

  //signos
  let sign = Math.floor(Math.random() * 4) + 1;
  if (sign == 1) {
    //heart
    let element = this.document.querySelectorAll("p");
    for (let i = 0; i < element.length; i++) {
      element[i].innerHTML = "&hearts;";
      element[i].style.color = "red";
    }
  } else if (sign == 2) {
    //clubs
    this.document.querySelector("#p1").innerHTML = "&clubs;";
    this.document.querySelector("#p2").innerHTML = "&clubs;";
  } else if (sign == 3) {
    //spades
    this.document.querySelector("#p1").innerHTML = "&spades;";
    this.document.querySelector("#p2").innerHTML = "&spades;";
  } else if (sign == 4) {
    //diamonds
    this.document.querySelector("#p1").innerHTML = "&diams;";
    this.document.querySelector("#p2").innerHTML = "&diams;";
  }
}; //cierre windows onload
