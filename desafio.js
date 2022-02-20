


alert(`           ¡BIENVENIDO!\n\n ---> MAQUINAS JUAN  <---`)

alert("               ----****Maquinas disponibles**** ----\n\n  <--Rotomartillo.  \n\n  <-- Mezcladora de Concreto.\n\n  <-- Vibradora de Concreto.")


let contador = 0
// Son número fijos...
const rotomartillo = 500
const MezcladoraConcreto = 600
const VibradoraConcreto = 1000

//Función...
function multi(a, b) {
    return a * b
}
while (contador != 3) {

    let rot_horas = prompt("1.Rotomartillo = 500 Pesos ¿Ingrese las horas de alquiler?")
    let mezcla_horas = prompt("2.Mezcladora de Concreto = 600 Pesos ¿Ingrese las horas de alquiler?")
    let vibra_horas = prompt("3.Vibradora de Concreto = 1000 Pesos ¿Ingrese las horas de alquiler?")

    if (rot_horas >= 1 && mezcla_horas >= 1 && vibra_horas >= 1) {

        let resultado1 = multi(rotomartillo, rot_horas);
        let resultado2 = multi(MezcladoraConcreto, mezcla_horas);
        let resultado3 = multi(VibradoraConcreto, vibra_horas);
        let total = resultado1 + resultado2 + resultado3

        alert(`\n         DETALLES\n         -----------\n\n -Rotomartillo = $${resultado1}\n -Mezcladora de Concreto = $${resultado2} \n -Vibradora de Concreto = $${resultado3}\n\n   ***TOTAL A PAGAR : $${total}*** `)
        break

    } else if ((rot_horas == 0 || rot_horas == "") && mezcla_horas >= 1 && vibra_horas >= 1) {

        let resultado2 = multi(MezcladoraConcreto, mezcla_horas);
        let resultado3 = multi(VibradoraConcreto, vibra_horas);
        let total = resultado2 + resultado3

        alert(`\n         DETALLES\n         -----------\n\n -Mezcladora de Concreto = $${resultado2} \n -Vibradora de Concreto = $${resultado3}\n\n   ***TOTAL A PAGAR : $${total}*** `)
        break

    } else if (rot_horas >= 1 && (mezcla_horas == 0 || mezcla_horas == "") && vibra_horas >= 1) {
        let resultado1 = multi(rotomartillo, rot_horas);
        let resultado3 = multi(VibradoraConcreto, vibra_horas);
        let total = resultado1 + resultado3

        alert(`\n         DETALLES\n         -----------\n\n -Rotomartillo = $${resultado1}\n -Vibradora de Concreto = $${resultado3}\n\n   ***TOTAL A PAGAR : $${total}*** `)
        break

    } else if (rot_horas >= 1 && mezcla_horas >= 1 && (vibra_horas == 0 || vibra_horas == "")) {
        let resultado1 = multi(rotomartillo, rot_horas);
        let resultado2 = multi(MezcladoraConcreto, mezcla_horas);
        let total = resultado1 + resultado2

        alert(`\n         DETALLES\n         -----------\n\n -Rotomartillo = $${resultado1}\n -Mezcladora de Concreto = $${resultado2}\n\n   ***TOTAL A PAGAR : $${total}*** `)

    } else {
        alert(`        ¡¡¡ERROR!!!\n\n Algún dato no es correcto, solo puede ingresar números o dejar el espacio vació.\n\n        "Vuelva a Intentarlo..."`)

        contador++
        if (contador == 3) {
            alert("demasiados intentos...Lea bien lo sugerido.")
            alert("¡Empecemos nuevo!")
            location.reload()
        }
    }
}