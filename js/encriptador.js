var btnEncriptar = document.getElementById('btnEncriptar');
var btnDesencriptar = document.getElementById('btnDesencriptar');
var btnCopiar = document.getElementById('btnCopiar');
var salida = document.getElementById("valueInput");
setInterval(tamanoPantalla, 1000);

var contador = 0;


function tamanoPantalla(){
    var pantallaWidth = screen.width;
    let contenedorTexto = document.getElementById("contenedorTexto");
    if(pantallaWidth < 400){
        contenedorTexto.style.display = "block";
        document.getElementById("contenedorEntrada").style.width = "100%";
        document.getElementById("contenedorSalida").style.width = "100%";
        document.getElementById("contenedorSalida").style.marginLeft = "0";
        document.getElementById("contenedorSalida").style.marginTop = "1rem";
    }
    else{
        contenedorTexto.style.display = "flex";
        document.getElementById("contenedorEntrada").style.width = "70%";
        document.getElementById("contenedorSalida").style.width = "30%";
        document.getElementById("contenedorSalida").style.marginLeft = "2rem";
        document.getElementById("contenedorSalida").style.marginTop = "0";
    }

}

function encriptar(){
    let entrada = document.getElementById("entrada").value;
    if (entrada != ""){
        var encriptadorVocales = entrada.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        salida.style.background = "white";
        salida.style.overflowY = "scroll"; 
        salida.innerHTML=encriptadorVocales;
        btnCopiar.style.visibility = "visible"; 
        document.getElementById("entrada").focus();
    }
    else{
        salida.style.background = ("white");
        salida.innerHTML= ("Ingrese texto a encriptar");
        document.getElementById("entrada").focus();
    }
}

function desencriptar(){
    let entrada = document.getElementById("entrada").value;
    if (entrada != ""){
        var desencriptarVocales = entrada.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
        salida.style.background = "white";
        salida.style.overflowY = "scroll"; 
        salida.innerHTML=desencriptarVocales;      
        btnCopiar.style.visibility = "visible";
        document.getElementById("entrada").focus();           
    }
    else{
        salida.style.background = ("white");
        salida.innerHTML= ("Ingrese texto a desencriptar");
        document.getElementById("entrada").focus();
    }
    
}

function copiarTexto(){
    var content = document.getElementById('valueInput').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        alert("Texto copiado");
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })

}

btnCopiar.style.visibility = "hidden";
btnEncriptar.addEventListener('click',encriptar,true);
btnDesencriptar.addEventListener('click',desencriptar,true);
btnCopiar.addEventListener('click',copiarTexto,true);

