const uJs = document.createElement("u");
uJs.innerText = "Mosses with js";

const spanJs = document.createElement("span");
spanJs.appendChild(uJs);

const h1Js2 = document.createElement("h1");
h1Js2.appendChild(spanJs);

const container3 = document.getElementById("container3");
container3.appendChild(h1Js2);
