// requires necesarios
const express = require('express');

const { Router } = express;
const app = express();

//daos
import { productosDao, carritosDao } from './daos/controller.js';

//routers
const routerProductos = Router();
const routerCarrito = Router();


// routerProductos.get('/', (req, res) => {
//     console. log('GET request recibido');
//     const productos = modController.getProductos();
//     res.status(200).json({
//         result: 'Productos',
//         ListadoProductos : productos,
//     });
// });

// routerProductos.get('/:id', (req,res) => {
//     console.log('GET request recibido con id');
//     const id = Number(req.params.id);
//     const producto = modController.getProducto(id);
//     res.send(producto);
// });

// routerProductos.post('/', (req,res) => {
//     console.log('POST request recibido');
//     const producto ={ 
//         timestamp: Date.now(),
//         nombre: req.query.nombre,
//         descripcion: req.query.descripcion,
//         codigo: req.query.codigo,
//         foto: req.query.foto,
//         precio: req.query.precio,
//         stock: req.query.stock,
//     };
//     const newProducto = modController.setProducto(producto);
//     res.status(201).json({
//         result: 'Producto Agregado',
//         NuevoProducto: newProducto
//     });
// });

// routerProductos.put('/:id', (req,res) => {
//     console.log('PUT request recibido');
//     const id = Number(req.params.id);
//     const productoEncontrado = modController.getProducto(id);
//     productoEncontrado.timestamp = req.query.timestamp;
//     productoEncontrado.nombre = req.query.nombre;
//     productoEncontrado.descripcion = req.query.descripcion;
//     productoEncontrado.codigo = req.query.codigo;
//     productoEncontrado.foto = req.query.foto;
//     productoEncontrado.precio = req.query.precio;
//     productoEncontrado.stock = req.query.stock;
//     res.status(201).json({
//         result: 'Producto Actualizado',
//         id: req.params.id,
//         ProductoActualizado : productoEncontrado,        
//     });
// });

// routerProductos.delete('/:id', (req,res) => {
//     console.log('DELETE request recibido');
//     const id = Number(req.params.id);
//     const productoBorrado = modController.borrarProducto(id);
//     res.status(200).json({
//         result: 'Producto Borrado',
//         id: req.params.id,
//         ListadoProductosNuevo: productoBorrado,
//     });
// });

// ///CARRITO
// routerCarrito.post('/', (req,res) => {
//     console.log('POSTcarrito request recibido');
//     const carrito = {
//         timestamp:  Date.now(),
//     };
//     const newCarrito = modController.setCarrito(carrito);
//     res.status(201).json({
//         result: 'Carrito Agregado',
//         NuevoCarrito: newCarrito
//     });
// });

// routerCarrito.delete('/:id', (req,res) => {
//     console.log('DELETEcarrito request recibido');
//     const id = Number(req.params.id);
//     const carritoBorrado = modController.borrarCarrito(id);
//     res.status(200).json({
//         result: 'Carrito Borrado',
//         id: req.params.id,
//         NuevoListadoCarrito: carritoBorrado,
//     });
// });

// routerCarrito.get('/:id/productos', (req,res) => {
//     console.log('GET request recibido con id');
//     const id = Number(req.params.id);
//     const carrito = modController.getCarrito(id);
//     res.send(carrito);
// });

// routerCarrito.post('/:id/productos', (req,res) => {
//     console.log('POSTcarrito dos request recibido');
//     const idCarrito = Number(req.params.id);
    
//     carritoProductoAdd = {
//         timestamp: Date.now(),
//         nombre: req.query.nombre,
//         descripcion: req.query.descripcion,
//         codigo: req.query.codigo,
//         foto: req.query.foto,
//         precio: req.query.precio,
//         stock: req.query.stock,
//     }
    
//     const carrito = modController.agregarCarritoProductos(idCarrito, carritoProductoAdd);

//     res.status(201).json({
//         result: 'Producto agregado al carrito',
//         NuevoCarrito: carrito
//     });
// });

// routerCarrito.delete('/:id/productos/:id_prod', (req,res) => {
//     console.log('DELETE request recibido');
//     const idCarrito = Number(req.params.id);
//     const idCarritoProd = Number(req.params.id_prod);

//     const carritoBorradoProducto = modController.borrarCarritoProducto(idCarrito, idCarritoProd);
//     res.status(200).json({
//         result: 'Producto borrado del carrito',
//         id: req.params.id,
//         ListadoProductosNuevo: carritoBorradoProducto,
//     });
// });


//use
app.use('/api/productos', routerProductos);
app.use('/api/carrito', routerCarrito);

const server = app.listen(8080, ()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", error => console.log(`Error en servidor ${error}`));