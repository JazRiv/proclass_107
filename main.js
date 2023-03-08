function iniciar(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    reconocimiento = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/a-F2CVvIJ/model.json", modelolisto)
}

function modelolisto(){
    console.log("Ya quede");
    reconocimiento.classify(mostrar_resultado);
}

perro = 0;
gato = 0;
gallo = 0;

function mostrar_resultado(error, resultado){
    if (!error){
        console.log(resultado);
        sonido_det = resultado[0].label;
        document.getElementById("nombre_clase_detec").innerHTML = sonido_det;
        imagen = document.getElementById("imagen")
        if (sonido_det == "Perro"){
            imagen.src = "imagen_perro.jpg";
            perro ++;
        }
        else if (sonido_det == "Gato"){
            imagen.src = "foto_gato.avif";
            gato ++;
        }
        else if (sonido_det == "Gallo"){
            imagen.src = "imagen_gallo.jpg";
            gallo ++;
        }
        else{
            imagen.src = "imagen_1.png";
        }
document.getElementById("numero_detec").innerHTML = "perro:"+ perro + " gato:"+ gato + " gallo:"+ gallo;
    }
}