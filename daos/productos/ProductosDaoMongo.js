import mongoose from "mongoose";
import ContenedorMongo from '../../contenedor/ContenedorMongo.js';
import { Producto } from './models/Producto.js';
class ProducosDaoMongo extends ContenedorMongo {
    constructor(){
        super(Producto);
    }

    async conectar(){
        try {
            mongoose.connect('mongodb://localhost:27017/segFinal');
            console.log("COENECTADO AL MONGODB");
        } catch (error) {
            console.log("Erro al conectarse a la BD: ", error);
        }
    }

    async desconectar(){
        try {
            mongoose.disconnect();
        }catch(error){
            console.log(error);
        }
    }
}