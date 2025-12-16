import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual e define a data minima para a atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    //previne o comportamento padrao do formulario (recarregar a pagina)
    event.preventDefault()

    try{
        //recuperando o nome do cliente
        const name = clientName.value.trim()

        if(!name){
            return alert("Informe o nome do cliente")
        }
        //recupera o horario selecionado
        const hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected){
            return alert("Selecione um horario")
        }

        //recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")

        //insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        //gera um ID
        const id = new Date().getTime()

        await scheduleNew({id, name,when})

    } catch(error){
        alert("Não foi possivel realizar o agendamento")
        console.log(error);
        
    }

}