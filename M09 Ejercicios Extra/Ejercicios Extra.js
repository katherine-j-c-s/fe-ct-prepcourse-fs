/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let obj = {objeto};
   let arr = [];
   let arrOfEachObj = [];
   
   for (const prop in obj) {
      let propiedad = prop;
      let valorP = obj[prop];
      arrOfEachObj.push(propiedad);
      arrOfEachObj.push(valorP);
      arr.push(arrOfEachObj);   
   }
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
   let string = string.toLowerCase();
   let letras = [string.split("")];
   letras.sort();
   let objeto = {};
   
   for (let e = 0; e < letras.length; e++) {
      
      let letra = letras[e];
      let repetidas = 1;
      
      for (let l = 0; l < letra.length; e++) {
         if (letra == letra[l]) {
            repetidas++;
         }
      }
      objeto.letra = repetidas;
   }
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let string = string;
   let letras = [string.split(" ")]; 
   letras[0].toUpperCase();
   letras[1].toLowerCase();
   let resultado = letras.join("");
   return resultado
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let frase = [frase.split("")];
   let palabrasInvertidas = [];
   for (let p = 0; p < frase.length; p++) {
      let palabra = [frase[p].split("")];
      let palabraAlRevez = [];
      for (let l = 0; l < palabra.length; l++) {
         palabraAlRevez.unshift(palabra[l]);
      }

      palabraAlRevez.join("");
      palabrasInvertidas.push(palabraAlRevez);
   }
   let stringMirror = palabrasInvertidas.join("");
   return stringMirror;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numero = numero;
   let numeroAlRevez = [];

   for (let n = 0; n < numero.length; n++) {
      numeroAlRevez.unshift(numero[n]);
   }

   numeroAlRevez.join("");

   if (numero == numeroAlRevez) {
      return "Es capicua"
   }else {
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringArr = [string.split("")];
   let stringSinLetras = [];

   for (let e = 0; e < stringArr.length; e++) {
      if (stringArr[e] !== "a" || stringArr[e] !== "b" || stringArr[e] !== "c") {
         stringSinLetras.push(stringArr[e]);
      }
   }
   stringSinLetras.join("");
   return stringSinLetras;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let arrString = arrayOfStrings;
   arrString.sort( function(a, b) {
      return a.length - b.length 
  });
  return arrString
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let arr1 = array1;
   let arr2 = array2;
   let nuevoArr = [];
   for (let e = 0; e < arr1.length; e++) {
      let numero1 = arr1[e];
      for (let e = 0; e < arr2.length; e++) {
         let numero2 = arr2[e]
         
         if (numero1 == numero2) {
            nuevoArr.push(numero1);
         }
      }
   }
   return nuevoArr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
