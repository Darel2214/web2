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
async function BuscarCedula(id)

{
    const cedula=cedula.find((cedula=>cedula.id==id));
      if(!cedula)
      {
          const error=new Error();
          error.message="error"
          throw error;
      }
      return cedula;
}
async function BuscarPorApellido(id)

{
    const Apellido=Apellido.find((Apellido=>Apellido.id==id));
      if(!Apellido)
      {
          const error=new Error();
          error.message="error"
          throw error;
      }
      return Apellido;
}
async function BuscarPorCodigo(id)
{
    const codigo=codigo.find((codigo>codigo.id==id));
    if(!codigo)
    {
        const error=new Error();
        error.message="error"
        throw error;
    }
    return codigo;
    }
async function main()
{
    const ciudad = await BuscarCedula(1);
    const edad = await BuscarPorApellido(2);
    const cedula = await BuscarPorCodigo(cedula.Apellido.codigo);
    
   ciudad.Apellido;
   cedula.Apellido;
   


console.log(cedula)


}
main(); 