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


/*promesas*/

function Buscarlibrodid(id)

{
    
/*devolver el objeto*/
libroAuxiliar=libro; 
return new Promise((resolver, reject)=>{
const libro=libros.find((libro=>libro.id==id));
if (!libro) /** cuando no existe */
{
    const error=new error();
    error.message="Libro no encontrado"; /** */
    reject ("No se encuentra el libro")
    {
        resolver(libro);
    }

}
})
}
function Buscaradutorporid(id)
{
    return new Promise((resolver, reject)=>{
        const autor=autores.find((libro=>autor.id==id));
        if (!autor) /** cuando no existe */
        {
            const error=new error();
            error.message="Autor no encontrado"; /** */
            reject ("No se encuentra el Autor")
            }
                resolver(autor);
            })
}
let libroAuxiliar;
Buscarlibrodid(1).then((libro)=>{
return buscaraudorporid (libro.idautor);

}).then((autor)=>{
  linroAuxiliar.autor=autor;
  console.log(libroAuxiliar)

}).catch((error)=>{
    console.log(error.message)
})