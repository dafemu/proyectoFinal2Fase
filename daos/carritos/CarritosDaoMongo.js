import mongoose from "mongoose";
import { Carrito } from './models/Carrito.js';

CRUD();
async function CRUD() {
    try{
        mongoose.connect('mongodb://localhost:27017/segFinal');
        console.log("COENECTADO AL MONGODB");

        mongoose.disconnect();
    }catch(error){
        console.log("Erro al conectarse a la BD: ", error);
    }
}