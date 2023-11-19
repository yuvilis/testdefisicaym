function verificarRespuestas(){
    alert("TUS RESPUESTAS FUERON ENVIADAS")

    var total = 10;
    var puntos = 0;

    var myform = document.forms["testform"]
    var respuestas = ["b","a","c","a","c","c","a","b","b","c"];
    
    for(var i = 1; i <=  total; i++){
         if(myform["p" + i].value === null || myform["p" + i].value === ""){
         alert("VERIFICAR LA PREGUNTA" + i);
         return false; 
    }else{
        if(myform["p" + i].value === respuestas[i - 1]){
            ++puntos;

        }
     }
  }  
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = '<h3>obtuvistes <span>'+ puntos +'</span> de <span>'+ total +' puntos</span></h3>';

    
    return false;
}    



   
