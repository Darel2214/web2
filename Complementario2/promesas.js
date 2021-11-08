const cedula= [  
    {
id:1,
nombre:'1305472392'
    },
]
const Apellidos= [  
    {
id:2,
nombre:'Blondet Intiago'
    },
]
const codigo=[  
    {
id:3,
titulo:'1111',

    },
     
]

/*promesas*/

function BuscarCedula(id)
{
CedulaAuxiliar=cedula; 
return new Promise((resolver, reject)=>{
const cedula=cedula.find((cedula=>cedula.id==id));
if (!cedula )
{
    const error=new error();
    error.message="error"; /** */
    reject ("incorrecto")
    {
        resolver(cedula);
    }
}
})
}
function BuscarPorApellido(id)
{
    return new Promise((resolver, reject)=>{
        const Apellido=Apellido.find((Apellido=>Apellido.id==id));
        if (!Apellido) /** cuando no existe */
        {
            const error=new error();
            error.message="error"; /** */
            reject ("Incorrecto")
            }
                resolver(Apellido);
            })
}
function BuscarPorCodigo(id)
{
    return new Promise((resolver, reject)=>{
        const codigo=codigo.find((codigo>codigo.id==id));
        if (!codigo) 
        {
            const error=new error();
            error.message="error"; /** */
            reject ("Incorrecto")
            }
                resolver(codigo);
            })
}
let cedulaAuxiliar;
BuscarCedula(1).then((cedula)=>{
return BuscarPorApellidoid (cedula.idcedula);

}).then((Apellido)=>{
  apellidpAuxiliar.Apellido=Apellido;
  console.log(cedduladAuxiliar)

}).catch((error)=>{
    console.log(error.message)
})