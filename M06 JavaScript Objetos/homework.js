/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   let gato = {
      nombre : nombre,
      edad : edad,
      meow : "Meow!",
   }
   return gato
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   let usuario = {
      nombre : nombre,
      emal : email,
      contraseña : password,
   }
   return usuario
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   let object = {objeto};
   let prop = propiedad;
   object[prop] = null;
   return object;
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   let objt = {objeto};
   let prop = metodo;
   objt[prop()];
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   let numMisterioso = objetoMisterioso;
   let resultado = numMisterioso * 5;
   return resultado;
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   let objt = {objeto};
   let prop = propiedad;
   let resultado = delete[objt[prop]];
   return resultado
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   let objeto = {objetoUsuario};
   return objeto.hasOwnProperty("email");
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   let objeto = {objeto};
   let prop = propiedad;
   return objeto.hasOwnProperty(prop);
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   let objeto = {objetoUsuario};
   let prop = password;
   return objeto.hasOwnProperty(prop);
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   let objeto = {objetoUsuario};
   let prop = nuevaPassword;
   objeto[password] = prop;
   return objeto;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   let objeto = {objetoUsuario};
   let nuevoAmigo = nuevoAmigo;
   objeto[amigos].push = nuevoAmigo;
   return objeto;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   let arr = [objetoMuchosUsuarios];
   
   for (let u = 0; u < arr.length; u++) {
      let objeto = arr[u];
      objeto[esPremium] = true;
   }
   return arr;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   // let objetousuario = {
   //    posts:[
   //       {post : 
   //          {likes : 2}},
   //       {post : 
   //          {likes : 2}},
   //       {post : 
   //          {likes : 2}},
   //    ],
   // }
   let object = {objetoUsuario};
   let postsObject = object.objetoUsuario;
   let postsArr = postsObject.posts;
   let postObject = {};
   let suma = [];
   let numeroResultante = 0 ;
   for (let e = 0; e < postsArr.length; e++) {
      let eachPost = postsArr[e];
      postObject = eachPost.post;
   }
   for (let likes in postObject) {
      suma = postObject[likes];
   }
   for (let n = 0; n < suma.length; n++) {
      numeroResultante += suma[n];
   }
   return numeroResultante;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   let objetoProducto = {
      precio : 20,
      porcentajeDescuento: 20,
   }
   let objeto = {objetoProducto};
   objeto.calcularPrecioDescuento = function multipicar() {
      precioTotalMult = this.precio * this.porcentajeDeDescuento;
      precioFinal = this.precio - precioTotalMult;
      return precioFinal;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
