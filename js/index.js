//Declaramos variables globales para guardar el tipo de arreglo y el coste
//Aclaracion que las 2 variables comparten indice
var gbl_tipo_arreglo = []
var gbl_coste = []

let bt_agregar = document.getElementById("agregar")
bt_agregar.addEventListener("click", ()=>{
    //selecionamos la tabla de detalles, el tipo de arreglo y el coste
    let tabla = document.getElementById('detalle')
    let tipo_arreglo = document.getElementById('tipo_arreglo').value
    let coste = document.getElementById('coste').value

    //Agrega a la tabla del detalle los gastos
    tabla.innerHTML+=`
    <tr>
        <td>${tipo_arreglo}</td>
        <td>${coste}</td>
    </tr>
    `
    //guardamos en las variable globales el tipo de arreglo y el coste
    gbl_tipo_arreglo.push(tipo_arreglo)
    gbl_coste.push(parseInt(coste))
    
})

///////////////////////////////////////////////

//seleciona el boton calcular y le agrega el evento de "click"
let bt_calcular = document.getElementById("calcular")
bt_calcular.addEventListener("click", ()=>{
    let total = calcularCostes()
    totalFinal(total)
})

/**
 * 1) Funcion para calcular precio de repuestos y precio de mano de obra 
 *       -Hacer uso de las variables globales
 */
function calcularCostes(){
    let repuestos = 0
    let mano = 0

    alert("El total de los repuestos es"+repuestos)
    alert("El total de la mano de obra es"+mano)

    return repuestos+mano
}

/**
 * 2) Funcion para calcular el total del arreglo
 */
function totalFinal(total){
    //trae el dato del tipo de cliente, si es cliente regular y si el presupuesto es para una aseguradora
    let tipo_cliente = document.getElementById('tipo').value
    let cliente_regular = document.querySelector('input[name=cliente]:checked').value
    let aseguradora = document.querySelector('input[name=aseguradora]:checked').value
}