const meterporteclado = () => {
    const input = document.getElementById("newsletterEmailInput")
    const card = document.getElementById("newsletterCard")
    card.innerHTML = input.value()

}

const calcularCosas = (usuario) => {
    const {anoNac,sueldoBase,plusAnt,plusProd} = usuario
    const edad = new Date(new Date() - new Date(anoNac)).getFullYear() - 1970
    const sueldo = sueldoBase + (sueldoBase * plusProd) / 100 + (sueldoBase * plusAnt) / 100
    console.log(edad,sueldo)
}

const contarCosas = () => {
    let div = document.getElementsByTagName('div').length
    let p = document.getElementsByTagName('p').length
    let a = document.getElementsByTagName('a').length
    console.log(`numero de divs: ${div}, numero de parrafos: ${p}, numero de enlaces ${a}`)

}

const empleados = {
    usuarios : [
        {
            dni: "11111111A",
            anoNac:"04-14-1975",
            fecIng:"06-19-2006",
            plusProd:5,
            plusAnt:0.5,
            sueldoBase:750,
        },
    ]
}

