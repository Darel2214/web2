//Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while.
//Impostamos el arreglo
const { comidaFav } = require("./3ejercicio");

//creamos contador
let contador = 0;
do{
    //imprimimos ponemos un mensaje por defecto para hacer un listado 
    console.log("◉ Comida  "+ (contador+1));
    //Imprimimos el arreglo 
    console.log(comidaFav[contador]);
    //hacemos que el contador sume para seguirimprimiendo
    contador++;
}
while  (contador< comidaFav.length) 
