import express from 'express'
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../Controllers/ControladorReservas.js'
let controladorHabitacion=new ControladorHabitacion()//Usando el controlador
let controladorReservas=new ControladorReservas()

export let rutas=express.Router()

rutas.get('/hotelesgelus/habitaciones',controladorHabitacion.buscarHabitaciones)
rutas.get('/hotelesgelus/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)
rutas.post('/hotelesgelus/habitacion', controladorHabitacion.registrarHabitacion)
rutas.put('/hotelesgelus/habitacion',controladorHabitacion.editarHabitacion)

rutas.get('/hotelesgelus/reservas',controladorReservas.buscarReservas)
rutas.get('/hotelesgelus/reservas/:id',controladorReservas.buscarReservasPorId)
rutas.post('/hotelesgelus/reserva', controladorReservas.registrarReversa)
rutas.put('/hotelesgelus/reserva',controladorReservas.editarReserva)