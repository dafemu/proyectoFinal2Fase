class ContenedorMongo {
    constructor(modelo){
        this.modelo = modelo;
    }

    async created(dataModelo){
        const nuevoElemento = new this.modelo(dataProducto);
        await nuevoElemento.save();
    }

    async read(){
        const elementos = await this.modelo.find();
        return elementos;
    }

    async update(objEncontrar, objNuevo){
        const elementoActualizar = await this.modelo.findOneAndUpdate({
            objEncontrar,
            objNuevo
        });
    }

    async delete(objEliminar){
        const elementoEliminar = await this.modelo.deleteOne(objEliminar);
    }
}