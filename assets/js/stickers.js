enviarCantidadSticker.addEventListener("click", function () {
  const cantidadStickers1 = Number(
    document.querySelector("#cantidadStickers1").value
  );
  const cantidadStickers2 = Number(
    document.querySelector("#cantidadStickers2").value
  );
  const cantidadStickers3 = Number(
    document.querySelector("#cantidadStickers3").value
  );
  let totalCantidadStikers =
    cantidadStickers1 + cantidadStickers2 + cantidadStickers3;
  alert(totalCantidadStikers);
  const ticketsSpan = document.querySelector("#ticketSpan");

  if ((totalCantidadStikers <= 10) && (totalCantidadStikers > 0 ) ) {
    ticketsSpan.innerHTML = "LLevas "  + totalCantidadStikers + " Stickers"
  }
  else if (totalCantidadStikers > 10){
     ticketsSpan.innerHTML = "Llevas demasiados stickers"
  }
  else{
    ticketsSpan.innerHTML = totalCantidadStikers + " " + "No es una cifra correcta"
  }
});
