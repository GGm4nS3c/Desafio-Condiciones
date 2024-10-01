const pass1 = Number(911);
const pass2 = Number(714);
const resultado = document.querySelector("#resultado");

ingresarPass.addEventListener("click", function () {
  const digito1 = Number(document.querySelector("#digito1").value);
  const digito2 = Number(document.querySelector("#digito2").value);
  const digito3 = Number(document.querySelector("#digito3").value);
  const inputPass = Number(String(digito1) + String(digito2) + String(digito3));

  if (inputPass === pass1) {
    resultado.innerHTML = "Password 1 correcto";
  } else if (inputPass === pass2) {
    resultado.innerHTML = "Password 2 correcto";
  } else {
    resultado.innerHTML = "Password Incorrecto";
  }
});
