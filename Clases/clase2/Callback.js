const libros =[
    {
        id:1,
        titulo:'Darel Blondet',
        idautor:1
    },
    {
        id:2,
        titulo:'Maria Intriago',
        idautor:2
    },
    {
        id:3,
        titulo: 'Elias Blondet',
        idautor:2
    }
]
const autores = [
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

function buscarLibroPorId(id, callback ){
    const libro = libros.find((libro)=>  libro.id===id );
    if (!libro)
    {
        const error  =  new Error();
        error.message = "Libro no encontrado"
        return callback(error) ;
    }
    callback(null, libro)
}
function buscarAutorPorId(id, callback){
    const autor = autores.find((autor)=>{ 
        return autor.id===id;
    })
    if (!autor)
    {
        const error = new Error();
        error.message = "Autor no encontrado"
        return callback(error)
    }
    return callback(null, autor)
}


buscarLibroPorId(1, (err, libro)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    buscarAutorPorId( libro.idautor, (err, autor)=>{
        libro.autor = autor;
        delete libro.idautor;
        console.log(libro)
    })
})