//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

console.log(arrayCuentas);

/*  Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior.
 */
let banco = {
    clientes: [...arrayCuentas],
};
console.log("\n2. ------------------------------------")
console.log(banco);

/* 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”); */

banco.consultarCliente = (titular) => {
    return banco.clientes.find(cliente => cliente.titularCuenta === titular);
}

let clienteEncontrado = banco.consultarCliente("Ramon Connell");
console.log("\n3. ------------------------------------")
console.log(clienteEncontrado);
/* 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”. */

banco.deposito = (titular, dinero) => {
    let cliente = banco.clientes.find(cliente => cliente.titularCuenta === titular);
    if(cliente){
        cliente.saldoEnPesos += dinero
        console.log(`Depósito realizado, su nuevo saldo es: ${cliente.saldoEnPesos}`);
    }
    else{
        console.log("El cliente ingresado no existe")
    }
}

console.log("\n4. ------------------------------------")
banco.deposito("Ramon Connell", 1000);

/* 5. Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.
Si llegaste hasta acá, felicidades, el equipo de desarrollo y el tech leader están
impresionados con tu trabajo. */

banco.extraccion = (titular, monto) => {
    let cliente = banco.clientes.find(cliente => cliente.titularCuenta === titular);
    if(cliente){
        cliente.saldoEnPesos -= monto
        console.log(`Extracción realizada correctamente, su nuevo saldo es: ${cliente.saldoEnPesos}`);
    }
    else{
        console.log("El cliente ingresado no existe")
    }
}

console.log("\n5. ------------------------------------");
banco.extraccion("Ramon Connell", 1000);

/* Bonus extra
Para que no te quedes con las ganas y puedas seguir practicando si así lo deseas, te
proponemos algunos ejercicios más. Tené en cuenta que a partir de acá los ejercicios
pueden escalar en dificultad. Como siempre decimos, paciencia, ignorá la complejidad y
tratá de resolverlo con las herramientas que tengas a tu disposición. También podés
buscar información extra en Google o documentaciones que conozcas. */
/* 
Propiedad única
Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string.
Ejemplo:
let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]
 */

const propiedadUnica = (arreglo, atributo) =>{
    return arreglo.map(elemento => {
        return  {[atributo]: elemento[atributo]}
    });
}

let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]

console.log("\n6. ------------------------------------");
console.log(propiedadUnica(array, "edad"));
console.log(propiedadUnica(array, "nombre"));

/* Calculador de notas
Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
● Nombre
● Número de legajo
● Lista de notas
Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
todos los métodos y propiedades que puedan hacer falta para que el programa funcione
correctamente de la manera solicitada. */ 

const calcularPromedio = (listaNotas) => {
    if (!listaNotas || listaNotas.length === 0) {
        console.log("La lista esta vacia");
        return 0; // Retorna 0 si la lista de notas está vacía
    }
    return listaNotas.reduce((acumulador, nota) => acumulador + nota, 0)/ listaNotas.length;
    }

let alumno = {
    nombre:"Franco",
    legajo: "12345",
    listaNotas:[ 7, 8, 9, 10],
    promedio: calcularPromedio,
}


console.log("\n7. ------------------------------------")
console.log("El promedio del alumno " + alumno.nombre  + " es: " + alumno.promedio(alumno.listaNotas));

