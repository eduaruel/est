const mongoose = require('mongoose');
const express = require('express');
const usuario = require('./models/usuarios');
const paciente = require('./models/paciente');
const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const path = require('path');

server.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000");
})

app.use(express.json())

//definir rutas para el frontend
app.use('/',express.static(path.resolve('views','home')))
app.use('/ini',express.static(path.resolve('views','inicio')))
app.use('/regis',express.static(path.resolve('views','registro')))