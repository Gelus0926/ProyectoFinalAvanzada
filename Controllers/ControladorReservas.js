import {servicioReservas} from '../services/servicioReservas.js'
import {servicioHabitacion} from '../services/servicioHabitacion.js'

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
        let objetoServicioHabitacion=new servicioHabitacion()
        
        console.log(datosReserva);
        try{

            let datosHabitacion = await objetoServicioHabitacion.buscarHabitacionPorId(datosReserva.idHabitacion);
            let maxPerson = datosHabitacion.numeroMaximoPersonas
            let numeroPersonas = datosReserva.numeroNinos+datosReserva.numeroAdultos;
            let entrada = new Date(datosReserva.fechaEntrada);
            let salida = new Date(datosReserva.fechaSalida);
            const diffInDays = Math.floor((salida - entrada) / (1000 * 60 * 60 * 24))+1;
            if(diffInDays>0){

                if(maxPerson>=numeroPersonas){
                    
                    response.status(200).json({
                        "mensaje":"Exito agregando la reserva",
                        "datos":null,
                        "estado":true
                    })
                }else{
                    response.status(400).json({
                        "mensaje":"Error en la reserva"+error,
                        "datos":null,
                        "estado":false
                    })
                }
            }else{
                response.status(400).json({
                    "mensaje":"Error en la reserva"+error,
                    "datos":null,
                    "estado":false
                })
            }

            console.log(datosHabitacion);
            //await objetoServicioReserva.agregarReservaEnBD(datosReserva)
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la reserva"+error,
                "datos":null,
                "estado":false
            })
        }
    }

    async editarReserva(request,response){

        let id=request.params.idReserva
        let datosReserva = request.body
        let objetoServicioReserva=new servicioReservas()

        try{
            //await objetoServicioReserva.editarReserva(id,datosReserva)
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
    async borrarReserva(request,response){

        let id=request.params.idReserva
        let datosReserva = request.body
        let objetoServicioReserva=new servicioReservas()

        try{
            //await objetoServicioReserva.editarReserva(id,datosReserva)
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