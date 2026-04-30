function lanzarDados(){
    

    var aletorio = Math.random()
    var dado = Math.floor(1 + aleat * 6)

    let ash_resultado = document.getElementById(ash_resultado).value

    ash_resultado.textContent = "<img src='./imagenes/dados/"+dado+".jpg'>"

    let pokemon = document.getElementById(cuadro)

    

}