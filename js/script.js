var grupoTarjetas = new Array();

grupoTarjetas[0] = new Image();
grupoTarjetas[0].src = './images/vivi.jpg';

grupoTarjetas[1] = new Image();
grupoTarjetas[1].src = './images/Foto.png';

grupoTarjetas[2] = new Image();
grupoTarjetas[2].src = './images/foto1.jpg';

grupoTarjetas[3] = new Image();
grupoTarjetas[3].src = './images/foto2.jpg';

grupoTarjetas[4] = new Image();
grupoTarjetas[4].src = './images/foto3.jpg';

grupoTarjetas[5] = new Image();
grupoTarjetas[5].src = './images/foto4.jpg';

grupoTarjetas[6] = new Image();
grupoTarjetas[6].src = './images/foto5.jpg';

grupoTarjetas[7] = new Image();
grupoTarjetas[7].src = './images/foto6.jpg';

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

totalTarjetas[0].setAttribute("codigo", "0");
totalTarjetas[1].setAttribute("codigo", "1");
totalTarjetas[2].setAttribute("codigo", "2");
totalTarjetas[3].setAttribute("codigo", "3");
totalTarjetas[4].setAttribute("codigo", "4");
totalTarjetas[5].setAttribute("codigo", "5");
totalTarjetas[6].setAttribute("codigo", "6");
totalTarjetas[7].setAttribute("codigo", "7");
totalTarjetas[0].setAttribute("codigo", "0");
totalTarjetas[1].setAttribute("codigo", "1");
totalTarjetas[2].setAttribute("codigo", "2");
totalTarjetas[3].setAttribute("codigo", "3");
totalTarjetas[4].setAttribute("codigo", "4");
totalTarjetas[5].setAttribute("codigo", "5");
totalTarjetas[6].setAttribute("codigo", "6");
totalTarjetas[7].setAttribute("codigo", "7");

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

function descubrir(){
    var descubiertas;
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    
    if(totalDescubiertas.length > 1){
        return;
    }

    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if(descubiertas.length < 2){
        return;
    }   
    comparar(descubiertas);
}

function comparar(tarjetasAComparar){
    if(tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor){
        acierto(tarjetasAComparar);
    }else {
        error(tarjetasAComparar);
    }
}

function acierto(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
        elemento.classList.add("acertada");
    });
}

function error(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
        elemento.classList.add("error");
    });

    setTimeout(function(){
        lasTarjetas.forEach(function(elemento){
            elemento.classList.remove("descubierta");
            elemento.classList.remove("error");
        });
    }, 1000);
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento){
    elemento.addEventListener("click", descubrir);
});
