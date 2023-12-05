var express = require("express");
var ruta = express.Router();
var { subirArchivo } = require("../middlewares/middlewares");
var {
  mostrarUsuario,
  login,
  registrarUsuario,
  buscarPorID,
  modificarUsuario,
  borrarUsuario,
} = require("../db/usuariosBD");


const multer = require('multer');

// Rutas relacionadas con usuarios


ruta.get("/api/mostrarusuarios",async(req,res)=>{
   var usuarios=await mostrarUsuarios();
   if(usuarios.length==0){
      res.status(400).json("No hay usuarios");
   }else{
      res.status(200).json(usuarios);
   }

});


ruta.post("/api/nuevousuario",subirArchivo(), async(req,res)=>{
   req.body.foto=req.file.filename;
   var error=await nuevoUsuario(req.body);
   if(error==0){
      res.status(200).json("Usuario registrado correctamente");
   }else{
      res.status(400).json("Erro al registrar el usuario");
   }
});

ruta.get("/api/buscarUsuarioPorId/:id",async(req,res)=>{
   var user=await buscarID(req.params.id);
   if(user==""){
      res.status(400).json("usuario no encontrado");
   }else{
      res.status(200).json(user);
   }
});

ruta.post("/api/editarUsuario",subirArchivo(),async(req,res)=>{
   req.body.foto=req.file.filename;
   var error=await modificarUsuario(req.body);
   if(error==0){
      res.status(200).json("Usuario actualizado correctamente");
   }else{
      res.status(400).json("Error al actualizar el Usuario");
   }
});

ruta.get("/api/borrarUsuario/:id",async(req,res)=>{
   var error=await borrarUsuario(req.params.id);
   if(error==0){
      res.status(200).json("Usuario borrado");
   }else{
      res.status(400).json("Error al borrar el Usuario")
   }
});
module.exports=ruta;