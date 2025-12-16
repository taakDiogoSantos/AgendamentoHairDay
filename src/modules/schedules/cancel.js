import {schedulesDay} from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")


//gera evento de clicka para as listar (manha, tarde e noite)
periods.forEach((periods) => {
    //captura o evento de clique na lista
    periods.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            //obtem a li pai do elemento clicado
            const item = event.target.closest("li")

            //pega o id do agendamento para remover
            const {id} = item.dataset

            //confirma o id nao esta nulo
            if(id) {
                //confirma o cancelamento
                const isConfirmed = confirm("Tem certeza que deseja cancelar este agendamento?")
                
                if(isConfirmed) {
                    //remove da api
                    await scheduleCancel({id})
                    schedulesDay()
                }
            }
        }
})})