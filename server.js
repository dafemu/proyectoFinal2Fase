// imports necesarios
import express from 'express';

const { Router } = express;
const app = express();

//daos
import { productosDao, carritosDao } from './daos/controller.js';

//routers
const routerProductos = Router();
const routerCarrito = Router();

routerProductos.get('/', async (req, res) => {
    console. log('GET request recibido');
    const productos = await productosDao.read();
    res.status(200).json({
        result: 'Productos',
        ListadoProductos : productos,
    });
});

routerProductos.get('/:id', async (req,res) => {
    console.log('GET request recibido con id');
    const id = Number(req.params.id);
    const producto = productosDao.readOne(id);
    res.send(producto);
});

routerProductos.post('/', async (req,res) => {
    console.log('POST request recibido');
    const producto ={ 
        timestamp: Date.now(),
        nombre: req.query.nombre,
        descripcion: req.query.descripcion,
        codigo: req.query.codigo,
        foto: req.query.foto,
        precio: req.query.precio,
        stock: req.query.stock,
    };
    const newProducto = await productosDao.created(producto);
    res.status(201).json({
        result: 'Producto Agregado',
        NuevoProducto: newProducto
    });
});

routerProductos.put('/:id', async (req,res) => {
    console.log('PUT request recibido');
    const id = Number(req.params.id);
    const productoEncontrado = {};
    productoEncontrado.timestamp = req.query.timestamp;
    productoEncontrado.nombre = req.query.nombre;
    productoEncontrado.descripcion = req.query.descripcion;
    productoEncontrado.codigo = req.query.codigo;
    productoEncontrado.foto = req.query.foto;
    productoEncontrado.precio = req.query.precio;
    productoEncontrado.stock = req.query.stock;

    await productosDao.update(id,productoEncontrado);
    res.status(201).json({
        result: 'Producto Actualizado',
        id: req.params.id,
        ProductoActualizado : productoEncontrado,        
    });
});

routerProductos.delete('/:id', async (req,res) => {
    console.log('DELETE request recibido');
    const id = Number(req.params.id);
    const productoBorrado = await productosDao.delete(id);
    res.status(200).json({
        result: 'Producto Borrado',
        id: req.params.id,
        ListadoProductosNuevo: productoBorrado,
    });
});

// ///CARRITO
routerCarrito.post('/', async (req,res) => {
    console.log('POSTcarrito request recibido');
    const carrito = {
        timestamp:  Date.now(),
    };
    const newCarrito = await carritosDao.created(carrito);
    res.status(201).json({
        result: 'Carrito Agregado',
        NuevoCarrito: newCarrito
    });
});

routerCarrito.delete('/:id', async(req,res) => {
    console.log('DELETEcarrito request recibido');
    const id = Number(req.params.id);
    const carritoBorrado = await carritosDao.delete(id);
    res.status(200).json({
        result: 'Carrito Borrado',
        id: req.params.id,
        NuevoListadoCarrito: carritoBorrado,
    });
});

//Productos en el carrito
routerCarrito.get('/:id/productos', async (req,res) => {
    console.log('GET request recibido con id');
    const id = Number(req.params.id);
    const carrito = await carritosDao.readOne(id);
    res.send(carrito);
});

routerCarrito.post('/:id/productos', async (req,res) => {
    console.log('POSTcarrito dos request recibido');
    const idCarrito = Number(req.params.id);
    const idProducto = req.body.id;

    const carrito = await carritosDao.readOne(idCarrito);
    const producto = await productosDao.readOne(idProducto);
    
    carrito.productos.push(producto);
    await carritosDao.update(idCarrito, carrito)

    res.status(201).json({
        result: 'Producto agregado al carrito',
        NuevoCarrito: carrito
    });
});

routerCarrito.delete('/:id/productos/:id_prod', async (req,res) => {
    console.log('DELETE request recibido');
    const idCarrito = Number(req.params.id);
    const idCarritoProd = Number(req.params.id_prod);

    const carrito = await carritosDao.readOne(idCarrito);

    const index = carrito.productos.findIndex(prod => prod.id == idCarritoProd);

    if(index !== -1){
        carrito.productos.splice(index,1);
        await carritosDao.update(idCarrito,carrito);
    }

    res.status(200).json({
        result: 'Producto borrado del carrito',
        id: req.params.id,
        ListadoProductosNuevo: carrito,
    });
});


//use
app.use('/api/productos', routerProductos);
app.use('/api/carrito', routerCarrito);

const server = app.listen(8080, ()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", error => console.log(`Error en servidor ${error}`));