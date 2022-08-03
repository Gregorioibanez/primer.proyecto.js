

function seleccion() {
    let producto1 = "medio kilo de felicidad"
    let producto2 = "kilo de felicidad"
    let producto = confirm("Elige entre los siguientes productos: Medio kilo de felicidad, kilo de felicidad", producto1, producto2)
    let eleccion = prompt("Indica que producto quiere: medio kilo de felicidad, kilo de felicidad ")
    console.log("$ ", presupuesto (producto1,producto2, eleccion))
}


function presupuesto(prod1, prod2, valor ) {
    switch (valor) {
        case "medio kilo de felicidad":
            return 300
            break
        case "kilo de felicidad":
            return 500
            break
        default:
            return "No tenemos ese producto"
    }

}
seleccion()

