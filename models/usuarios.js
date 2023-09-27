const mongoose = require('mongoose');

//definir un schema
const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    cedula: String,
    correo: String,
    usuario: String,
    password: String,
    verificado:{
        role: String,
        type: Boolean,
        default: false
    }
})

//configurar la respuesta del usuario en el schema
usuarioSchema.set('toJSON',{
    transform:(document,returnObject)=>{
        returnObject.id = returnObject._id.toString();
        delete returnObject._id
    }
})

//seleccionar un nombre, registrar un modelo
const User = mongoose.model('User',usuarioSchema);

//se exporta
module.exports= User;