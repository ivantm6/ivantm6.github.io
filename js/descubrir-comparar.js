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