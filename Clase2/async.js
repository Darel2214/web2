const libro=[  /*ARREGLOS*/
    {
id:1,
titulo:'sistemas distribuidos NodeJs',
idautor:1
    },

{
    id:2,
titulo:'Aprendiendo JS',
idautor:2
 },

 {
    id:3,
titulo:'Aprendiendo JS',
idautor:3
 },
],
const autores= [  
    {
id:1,
nombre:'Darel Blondet'
    },

{
    id:2,
    nombre:'Maria Intriago'
 },

 {
    id:3,
nombre:'Elias Blondet'
 }
]
async function Buscarlibrodid(id)

{
    const libro=libros.find((libro=>libro.id==id));
      if(!libro)
      {
          const error=new Error();
          error.message="No lo encontramos"
          throw error;
      }
      return libro;
}
async function Buscaradutorporid(id)
{
    const autor=autores.find((libro=>autor.id==id));
    if(!autor)
    {
        const error=new Error();
        error.message="No lo encontramos al autor"
        throw error;
    }
    return autor;
    }
async function main()
{
    const libro = await Buscarlibrodid(1);
    const autor = await Buscarautorporid(libroidautor);
    
    libro.autorautor;


console.log(libro)


}
main(); 