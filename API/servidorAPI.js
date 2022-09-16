import express from 'express'

import {rutas} from '../Routes/rutas.js'

export class servidorAPI{

    constructor(){
        this.app = express() //Atributo de una clase
        this.atenderPeticiones()
    }

    //Metodos de la clase servidorAPI
    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("Servidor encendido: "+process.env.PORT)
        })
    }

    atenderPeticiones(){
        this.app.use('/',rutas)
        /* this.app.get('/hotelesgelus/habitaciones', function (req, res) {
            res.send('Buscando todas las habitaciones')
          })
        this.app.get('/hotelesgelus/habitacion/:id', function (req, res) {
              res.send('Buscando una habitacion por id')
          })
        this.app.post('/hotelesgelus/habitacion', function (req, res) {
              res.send('Agregando una habitacion')
          })
        this.app.put('/hotelesgelus/habitacion', function (req, res) {
              res.send('Editando una habitacion')
          }) */
    }

    conectarConBD(){}

}