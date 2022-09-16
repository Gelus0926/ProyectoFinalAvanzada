import * as dotenv from 'dotenv' 
dotenv.config()

import { servidorAPI } from './Api/servidorApi.js'

let servidor=new servidorAPI() //Instancia de una clase(Objeto)
servidor.encenderServidor()




