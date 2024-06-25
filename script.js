function sortearNumero(){
  
    const valorDeEntradaMin =  Math.ceil(document.querySelector(".input-min").value)
    const valorDeEntradaMax =  Math.floor(document.querySelector(".input-max").value)


    const resultado = Math.floor(Math.random() * (valorDeEntradaMin - valorDeEntradaMax + 1)) + valorDeEntradaMax;

   document.querySelector(".resultado1").innerHTML= resultado
    



}