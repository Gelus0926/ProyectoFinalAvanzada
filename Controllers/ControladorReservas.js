export class ControladorReservas{

    constructor(){}

    buscarReservas(request,response){

        //response.send("Estoy buscando reservas desde el controlador")
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":"Aqui van los datos de la reserva",
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la reserva"+error,
                "datos":null,
            })
        }
    }

    buscarReservasPorId(request,response){
        let idReserva=request.params.idReserva
        
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta "+idReserva,
                "datos":"Aqui van los datos de habitaciones"
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la reserva"+error,
                "datos":null,
            })
        }
    }

    registrarReversa(request,response){
        
        let datosReserva=request.body
     
        try{
            response.status(200).json({
                "mensaje":"Exito agregando la reserva",
                "datos":datosReserva
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la reserva"+error,
                "datos":null,
            })
        }
    }

    editarReserva(request,response){

        let id=request.params.idReserva
        let datosReserva = request.body
        console.log(id);
        console.log(datosReserva);

        try{
            response.status(200).json({
                "mensaje":"Exito editando la reserva "+id,
                "datos":datosReserva
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la reserva"+error,
                "datos":null,
            })
        }
    }

}