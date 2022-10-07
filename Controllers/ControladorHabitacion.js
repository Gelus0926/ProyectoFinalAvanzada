//RECIBIR PETICIONES, LOGICA DE NEGOCIO Y ENVIO DE RESPUESTAS
import {servicioHabitacion} from '../services/servicioHabitacion.js'
//los puntos no son iguales que las comas ej : "." ","

export class ControladorHabitacion{

    constructor(){}

    async buscarHabitaciones(request,response){

        let objetoServicioHabitacion=new servicioHabitacion()

        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":await objetoServicioHabitacion.buscarHabitaciones(),
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null,
            })
        }
    }

    async buscarHabitacionPorId(request,response){
    //response.send("Estoy buscando una habitacion por id desde el controlador")
        let idHabitacion=request.params.idHabitacion //Recibo id de la peticion
        let objetoServicioHabitacion=new servicioHabitacion()

        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta "+idHabitacion,
                "datos":await objetoServicioHabitacion.buscarHabitacionPorId(idHabitacion)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null,
            })
        }
    }

     async registrarHabitacion(request,response){
        //response.send("Estoy agregando una habitacion desde el controlador")

        let datosHabitacion=request.body
        let objetoServicioHabitacion=new servicioHabitacion()
        
        try{
            await objetoServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)
            response.status(200).json({
                "mensaje":"Exito agregando una habitacion",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error agregando una habitacion"+error,
                "datos":null
            })
        }
    }

    async editarHabitacion(request,response){
        //response.send("Estoy editando una habitacion desde el controlador")

        let id=request.params.idHabitacion
        let datosHabitacion =request.body
        let objetoServicioHabitacion=new servicioHabitacion()

        try{
            await objetoServicioHabitacion.editarHabitacion(id,datosHabitacion)
            response.status(200).json({
                "mensaje":"Exito editando una habitacion "+id,
                "datos":null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null,
            })
        }
    }
}