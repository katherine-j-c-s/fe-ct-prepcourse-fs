/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { multiplica } = require("../M03 JavaScript Fundamentos/Ejercicio 02");

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let arr = [array];

   return arr.length - 1;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let numeros = [array];
   let masUno = numeros.map((num) => {
      return num +1;
   })
   return masUno
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   let arr = [array];
   let elemt = elemento;
   let finalItem = arr.push(elemt);
   return finalItem
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   let arr = [array];
   let elemt = elemento;
   let primerItem = arr.unshift(elemt);
   return primerItem;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let arr = [palabras];
   let frase = arr.join(' ');
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   let arr = [array];
   let incluye = arr.includes(elemento);
   return incluye ;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let numbers = [arrayOfNums];
   let suma = 0;
   for (let num = 0; num < numbers.length ; num++) {
      suma = suma + numbers[num];
   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let promedio = [resultadosTest];
   promedio.forEach((elemt) => {
      let notas = "tu promedio es: " + elemt;
      return notas;
   });
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numbers = [arrayOfNums];
   let mayor = Math.max(numbers);
   return mayor;
}

function multiplicarArgumentos(num) {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let numeros = [num];
   let multiplicar = 1;
   for (let e = 0; e < numeros.length; e++) {
      if (numeros == null) {
         return 0;
      }if (numeros.length < 1) {
         return numeros[e];   
      }else{
         multiplicar *= numeros[e];
         return multiplicar;
      }
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let elementos = [array];
   let mayores = [];
   for (let i = 0; i < elementos.length; i++) {
      if (elementos[i] > 18) {
         mayores.push(elementos[i])
      }
   }
   return mayores
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   let diasSemana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
   let numDia = Number(int(numeroDeDia));
   let dia = diasSemana[numDia];

   if (dia == diasSemana[5] || dia == diasSemana[6]) {
      let finDeS = "es fin de semana";
      return finDeS
   }else {
      let laboral = "es dia laboral";
      return laboral
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numero = Number(int(num));
   
   if (numero == 9) {
      return true;
   }else {
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   let arr = [array];
   return arr.every(e => arr[0] == e)
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let meses = [array];
   let mesesRetornados = [""];
   if (meses.includes("Enero") && meses.includes("Marzo") && meses.includes("Noviembre")) {
      mesesRetornados = ["Enero","Marzo","Noviembre"];
      return mesesRetornados
   }else {
      return "no se encontraron los meses pedidos"
   }
   
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let numeros = [1,2,3,4,5,6,7,8,9,10];
   let numTabla = [];
   for (let n = 0; n < numeros.length; n++) {
      let resultado = numeros[n] * 6;
      numTabla.push(resultado);
   }
   return numTabla
}
console.log(tablaDelSeis)
function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let arr = [array];
   let mayorACien = [];
   for (let e = 0; e < arr.length; e++) {
      if (arr[e] > 100) {
         mayorACien.push(arr[e]);
      }
   }
   return mayorACien
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let numero = num;
   let nuevoValor = [];
   let bandera = 0;
   while (bandera < 10) {
      numero += 2;
      bandera++;
      if(numero == bandera) {
         return "se interrumpió la funcion";
      }else {
         nuevoValor.push(numero);
         return nuevoValor;
      }
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let numero = num;
   let nuevoValor = [];
   let bandera = 1;
   while (bandera <= 10) {
      numero += 2;
      bandera++;
      if(bandera == 5) {
         numero -= 2;
      }else {
         nuevoValor.push(numero);
         return nuevoValor;
      }
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
