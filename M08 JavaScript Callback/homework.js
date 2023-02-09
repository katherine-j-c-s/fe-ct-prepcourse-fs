/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   let nombre = nombre;
   let enMayuscula = nombre[0].toUpperCase() + texto.substring(1);
   return enMayuscula;
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   let operacionMatematica = cb(num1,num2);
   return operacionMatematica;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   let arrayNumeros = [arrayOfNumbers];
   let resultadoNumeros = 0;
   for (let n = 0; n < arrayNumeros.length; n++) {
      resultadoNumeros += arrayNumeros[n]
   }
   cb(resultadoNumeros);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   let arr = [array];
   for (let e = 0; e < arr.length; e++) {
      cb(array[e]);
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   let arr = [array];
   let newArr = [];
   for (let e = 0; e < arr.length; e++) {
      let callback = cb(array[e]);
      newArr.push(callback);
   }
   return newArr;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let arr = [arrayOfStrings];
   let newArr = [];
   for (let e = 0; e < arr.length; e++) {
      let primeraLetra = arr[e][0]
      if (primeraLetra == a) {
         newArr.push(arr[e])
      }
   }
   return newArr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
