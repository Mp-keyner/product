let selectedButton = null;
const aro = document.getElementById("nomm");
const botom = document.getElementById("botom");
const add = document.querySelector(".add");
const title = document.querySelector(".title");
const mueble = document.getElementById("mueble")

function ko(x, y, z) {
  const element = document.getElementById(x);

  if (selectedButton !== null) {
    selectedButton.style.border = "1px solid transparent";
  }

  element.style.border = `1px solid black`;
  aro.style.background = `${y}`;
  add.style.background = `${y}`;
  title.style.color = `${y}`;
  botom.style.background = `${y}`;
  mueble.src = z
  if (y == "#98926d") {
    botom.style.color = "black";
  } else {
    botom.style.color = "white";
  }
  selectedButton = element;
}
