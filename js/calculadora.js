// probar que este cargando el js
// 
console.log("hola");

// prompt propiedad para interactura con la pagina
// 
// prompt("ingresa un numero");
// var n1 = prompt ("ingresa el primer número")
// var n2 = prompt ("ingresa el segundo número")
// optimizar las propiedades en programación
// parsear es convertir un valor alfabetico en numerico.
// entero sin punto decimal; flotante con punto decimal. dobble para cantidades con muchos ceros millones o trillones.
// parseInt(n1 este valor es un parametro)
// parseInt(n2)

// suma de las dos variables que el usuario nos facilitara
// var suma = parseInt(n1) + parseInt(n2);
// console.log(suma);
// metodo para enviar variables a la pantalla del usuario
// document.write(suma);

// sintaxis, forma correcta de escribir codigo
// function seguida del nomre del evento o del metodo seguido parentesis sin espacios y abrimos bloque de llaves

// Suma
function Suma() {
    var n1 = prompt("ingresa el primer número")
    var n2 = prompt("ingresa el segundo número")
    // concatenando
    document.write("la suma de " + n1 + " y " + n2 + "es:");
    // sumando y optimizando
    document.write(parseInt(n1) + parseInt(n2));

}

// Resta
function Resta() {
    // variable n1 porque es el primer numero que necesitamos y lo mandamos a llamar por elemento id y su valor con la propiedad value;
    // comillas dobles para texto y comillas simples para valor numerico
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    var resta = parseInt(n1) - parseInt(n2);
    alert("la resta es: " + resta);
}

// Multiplicacion
function Multiplicacion() {
    //     var n1 = prompt ("primer número")
    //     var n2 = prompt ("segundo número")
    // document.write (parseInt (n1) * parseInt(n2) );
    console.log("hola")
    var n1 = document.getElementById('txtN3').value;
    var n2 = document.getElementById('txtN4').value;
    var Multiplicacion = parseInt(n1) * parseInt(n2);
    // esto es la concatenacion la cual no es igual a una suma de valores numericos
    alert("la multiplicacion es: " + Multiplicacion);
}

// multiplicacion2
function Multi() {
    console.log("hola")
    var n1 = document.getElementById('txtNn1').value;
    var n2 = document.getElementById('txtNn2').value;
    var Multiplicacion = parseInt(n1) * parseInt(n2);
    alert("la multiplicacion es: " + Multiplicacion);
}

// division
function Div(){
    var n1 = document.getElementById('txtNn3').value;
    var n2 = document.getElementById('txtNn4').value;
    var Division = parseInt(n1) / parseInt(n2);
    alert("la division es: " + Division);
}