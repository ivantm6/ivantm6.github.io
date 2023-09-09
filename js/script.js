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

function barajaTarjetas(){
    var resultado;
    resultado = totalTarjetas.sort(function(){
        return 0.5 - Math.random();
    });
    return resultado;
}

function reparteTarjetas(){
    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = barajaTarjetas();
    mesa.innerHTML = "";

    tarjetasBarajadas.forEach(function(elemento, indice){
        var tarjeta = document.createElement("div");
        console.log(totalTarjetas[indice].src);

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/memoria/ivantm6.github.io/images/foto1.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "0" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/memoria/ivantm6.github.io/images/foto2.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "1" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/memoria/ivantm6.github.io/images/foto3.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "2" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/memoria/ivantm6.github.io/images/foto4.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "3" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/memoria/ivantm6.github.io/images/foto5.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "4" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/memoria/ivantm6.github.io/images/foto6.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "5" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/memoria/ivantm6.github.io/images/vivi.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "6" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/memoria/ivantm6.github.io/images/Foto.png"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "7" + "</div>" +
                "</div>" +
                "</div>";
        }
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
    if(tarjetasAComparar[0].textContent === tarjetasAComparar[1].textContent){
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
