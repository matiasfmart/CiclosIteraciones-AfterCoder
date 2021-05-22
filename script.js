// ejemplo 1 after

let inicio = 0;

do {
    inicio = parseInt(prompt('Bienvenido a la aplicacion\nIngrese segun corresponda\n1-Comenzar los turnos\n2-area comercial\n0-para Salir'));

    switch (inicio) {
        case 1:
            let nroTurnos = parseInt(prompt('Ingrese el total de los turnos'));

            for (let i = 0; i <= nroTurnos; i++) {
                alert('Turno '+ i);
            }
            break;
        case 2:
            alert('Estamos en el area comercial');
    
        case 0:
            alert('Hasta la proxima!')
            break;
    }
    
} while (inicio != 0);




// ejemplo 2 after

let acum = 0;
let sueldo = parseInt(prompt('Ingrese su sueldo'));
let tiempo = parseInt(prompt('Ingrese en cuanto tiempo necesita el ahorro'));
let ahorro = parseInt(prompt('Ingrese cuanto quiere ahorrar'));
let gastos = parseInt(prompt('Ingrese el total de sus gastos'))
let auxGastos = gastos;

let sueldoTotal = sueldo*tiempo;

let sobrante = sueldoTotal - gastos;

let ahorroTotal = ahorro - sobrante;

while(ahorroTotal > acum)
{
    gastos--;
    acum++;
}

auxGastos = auxGastos - acum;


alert('para ahorrar ' + ahorro + ' necesitas reducir tus gastos $'+ auxGastos);

