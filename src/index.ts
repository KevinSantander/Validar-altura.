let btnSend = document.getElementById("send");
//rotulo.innerHTML = "Ingrese su altura: ";

btnSend?.addEventListener("click", () => {
  let alturaPermitida: number = 1.3;
  let alturaPersona: number = dato.value;

  if (alturaPersona <= alturaPermitida) {
    console.log("Usted no cumple con la altura permitida para el juego");
  } else {
    console.log("usted si cumple con la altura permitida para el juego");
  }
});
