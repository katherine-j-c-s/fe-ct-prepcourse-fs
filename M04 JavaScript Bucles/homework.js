/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   let num1 = Number(int(x));
   let num2 = Number(int(y));
   let mayor = Math.max(num1,num2);
   if (num1 === num2) {
      return number1
   }else {
      return mayor
   }
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   let edad = Number(int(edad));
   let mayorDeEdad = 18;
   if (edad >= mayorDeEdad) {
      let siEsMayor = "allowed";
      return siEsMayor
   }else {
      let noEsMayor = "Not allowed";
      return noEsMayor
   }
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   let status = Number(int(status));
   switch (status) {
      case 1:
         let online = "Online";
         return online
      case 2:
         let away = "Away";
         return away
      default:
         let offline = "Offline"
         return offline
   }
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   let idioma = String(idioma);
   switch (idioma) {
      case aleman:
         let idioma = "Guten Tag!";
         return idioma
      case madarin:
         let idioma2 = "Ni Hao!";
         return idioma2
      case madarin:
         let idioma3 = "Hello!";
         return idioma3     
      default:
         let idioma4 = "Hola!";
         return idioma4   
   }
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   let color = String(color).toLowerCase
   switch (color) {
      case blue:
         let color1 = "blue";
         return color1
      case red:
         let color2 = "red";
         return color2
      case green:
         let color3 = "green";
         return color3  
      case orange:
         let color4 = "orange";
         return color4
      default:
         let notFound = "Color not found";
         return notFound
   }
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   let numero = Number(int(num));
   if (numero === 10 || numero === 5) {
      return true
   } else {
      return false
   }
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   let numero = Number(int(num));
   if (numero < 50 && numero > 20) {
      return true
   } else {
      return false
   }
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   let numero = Number(num);
   let entero = Math.trunc(numero);
   if (entero === numero) {
      return true
   } else {
      return false
   }
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   let numero = Number(int(num));
   let fizz = "fizz";
   let buzz = "buzz";
   if (numero % 3 == 0) {
      return fizz
   } if (numero % 5 == 0) {
      return buzz
   }if (numero % 3 == 0 && numero % 5 == 0){
      return fizz + buzz
   }
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   let num1 = Number(int(num1));
   let num2 = Number(int(num2));
   let num3 = Number(int(num3));
   if (num1 > num2 && num1 > num3 && num1 >= 0) {
      let respuesta1 = "Numero 1 es mayor y positivo";
      return respuesta1
   }if (num1 < 0 || num2 < 0 || num3 < 0) {
      let respuesta2 = "hay negativos";
      return respuesta2
   }if (num3 > num2 && num3 > num1) {
      let respuesta3 = num3++;
      return respuesta3
   }
   if (num1 == 0 && num2 == 0 && num3 == 0) {
      let respuesta4 = "Error";
      return respuesta4
   }else {
      return falso
   }
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   let numeroPrimo = Number(int(num));
   let esNumeroPrimo = true;

   for (let i = 2; i < numeroPrimo/2; i++) {
      if (numeroPrimo % i === 0){
         esNumeroPrimo = false;
      }
   }

   if (esNumeroPrimo) {
      return true
   } else {
      return false
   }
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:

   let verdadero = "soy verdadero";
   let noVerdadero = "soy falso";

   if (valor == true) {
      return verdadero
   } else {
      return noVerdadero
   }
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   let numero = toString(num);
    if (numero.length == 3) {
      return true
    } else {
      return false
   }
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let numero = Number(int(num));
   let aumento = 5 * 8 ;
   let numeroAumentado = numero + aumento;
   return numeroAumentado
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
