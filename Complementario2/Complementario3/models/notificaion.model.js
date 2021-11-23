const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotificacionaSchema =   
new Schema(
{
    titulo: { type:String },
    descripcion: { type:String },  
},
{
     timestamps:{ craetedAt: true, updatedAt:true } 
}
);

module.exports  =  mongoose.model("Notificacio", NotificacionaSchema );
