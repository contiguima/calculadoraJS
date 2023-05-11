const boton7 = document.getElementById("7");
const boton1 = document.getElementById("1");
const boton2 = document.getElementById("2");
const boton3 = document.getElementById("3");
const boton4 = document.getElementById("4");
const boton5 = document.getElementById("5");
const boton6 = document.getElementById("6");
const boton8 = document.getElementById("8");
const boton9 = document.getElementById("9");
const boton0 = document.getElementById("0");
const screen = document.getElementById("screen");
const clear = document.getElementById("clear");
const equal = document.getElementById("=");
let digitos = [];

boton7.addEventListener("click", consol7);
boton1.addEventListener("click", consol1);
boton2.addEventListener("click", consol2);
boton3.addEventListener("click", consol3);
boton4.addEventListener("click", consol4);
boton5.addEventListener("click", consol5);
boton6.addEventListener("click", consol6);
boton0.addEventListener("click", consol0);
boton8.addEventListener("click", consol8);
boton9.addEventListener("click", consol9);
equal.addEventListener("click", arrayToNumber);
clear.addEventListener("click", clearDigits);

function consol0() {
  if (digitos.length < 16) {
    digitos = screen.innerHTML = digitos + "0";
    return digitos;
  } else {
  }
}
function consol1() {
  if (digitos.length < 16) {
    digitos = screen.innerHTML = digitos + "1";
    return digitos;
  } else {
  }
}
function consol2() {
  if (digitos.length < 16) {
    digitos = screen.innerHTML = digitos + "2";
    return digitos;
  } else {
  }
}
function consol3() {
  if (digitos.length < 16) {
    digitos = screen.innerHTML = digitos + "3";
    return digitos;
  } else {
  }
}
function consol4() {
  if (digitos.length < 16) {
    digitos = screen.innerHTML = digitos + "4";
    return digitos;
  } else {
  }
}
function consol5() {
  if (digitos.length < 16) {
    digitos = screen.innerHTML = digitos + "5";
    return digitos;
  } else {
  }
}
function consol6() {
  if (digitos.length < 16) {
    digitos = screen.innerHTML = digitos + "6";
    return digitos;
  } else {
  }
}
function consol7() {
  if (digitos.length < 16) {
    digitos = screen.innerHTML = digitos + "7";
    return digitos;
  } else {
  }
}
function consol8() {
  if (digitos.length < 16) {
    digitos = screen.innerHTML = digitos + "8";
    return digitos;
  } else {
  }
}
function consol9() {
  if (digitos.length < 16) {
    digitos = screen.innerHTML = digitos + "9";
    console.log(digitos);
  } else {
  }
  return digitos;
}
function clearDigits() {
  digitos = screen.innerHTML = [];
  console.log(digitos + "(Clean screen)");
  return digitos;
}

function arrayToNumber() {
  let num =
    digitos[0] +
    digitos[1] +
    digitos[2] +
    "." +
    digitos[3] +
    digitos[4] +
    digitos[5] +
    "." +
    digitos[6] +
    digitos[7] +
    digitos[8] +
    "." +
    digitos[10] +
    digitos[11] +
    digitos[12] +
    "." +
    digitos[13] +
    digitos[14] +
    digitos[15];
  var value = num.toLocaleString(undefined);
  console.log(value);
  return value;
}
