export class ControladorReservas{

    constructor(){}

    
    buscarReservas(request,response){

        response.send("Estoy buscando reservas desde el controlador")

    }

    buscarReservasPorId(request,response){
        response.send("Estoy buscando una reserva por id desde el controlador")
    }

    registrarReversa(request,response){
        response.send("Estoy agregando una reserva desde el controlador")
    }

    editarReserva(request,response){
        response.send("Estoy editando una reserva desde el controlador")
    }






}