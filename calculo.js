

function CalcularAreaTriangulo() {
    let inputTriangulo = document.getElementById("calculoTriangulo")
    inputTriangulo.addEventListener("click", function(){
    let input1 = document.getElementById("numeroUno").disabled = false;
    let input2 = document.getElementById("numeroDos").disabled = false;
    
    let botonCalcular = document.getElementById("botonCalcular")
    botonCalcular.addEventListener("click", function (input1, input2) {
        input1 = document.getElementById("numeroUno").value;
        input2 = document.getElementById("numeroDos").value;
        let baseTriangulo = input1;
        let alturaTriangulo = input2;
        let areaTriangulo;

        if (baseTriangulo != "" && alturaTriangulo != "") {
            let mensaje = document.getElementById("mensaje");
            areaTriangulo =  parseInt(baseTriangulo) * parseInt(alturaTriangulo) / 2;
            mensaje.classList.add("text-primary")
            mensaje.textContent = "El área del triángulo es: " + areaTriangulo;
        } else {
            mensaje.textContent = "Error, alguno de los campos está vacío, intente nuevamente...";
        }

        
    })

})
}
CalcularAreaTriangulo()

function calcularAreaRectangulo() {
    let inputRectangulo = document.getElementById("calculoRectangulo");
    inputRectangulo.addEventListener("click", function(){
    let input1 = document.getElementById("numeroUno").disabled = false;
    let input2 = document.getElementById("numeroDos").disabled = false;
    let botonCalcular = document.getElementById("botonCalcular");
    botonCalcular.addEventListener("click", function (input1, input2) {
        input1 = document.getElementById("numeroUno").value;
        input2 = document.getElementById("numeroDos").value;
        let largoRectangulo = input1;
        let anchoRectangulo = input2;
        let areaRectangulo;

        if (largoRectangulo != "" && anchoRectangulo != "") {
            let mensaje = document.getElementById("mensaje");
            areaRectangulo = parseInt(largoRectangulo) * parseInt(anchoRectangulo);
            mensaje.classList.add("text-primary")
            mensaje.textContent = "El área del Rectángulo es: " + areaRectangulo;
        } else {
            mensaje.textContent = "Error, alguno de los campos está vacío, intente nuevamente...";
        }

        
    })
})
}
calcularAreaRectangulo()

function calcularAreaCirculo() {
    let inputCirculo = document.getElementById("calculoCirculo")
    inputCirculo.addEventListener("click", function(){
    let input1 = document.getElementById("numeroUno").disabled = false;
    let input2 = document.getElementById("numeroDos").disabled = true;
    let botonCalcular = document.getElementById("botonCalcular")
    botonCalcular.addEventListener("click", function (input1) {
        input1 = document.getElementById("numeroUno").value;
        const pi = 3.1415;
        let radioCirculo = input1;
        let areaCirculo;

        if (radioCirculo != "") {
            let mensaje = document.getElementById("mensaje")
            areaCirculo =  pi * (radioCirculo * radioCirculo);
            mensaje.classList.add("text-primary")
            mensaje.textContent = "El área del Círculo es: " + areaCirculo.toFixed(2);
        } else {
            mensaje.textContent = "Por favor llene los campos";
        }

        
    })
})
}
calcularAreaCirculo()