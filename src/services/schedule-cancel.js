import {apiConfig} from "./api-config.js"

export async function scheduleCancel({id}){
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`,{
            method: "DELETE"
            })
        alert("agendamento cancelado")
    } catch (error) {
        console.log(error);
        alert("nao foi possivel cancelar, contate o administrador do sistema")
        
    }
}