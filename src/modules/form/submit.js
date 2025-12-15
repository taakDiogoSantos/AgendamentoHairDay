import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual e define a data minima para a atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    //previne o comportamento padrao do formulario (recarregar a pagina)
    event.preventDefault()

    console.log("ENVIADO")

}