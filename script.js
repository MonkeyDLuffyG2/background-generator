let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomButton = document.querySelector("#random");

console.log(css);
console.log(color1);
console.log(color2);

function changeGradientColor() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  randomButton.style.background =
    "linear-gradient(to right, " + color2.value + ", " + color1.value + ")";
  css.textContent = body.style.background + ";";
}

function randomRGBColorGenerator() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + "," + "0.5)";
}

function randomHexColorGenerator() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}

//First function before I added a random button at the html file
// function randomButton() {
//   let random = document.createElement("button");
//   random.className = "random";
//   random.appendChild(document.createTextNode("Randomize Gradient"));
//   random.style.background =
//     "linear-gradient(to right, " + color2.value + ", " + color1.value + ")";
//   random.style.margin = "10px auto";
//   css.appendChild(random);
//   random.onclick = function () {
//     console.log("Does this register my clicks");
//     color1.value = randomHexColorGenerator();
//     color2.value = randomHexColorGenerator();
//     changeGradientColor();
//   };
// }

function randomizeGradient() {
  color1.value = randomHexColorGenerator();
  color2.value = randomHexColorGenerator();
  changeGradientColor();
  randomButton.style.background =
    "linear-gradient(to right, " + color2.value + ", " + color1.value + ")";
}

function loadingPage() {
  changeGradientColor();
  randomButton.style.background =
    "linear-gradient(to right, " + color2.value + ", " + color1.value + ")";
  css.style.display = "flex";
  css.style.flexFlow = "column wrap";
  css.style.alignItems = "center";
}

window.addEventListener("DOMContentLoaded", loadingPage);

color1.addEventListener("input", changeGradientColor);
color2.addEventListener("input", changeGradientColor);
randomButton.addEventListener("click", randomizeGradient);
