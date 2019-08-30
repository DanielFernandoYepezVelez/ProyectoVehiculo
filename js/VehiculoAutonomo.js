const encenderVehiculo = document.getElementById('encender');
const apagarVehiculo = document.getElementById('apagar');

const estacionarias = document.getElementById('estacionarias');
const derecha = document.getElementById('derecha');
const izquierda = document.getElementById('izquierda');

const neutra = document.getElementById('neutra');
const primera = document.getElementById('primera');
const segunda = document.getElementById('segunda');
const tercera = document.getElementById('tercera');
const cuarta = document.getElementById('cuarta');
const quinta = document.getElementById('quinta');
const sexta = document.getElementById('sexta');
const reversar = document.getElementById('reversa');
const frenoDeMano = document.getElementById('frenoDeMano');

const clouch = document.getElementById('clouch');
const freno = document.getElementById('freno');
const arranque = document.getElementById('arranque');

const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const cuerpo = document.getElementById('cuerpo');
let contadorMinutos = 0;
let contadorSegundos = 0;
let cronometro = 0;

let distanciaRecorrida = 60;
let tiempoTrayecto = contadorMinutos;
let velocidad = distanciaRecorrida / tiempoTrayecto;

class Vehiculo {
    constructor() {
        this.acumuladorCambio = 0;
        this.estadoNeutra = false;
        this.estadoPrimera = false;
        this.estadoSegunda = false;
        this.estadoTercera = false;
        this.estadoCuarta = false;
        this.estadoQuinta = false;
        this.estadoSexta = false;
        this.estadoReversa = false;
        this.frenoMano = false;

        this.add = 1000;
        this.DOM = 1100;
        this.remove = 3000;

        this.tiempoCompleto();
        this.frenoDeMano();
        this.clouch();
        this.neutra();
        this.clouch();
        this.encender();
        this.freno();
        this.clouch();
        this.primera();
        this.frenoDeMano();
        this.freno();
        this.arranque();
        this.clouch();
        this.tiempoRevoluciones();
        this.clouch();
        this.arranque();
        this.segunda();
        this.arranque();
        this.clouch();
        this.tiempoRevoluciones();
        this.clouch();
        this.arranque();
        this.clouch();
        this.tercera();
        this.arranque();
        this.clouch();
        this.tiempoRevoluciones();
        this.clouch();
        this.arranque();
        this.cuarta();
        this.arranque();
        this.clouch();
        this.tiempoRevoluciones();
        this.clouch();
        this.arranque();
        this.quinta();
        this.arranque();
        this.clouch();
        this.tiempoRevoluciones();
        this.clouch();
        this.arranque();
        this.sexta();
        this.arranque();
        this.clouch();
        this.tiempoRevoluciones();
        this.clouch2();
        this.arranque2();
        this.freno2();
        this.deSextaAquinta();
        this.dequintaACuarta();
        this.deCuartaAtercera();
        this.deTerceraAsegunda();
        this.deSegundaAprimera();
        this.dePrimeraAneutra();
        this.soltandoClouch2();
        this.soltarFreno2();
        this.apagar();

        this.derechaDown();
        this.izquierdaDown();
        this.derechaUp();
        this.izquierdaUp()
    }

    interactividadDOM2(textNode = ' ', color = ' ', indice = 1) {
        let creandoElemento = document.createElement('p');
        let creandoContenido = document.createTextNode(textNode);
        creandoElemento.appendChild(creandoContenido);
        creandoElemento.style.color = color;
        let posicion = document.getElementsByClassName('barraLateral')[indice];
        posicion.appendChild(creandoElemento);
    }

    interactividadDOM(textNode = ' ', color = ' ', indice = 0) {
        let creandoElemento = document.createElement('p');
        let creandoContenido = document.createTextNode(textNode);
        creandoElemento.appendChild(creandoContenido);
        creandoElemento.style.color = color;
        let posicion = document.getElementsByClassName('barraLateral')[indice];
        posicion.appendChild(creandoElemento);
    }

