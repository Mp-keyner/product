const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const bol = document.querySelectorAll(".fondo");

boton1.onclick = function () {
  console.log("boton1 clicked");
  fondo.style.background = "red";
};
boton2.onclick = function () {
  console.log("boton2 clicked");
};
boton3.onclick = function () {
  console.log("boton3 clicked");
};
boton4.onclick = function () {
  console.log("boton4 clicked");
};
bol.onclick = function () {
  console.log("fondo clicked");
};
