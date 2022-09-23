export class ControladorHabitacion{

    constructor(){}

    buscarHabitaciones(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":"Aqui van los datos de habitaciones",
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null,
            })
        }
    }

    buscarHabitacionPorId(request,response){
        //response.send("Estoy buscando una habitacion por id desde el controlador")
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":"Aqui van los datos del id",
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null,
            })
        }
    }

    registrarHabitacion(request,response){
        //response.send("Estoy agregando una habitacion desde el controlador")
        try{
            response.status(200).json({
                "mensaje":"Exito agregando una habitacion",
                "datos":null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error agregando una habitacion"+error,
                "datos":null,
            })
        }
    }

    editarHabitacion(request,response){
        //response.send("Estoy editando una habitacion desde el controlador")
        try{
            response.status(200).json({
                "mensaje":"Exito editando una habitacion",
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