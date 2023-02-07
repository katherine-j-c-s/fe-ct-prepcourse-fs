/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return String(string)
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   let num1 = Number(x);
   let num2 = Number(y);
   const problema = num1 + num2;
   return problema
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   let num1 = Number(x);
   let num2 = Number(y);
   const problema = num1 - num2;
   return problema
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   let num1 = Number(x);
   let num2 = Number(y);
   const problema = num1 / num2;
   return problema
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   let num1 = Number(x);
   let num2 = Number(y);
   const problema = num1 * num2;
   return problema
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   let num1 = Number(x);
   let num2 = Number(y);
   const resto = num1 % num2;
   return resto
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
