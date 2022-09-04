const admin = require("firebase-admin");
const serviceAccount = require("./db/test-coder-928b9-firebase-adminsdk-pbxfh-d4e455f2e3.json");

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});

const db = admin.firestore();
class ContenedorFirebase {
    constructor(coleccion){
        this.coleccion = db.collection(coleccion);
    }

    created(nuevoElemento){
        // await doc.create(collectionData);
        let doc = this.coleccion.doc();
        const crearElemento = doc.create(nuevoElemento);
        return {
            ...nuevoElemento,
            id: crearElemento.id
        };
    }

    read(){
        this.coleccion.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                doc.id,
                doc.data();
            });
        })
    }

    update(idElemento, nuevoElemento){
        this.coleccion
        .where('id', "==", idElemento)
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                doc.ref.update(nuevoElemento);
            });
        });
    }

    delete(idElemento){
        this.coleccion
        .where('id', "==", idElemento)
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                doc.ref.delete();
            });
        });
    }
}