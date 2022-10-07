import { servicioReservas } from '../services/servicioReservas.js'

export class ControladorReservas{

    constructor(){}

    async buscarReservas(request,response){

        let objetoServicioReserva=new servicioReservas()

        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":await objetoServicioReserva.buscarReservas(),
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la reserva"+error,
                "datos":null,
            })
        }
    }

    async buscarReservasPorId(request,response){
        let idReserva=request.params.idReserva
        let objetoServicioReserva=new servicioReservas()

        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta "+idReserva,
                "datos":await objetoServicioReserva.buscarReservasPorId(idReserva)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la reserva"+error,
                "datos":null,
            })
        }
    }

    async registrarReversa(request,response){
        
        let datosReserva=request.body
        let objetoServicioReserva=new servicioReservas()
        
        try{
            await objetoServicioReserva.agregarReservaEnBD(datosReserva)
            response.status(200).json({
                "mensaje":"Exito agregando la reserva",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la reserva"+error,
                "datos":null,
            })
        }
    }

    async editarReserva(request,response){

        let id=request.params.idReserva
        let datosReserva = request.body
        let objetoServicioReserva=new servicioReservas()

        try{
            await objetoServicioReserva.editarReserva(id,datosReserva)
            response.status(200).json({
                "mensaje":"Exito editando la reserva "+id,
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la reserva"+error,
                "datos":null,
            })
        }
    }

}