function ocultar() {
    /* oculto la oferta */
    document.getElementById("oferta").style.display = "none";

    /* muestro el botón para volver a ver la oferta */
    document.getElementById("ver").style.display = "inline-block";

    /* oculto este botón */
    document.getElementById("ocultar").style.display = "none";

    return;
  }

  function mostrar() {
    document.getElementById("oferta").style.display = "table";

    /* muestro el botón para ocultar la oferta */
    document.getElementById("ocultar").style.display = "inline-block";

    /* oculto este botón */
    document.getElementById("ver").style.display = "none";

    return;
  }