


function precio() {

    var categoria = parseInt(document.getElementById("categoria").value) ;
    var cantidad = parseInt(document.getElementById("cantidad").value)
    var precio = 200;
    var des1 = 0.80;
    var des2 = 0.50;
    var des3 = 0.15;
    var descuento
    var preciosinD
    var final 


    if (categoria == 1){

    preciosinD= cantidad * precio;

   descuento = preciosinD * des1;

    final = preciosinD - descuento;

    


    } else if(categoria == 2){

        preciosinD = cantidad * precio;

        descuento = preciosinD * des2;


        final = preciosinD - descuento;
    
        
    

    } else if(categoria == 3){

        preciosinD = cantidad * precio;

        descuento = preciosinD * des3;

        final = preciosinD - descuento;

     }


     return document.getElementById("Preciofinal").innerHTML = final ;


   
}


 