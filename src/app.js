/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function randomUrl() {
  const pronoun = ["the", "our", "this"];
  const adj = ["great", "big", "fantastic"];
  const noun = ["jogger", "lion", "cat", "dog"];

  function randomNames() {
    const randompronoun = Math.floor(Math.random() * pronoun.length);
    const randomadj = Math.floor(Math.random() * adj.length);
    const randomnoun = Math.floor(Math.random() * noun.length);
    const prValue = pronoun[randompronoun];
    const aValue = adj[randomadj];
    const nValue = noun[randomnoun];

    const firstpart = document.querySelector(".firstpart");
    firstpart.innerHTML = `<span = "firstpart">${prValue}${aValue}${nValue}</span>`;
    // const secondpart = document.querySelector(".secondpart");
    // secondpart.innerHTML = `<span = "second">${aValue} </span>`;
    // const thirdpart = document.querySelector(".thirdpart");
    // thirdpart.innerHTML = `<span = "thirdpart">${nValue} </span>`;
  }

  randomNames();
};
