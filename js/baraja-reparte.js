function barajaTarjetas(){
    var resultado;
    resultado = totalTarjetas.sort(function(){
        return 0.5 - Math.random();
    });
    return resultado;
}

function reparteTarjetas() {
    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = barajaTarjetas();
    mesa.innerHTML = "";
  
    tarjetasBarajadas.forEach(function(elemento, indice) {
      var tarjeta = document.createElement("div");
  
      tarjeta.innerHTML =
        "<div class='tarjeta' data-valor= " + 
        totalTarjetas[indice].getAttribute('codigo') +
        ">" +
        "<div class='tarjeta__contenido'>" + 
        "<img src=" + totalTarjetas[indice].src + ">" +
        "<div class = 'soluciones'>" + "0" + "</div>" +
        "</div>" +
        "</div>";
  
      mesa.appendChild(tarjeta);
    });
  }