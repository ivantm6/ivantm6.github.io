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

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/Memoria/images/foto1.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "0" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/Memoria/images/foto2.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "1" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/Memoria/images/foto3.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "2" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/Memoria/images/foto4.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "3" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/Memoria/images/foto5.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "4" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/Memoria/images/foto6.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "5" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/Memoria/images/vivi.jpg"){
            tarjeta.innerHTML =
                "<div class='tarjeta'>" +
                "<div class='tarjeta__contenido'>" + 
                "<img src=" + totalTarjetas[indice].src + ">" +
                "<div class = 'soluciones'>" + "6" + "</div>" +
                "</div>" +
                "</div>";
        }

        if(totalTarjetas[indice].src === "file:///C:/Users/ivant/Desktop/Memoria/images/Foto.png"){
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