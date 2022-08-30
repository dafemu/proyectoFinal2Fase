import mongoose from "mongoose";
import { Producto } from './models/Producto.js';

CRUD();
async function CRUD() {
    try{
        mongoose.connect('mongodb://localhost:27017/segFinal');
        console.log("COENECTADO AL MONGODB");

        // console.log('CREATED');
        // const ProductoData = {
        //     nombre: 'Ipad',
        //     descripcion: 'Ipad pro con chip M1 de Apple',
        //     codigo: '12345',
        //     foto: 'https://m.media-amazon.com/images/I/81a-vuydLTL._AC_SY450_.jpg',
        //     precio: '900',
        //     stock: '25',
        // };
        // const nuevoProducto = new Producto(ProductoData);
        // nuevoProducto.save();
        // console.log("Producto creado : ", nuevoProducto);

        mongoose.disconnect();
    }catch(error){
        console.log("Erro al conectarse a la BD: ", error);
    }
}