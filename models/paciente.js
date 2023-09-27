const mongoose = require('mongoose');

//definir el schema
const pacienteSchema = new mongoose.Schema({
    ci: Number,
    nombre: String,
    apellido: String,
    edad: Number,
    fnac: Date,
    sintomas: String,
    alergias:{
        medicamentos: Boolean,
        animales: Boolean,
        comida: Boolean
    },
    enfCronicas: String
})

//configurar la respuesta del usuario en el schema
pacienteSchema.set('toJSON',{
    transform:(document,returnObject)=>{
        returnObject.id = returnObject._id.toString();
        delete returnObject._id
    }
})

//seleccionar un nombre, registrar un modelo
const Paciente = mongoose.model('Paciente',pacienteSchema);

//se exporta
module.exports= Paciente;