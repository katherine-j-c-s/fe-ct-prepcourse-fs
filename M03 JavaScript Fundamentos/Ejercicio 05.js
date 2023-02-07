/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   let num = Number(numero);
   if (num > 0){
     let positivo = "es positivo";
     return positivo
   }if (num < 0) {
     let negativo = "es negativo";
     return negativo
   } else {
     return false
   }
}

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   let string = String(str);
   let sign = "!";
   const newString = string + sign;
   console.log(newString);
   return newString
}

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   let nombre = String(nombre);
   let apellido = String(apellido);
   const nombYApll = nombre + " " + apellido;
   return nombYApll
}

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   let nombre = String(nombre);
   let hola = "hola"
   const saludo = hola + " " + nombre + "!";
   return saludo
}

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   let alto = Number(alto);
   let ancho = Number(ancho);
   const area = alto * ancho;
   return area
}

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   let lado = Number(lado);
   const perimetroCuadrado = lado * 4;
   return perimetroCuadrado
}

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   let base = Number(base);
   let altura = Number(altura);
   const areaTriangulo = base * altura / 2;
   return areaTriangulo
}

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   let euro = Number(euro);
   let dolar = 1.20;
   const convertidor = euro * dolar;
   return convertidor
}

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
     let letra = String(letra).toLowerCase();
   let unaLetra = letra.length == 1;
   if (unaLetra == true) {
      const siEsVocal = () => {
         const vocales = ["a","e","i","o","u"];
         for (i = 0; i < vocales.length++; i++) {
            let vocal =  vocales[i] == letra;
            if (vocal) {
               let correcto = "Es vocal";
               return correcto
            }
         }
      } 
      if (siEsVocal != correcto) {
         let incorrecto = "dato incorrecto";
         return incorrecto
      }
   }else {
      let incorrecto = "dato incorrecto";
      return incorrecto
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