    tiempoRevoluciones() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => arranque.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Acelerando............................', 'red'), this.DOM);
        setTimeout(() => arranque.classList.remove('iluminacion'), this.remove);
    }

    frenoDeMano() {
        if (!this.frenoMano) {
            this.add = this.remove + 300;
            this.DOM = this.add + 100;
            this.remove += 2300;
            setTimeout(() => frenoDeMano.classList.add('iluminacion'), this.add);
            setTimeout(() => this.interactividadDOM('Freno De Mano Arriba', 'green'), this.DOM);
            setTimeout(() => frenoDeMano.classList.remove('iluminacion'), this.remove);
            this.frenoMano = true;

        } else {
            this.add = this.remove + 300;
            this.DOM = this.add + 100;
            this.remove += 2300;
            setTimeout(() => frenoDeMano.classList.add('iluminacion'), this.add);
            setTimeout(() => this.interactividadDOM('Freno De Mano Abajo', 'green'), this.DOM);
            setTimeout(() => frenoDeMano.classList.remove('iluminacion'), this.remove);
        }
    }

    presionandoClouch() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => clouch.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Presionando Clouch', 'green'), this.DOM);
        setTimeout(() => clouch.classList.remove('iluminacion'), this.remove);
    }

    presionandoClouch2() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => clouch.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Presionando Clouch', 'green'), this.DOM);
        setTimeout(() => clouch.classList.remove('iluminacion'), this.remove);
    }

    soltandoClouch() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => clouch.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Soltando Clouch', 'green'), this.DOM);
        setTimeout(() => clouch.classList.remove('iluminacion'), this.remove);
        this.acumuladorCambio += 1;
    }

    soltandoClouch2() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => clouch.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Soltando Clouch', 'green'), this.DOM);
        setTimeout(() => clouch.classList.remove('iluminacion'), this.remove);
        this.acumuladorCambio -= 1;
    }

    reversa() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => reversar.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Aplicando Reversa', 'green'), this.DOM);
        setTimeout(() => reversar.classList.remove('iluminacion'), this.remove);
        this.estadoReversa = true;
    }

    clouch2() {
        if (this.acumuladorCambio === 7 && this.estadoSexta === true) {
            this.presionandoClouch2();

        } else if (this.acumuladorCambio === 7 && this.estadoNeutra === true) {
            this.soltandoClouch2();
        }
    }

    clouch() {
        if (this.acumuladorCambio === 0 && this.estadoNeutra === false) {
            this.presionandoClouch();

        } else if (this.acumuladorCambio === 0 && this.estadoNeutra === true) {
            this.soltandoClouch();

        } else if (this.acumuladorCambio === 1 && this.estadoPrimera === false) {
            this.presionandoClouch();

        } else if (this.acumuladorCambio === 1 && this.estadoPrimera === true) {
            this.soltandoClouch();

        } else if (this.acumuladorCambio === 2 && this.estadoSegunda === false) {
            this.presionandoClouch();

        } else if (this.acumuladorCambio === 2 && this.estadoSegunda === true) {
            this.soltandoClouch();

        } else if (this.acumuladorCambio === 3 && this.estadoTercera === false) {
            this.presionandoClouch();

        } else if (this.acumuladorCambio === 3 && this.estadoTercera === true) {
            this.soltandoClouch();

        } else if (this.acumuladorCambio === 4 && this.estadoCuarta === false) {
            this.presionandoClouch();

        } else if (this.acumuladorCambio === 4 && this.estadoCuarta === true) {
            this.soltandoClouch();

        } else if (this.acumuladorCambio === 5 && this.estadoQuinta === false) {
            this.presionandoClouch();

        } else if (this.acumuladorCambio === 5 && this.estadoQuinta === true) {
            this.soltandoClouch();

        } else if (this.acumuladorCambio === 6 && this.estadoSexta === false) {
            this.presionandoClouch();

        } else if (this.acumuladorCambio === 6 && this.estadoSexta === true) {
            this.soltandoClouch();
        }
    }

    neutra() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => neutra.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Aplicando Neutra', 'green'), this.DOM);
        setTimeout(() => neutra.classList.remove('iluminacion'), this.remove);
        this.estadoNeutra = true;
    }

    encender() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => encender.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Encendiendo Vehiculo', 'green'), this.DOM);
        setTimeout(() => encender.classList.remove('iluminacion'), this.remove);
    }

    apagar() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => apagar.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Apagando Vehiculo', 'green'), this.DOM);
        setTimeout(() => apagar.classList.remove('iluminacion'), this.remove);
    }

    freno() {
        if (this.acumuladorCambio === 1 && this.estadoPrimera === true) {
            this.add = this.remove + 300;
            this.DOM = this.add + 100;
            this.remove += 2300;
            setTimeout(() => freno.classList.add('iluminacion'), this.add);
            setTimeout(() => this.interactividadDOM('Soltando Freno', 'green'), this.DOM);
            setTimeout(() => freno.classList.remove('iluminacion'), this.remove);

        } else {
            this.add = this.remove + 300;
            this.DOM = this.add + 100;
            this.remove += 2300;
            setTimeout(() => freno.classList.add('iluminacion'), this.add);
            setTimeout(() => this.interactividadDOM('Presionando Freno', 'green'), this.DOM);
            setTimeout(() => freno.classList.remove('iluminacion'), this.remove);
        }
    }

    soltarFreno2() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => freno.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Soltando Freno', 'green'), this.DOM);
        setTimeout(() => freno.classList.remove('iluminacion'), this.remove);
    }

    freno2() {
        if (this.acumuladorCambio === 1 && this.estadoPrimera === true) {
            this.add = this.remove + 300;
            this.DOM = this.add + 100;
            this.remove += 2300;
            setTimeout(() => freno.classList.add('iluminacion'), this.add);
            setTimeout(() => this.interactividadDOM2('Soltando Freno', 'green'), this.DOM);
            setTimeout(() => freno.classList.remove('iluminacion'), this.remove);

        } else {
            this.add = this.remove + 300;
            this.DOM = this.add + 100;
            this.remove += 2300;
            setTimeout(() => freno.classList.add('iluminacion'), this.add);
            setTimeout(() => this.interactividadDOM2('Presionando Freno', 'green'), this.DOM);
            setTimeout(() => freno.classList.remove('iluminacion'), this.remove);
        }
    }

    soltandoAcelerador() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => arranque.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Soltando Acelerador', 'green'), this.DOM);
        setTimeout(() => arranque.classList.remove('iluminacion'), this.remove);
    }

    soltandoAcelerador2() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => arranque.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Soltando Acelerador', 'green'), this.DOM);
        setTimeout(() => arranque.classList.remove('iluminacion'), this.remove);
    }

    arranque2() {
        if (this.acumuladorCambio === 7 && this.estadoSexta === true) {
            this.soltandoAcelerador2();
        }
    }

    arranque() {
        if (this.acumuladorCambio === 2 && this.estadoSegunda === false) {
            this.soltandoAcelerador();

        } else if (this.acumuladorCambio === 3 && this.estadoTercera === false) {
            this.soltandoAcelerador();

        } else if (this.acumuladorCambio === 4 && this.estadoCuarta === false) {
            this.soltandoAcelerador();

        } else if (this.acumuladorCambio === 5 && this.estadoQuinta === false) {
            this.soltandoAcelerador();

        } else if (this.acumuladorCambio === 6 && this.estadoSexta === false) {
            this.soltandoAcelerador();

        } else {
            this.add = this.remove + 300;
            this.DOM = this.add + 100;
            this.remove += 2300;
            setTimeout(() => arranque.classList.add('iluminacion'), this.add);
            setTimeout(() => this.interactividadDOM('Presionando Acelerador', 'green'), this.DOM);
            setTimeout(() => arranque.classList.remove('iluminacion'), this.remove);
        }
    }

    primera() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => primera.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Pasando De Neutra A Primera', 'green'), this.DOM);
        setTimeout(() => primera.classList.remove('iluminacion'), this.remove);
        this.estadoPrimera = true;
    }

    dePrimeraAneutra() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => neutra.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Pasando De Primera A Neutra', 'green'), this.DOM);
        setTimeout(() => neutra.classList.remove('iluminacion'), this.remove);
        this.estadoPrimera = false;
    }

    segunda() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => segunda.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Pasando De Primera A Segunda', 'green'), this.DOM);
        setTimeout(() => segunda.classList.remove('iluminacion'), this.remove);
        // this.acumuladorCambio += 1;
        this.estadoSegunda = true;
    }

    deSegundaAprimera() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => primera.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Pasando De Segunda A Primera', 'green'), this.DOM);
        setTimeout(() => primera.classList.remove('iluminacion'), this.remove);
        // this.acumuladorCambio += 1;
        this.estadoSegunda = false;
    }

    tercera() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => tercera.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Pasando De Segunda A Tercera', 'green'), this.DOM);
        setTimeout(() => tercera.classList.remove('iluminacion'), this.remove);
        // this.acumuladorCambio += 1;
        this.estadoTercera = true;
    }

    deTerceraAsegunda() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => segunda.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Pasando De Tercera A Segunda', 'green'), this.DOM);
        setTimeout(() => segunda.classList.remove('iluminacion'), this.remove);
        // this.acumuladorCambio += 1;
        this.estadoTercera = false;
    }

    cuarta() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => cuarta.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Pasando De Tercera A Cuarta', 'green'), this.DOM);
        setTimeout(() => cuarta.classList.remove('iluminacion'), this.remove);
        // this.acumuladorCambio += 1;
        this.estadoCuarta = true;
    }

    deCuartaAtercera() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => tercera.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Pasando De Cuarta A Tercera', 'green'), this.DOM);
        setTimeout(() => tercera.classList.remove('iluminacion'), this.remove);
        // this.acumuladorCambio += 1;
        this.estadoCuarta = false;
    }

    quinta() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => quinta.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Pasando De Cuarta A Quinta', 'green'), this.DOM);
        setTimeout(() => quinta.classList.remove('iluminacion'), this.remove);
        // this.acumuladorCambio += 1;
        this.estadoQuinta = true;
    }

    dequintaACuarta() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => cuarta.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Pasando De Quinta A Cuarta', 'green'), this.DOM);
        setTimeout(() => cuarta.classList.remove('iluminacion'), this.remove);
        // this.acumuladorCambio += 1;
        this.estadoQuinta = false;
    }

    sexta() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => sexta.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM('Pasando De Quinta A Sexta', 'green'), this.DOM);
        setTimeout(() => sexta.classList.remove('iluminacion'), this.remove);
        // this.acumuladorCambio += 1;
        this.estadoSexta = true;
    }

    deSextaAquinta() {
        this.add = this.remove + 300;
        this.DOM = this.add + 100;
        this.remove += 2300;
        setTimeout(() => quinta.classList.add('iluminacion'), this.add);
        setTimeout(() => this.interactividadDOM2('Pasando De Sexta A Quinta', 'green'), this.DOM);
        setTimeout(() => quinta.classList.remove('iluminacion'), this.remove);
        // this.acumuladorCambio += 1;
        this.estadoSexta = false;
    }

    derechaDown() {
        const girandoVehiculoDerecha = (evento) => {
            if (evento.keyCode === 39) {
                derecha.style.background = 'orange';
                derecha.style.color = 'yellow';
            }
        }
        document.addEventListener('keydown', girandoVehiculoDerecha);
    }

    derechaUp() {
        const girandoVehiculoDerecha = (evento) => {
            if (evento.keyCode === 39) {
                this.interactividadDOM('Girando A La Derecha', 'orange', 2);
                derecha.style.background = 'white';
                derecha.style.color = 'black';
            }
        }
        document.addEventListener('keyup', girandoVehiculoDerecha);
    }

    izquierdaDown() {
        const girandoVehiculoDerecha = (evento) => {
            if (evento.keyCode === 37) {
                izquierda.style.background = 'orange';
                izquierda.style.color = 'yellow';
            }
        }
        document.addEventListener('keydown', girandoVehiculoDerecha);
    }

    izquierdaUp() {
        const girandoVehiculoDerecha = (evento) => {
            if (evento.keyCode === 37) {
                this.interactividadDOM('Girando A La Izquierda', 'orange', 2);
                izquierda.style.background = 'white';
                izquierda.style.color = 'black';
            }
        }
        document.addEventListener('keyup', girandoVehiculoDerecha);
    }

    detenerTiempo() {
        if (contadorMinutos === 2 && contadorSegundos === 12) {
            clearInterval(cronometro);
        }
    }

    tiempoCompleto() {
        const carga = () => {
            if (contadorSegundos == 60) {
                contadorSegundos = 0;
                contadorMinutos++;
                minutos.innerHTML = contadorMinutos;

                if (contadorMinutos == 60) {
                    contadorMinutos = 0;
                }
            }
            segundos.innerHTML = contadorSegundos;
            contadorSegundos++;

            this.detenerTiempo();
        }
        cronometro = setInterval(carga, 1000);
    }
}
let automovil = new Vehiculo();