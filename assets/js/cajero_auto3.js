// Primero registramos manualmente los 3 usuarios, como crear una mini base de datos 

// Usuario 1 
let name_user_1 = "alexander";
let id_user_1 = 186790456;
let pass_user_1 = "alex";
let balance_user_1 = 10000;

// Usuario 2
let name_user_2 = "nicolas";
let id_user_2 = 207580147;
let pass_user_2 = "nico";
let balance_user_2 = 5000;

// Usuario 3 
let name_user_3 = "sebastian";
let id_user_3 = 220698726;
let pass_user_3 = "seba";
let balance_user_3 = 7000;

// Mostrar mensaje de bienvenida al banco
alert("¡Bienvenido a Banca en Línea!");

// Definimos variables para guardar el ID y la contraseña ingresados
let valid_id = null;
let valid_pass = null;

let opcion = null; // Inicializamos la variable opcion

// Validamos el usuario de ingreso
while (opcion !== "2") {
    // El bucle se ejecuta mientras la opción no sea "2" (Salir)
    
    opcion = prompt("Presione 1 para ingresar o 2 para Salir:");
    
    // Si el usuario elige salir, el bucle termina
    if (opcion === "2") {
        alert("Has decidido salir de Banca en Linea. ¡Hasta pronto!");
        break; // Salir del bucle si el usuario decide salir
    } 
    
    // Si entra al banco se ejecuta esto
    else if (opcion === "1") {
        // Solicitar ID de usuario
        valid_id = prompt("Ingrese su ID de usuario:");
        
        // Solicitar contraseña
        valid_pass = prompt("Ingrese su contraseña:");

        let valido = false; // Variable para verificar si el usuario es válido
        let balance = 0; // Variable para manejar el saldo del usuario

        // Condición para usuario 1
        if (valid_id == id_user_1 && valid_pass == pass_user_1) {
            alert("¡Bienvenido Alexander!");
            valido = true;
            balance = balance_user_1; // Asignar el saldo del usuario 1

        // Condición para usuario 2
        } else if (valid_id == id_user_2 && valid_pass == pass_user_2) {
            alert("¡Bienvenido Nicolas!");
            valido = true;
            balance = balance_user_2; // Asignar el saldo del usuario 2

        // Condición para usuario 3
        } else if (valid_id == id_user_3 && valid_pass == pass_user_3) {
            alert("¡Bienvenido Sebastian!");
            valido = true;
            balance = balance_user_3; // Asignar el saldo del usuario 3
        }

        // Mostrar mensaje si el usuario no fue encontrado
        if (!valido) {
            alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
            continue; // Volver al inicio si las credenciales son incorrectas
        }

        // Bucle para el menú del usuario
        let opcion_user = null; // Inicializamos opcion_user fuera del bucle

        while (opcion_user !== "4") { // Ejecutar mientras la opción no sea "4" (Salir)
            opcion_user = prompt("Menú de Opciones:\n1. Ver Saldo\n2. Realizar Giro\n3. Realizar Depósito\n4. Salir\n\nElija su opción:");

            if (opcion_user === "1") {
                alert("La opción elegida fue 1. Ver Saldo, su saldo es: $" + balance);
            } else if (opcion_user === "2") {
                let giro = prompt("La opción elegida fue 2. Realizar Giro, ¿Cuánto $ desea Girar?");
                giro = parseInt(giro); // Convertir a número

                // Validar que el giro sea menor o igual al saldo
                if (giro > 0 && giro <= balance) {
                    balance -= giro; // Restar el monto del giro al saldo
                    alert("Has realizado un giro de $" + giro + ". Su nuevo saldo es: $" + balance);
                } else {
                    alert("Giro inválido. Asegúrese de que el monto sea menor o igual a su saldo actual.");
                }
            } else if (opcion_user === "3") {
                let deposito = prompt("La opción elegida fue 3. Realizar Depósito, ¿Cuánto $ desea Depositar?");
                deposito = parseInt(deposito); // Convertir a número

                // Validar que el depósito sea un número positivo
                if (deposito > 0) {
                    balance += deposito; // Sumar el monto del depósito al saldo
                    alert("Has realizado un depósito de $" + deposito + ". Su nuevo saldo es: $" + balance);
                } else {
                    alert("El monto del depósito debe ser mayor que cero.");
                }
            } else if (opcion_user === "4") {
                alert("La opción elegida fue 4. Salir");
            } else {
                alert("Opción no válida. Por favor, elija una opción válida.");
            }
        }
    } else {
        alert("Opción no válida. Intente de Nuevo "); // si no eligió 1 o 2 en la primera opción
    }
}