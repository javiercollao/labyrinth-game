import Meanie from "./Meanie";
import Player from "./Player";
import State from "./State";

 
export default class PathFinding {
  width: number;
  height: number;
  matriz: State[][] | [];
  inicio: any | null;
  target: any | null;
  openSet: State[]
  closeSet: State[];
  terminado: boolean;
  camino: State[];

  constructor(w: number, h: number) {
    this.width = w;
    this.height = h;
    this.matriz = [];
    this.crearMatriz();
    this.inicio = null;
    this.target = null;
    this.openSet = []
    this.closeSet = []
    this.terminado = false
    this.camino = []
  }

  public crearMatriz() {
    for (let i = 0; i < this.height; i++) {
      this.matriz[i] = [];
      for (let j = 0; j < this.width; j++) {
        let x = 56 + 16*j;
        let y = 56 + 16*i;
        this.matriz[i][j] = new State(x, y);

      }
    }
  }

  public crearVecinos() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        let listNbrs: State[] = [];
        if(j > 0){
          listNbrs.push(this.matriz[i][j-1]);   //vecino izquierdo
        }

        if(j < this.width-1){
          listNbrs.push(this.matriz[i][j+1]);   //vecino derecho
        }

        if(i > 0){
          listNbrs.push(this.matriz[i-1][j]);   //vecino de arriba
        }

        if(i < this.height-1){ 
          listNbrs.push(this.matriz[i+1][j]); //vecino de abajo
        }

        this.matriz[i][j].addNeighbors(listNbrs);
      }
    }
  }

  public crearInicio(x : number, y : number) {
    console.log("inicioddd",x,y)
    //Meanie
    this.inicio =  this.matriz[y - 3][x - 3];
  }

  public crearTarget(x : number, y : number) {
    //Player
    this.target = this.matriz[y - 3][x - 3];
  }

  public crearOpenSet(){
    const newOpenSet : State[] = this.openSet
    newOpenSet.push(this.inicio)
    this.openSet = newOpenSet
  }

  public algoritmo(){
    if(!this.terminado){
      if(this.openSet.length > 0){
        let indexGanador = 0

        for(let i=0; i<this.openSet.length; i++){
          if(this.openSet[i].f < this.openSet[indexGanador].f){
            indexGanador = i;
          }
        }
      
      } 

    }


  }

}

 


 



// colaStates: State[];
// sucesores: State[];
// historial: State[];
// pasos: String[];
// index_pasos: number;
// inicial: State;
// objetivo: State;
// actual: State;
// entidad: State ;
// exito: boolean;
// enemigo: State;

// constructor() {
//   this.colaStates = [];
//   this.sucesores = [];
//   this.historial = [];
//   this.pasos = [];
//   this.index_pasos = 0;
//   this.inicial = new State(0, 0, "inicial", null)
//   this.objetivo = new State(0, 0, "", null)
//   this.actual = new State(0, 0, "", null)
//   this.entidad = new State(0, 0, "", null)
//   this.exito = false;
//   this.enemigo = new State(1, 3, "", null)
// }

// public busqueda(): void {
//   this.evaluar(this.inicial);
//   this.colaStates.push(this.inicial);
//   this.historial.push(this.inicial);

//   while (this.colaStates.length != 0 && !this.exito) {
//     this.actual = this.colaStates.shift();

//     if (this.objetivo.equals(this.actual)) {
//       this.objetivo = this.actual;
//       this.exito = true;
//     } else {
//       this.procesarSucesores(this.actual);
//     }
//   }

//   this.reconstruirSolucion();
// }

// public procesarSucesores(e: State): void {
//   this.calcularSucesores(e);

//   for (let i = 0; i < this.sucesores.length; i++) {
//     if (!this.historial.some((State) => State.equals(this.sucesores[i]))) {
//       this.colaStates.add(this.sucesores[i]);
//       this.historial.push(this.sucesores[i]);
//     } else {
//       const index = this.historial.findIndex((State) => State.equals(this.sucesores[i]));
//       const enHistorial = this.historial[index];

//       if (this.sucesores[i].f > enHistorial.f) {
//         enHistorial.f = this.sucesores[i].f;
//         enHistorial.g = this.sucesores[i].g;
//         enHistorial.h = this.sucesores[i].h;
//         enHistorial.predecesor = this.sucesores[i].predecesor;
//       }
//     }
//   }

//   this.sucesores = [];
// }

// public evaluar(nuevo: State): void {
//   nuevo.g = nuevo.distanciaEuclidea(this.enemigo);
//   nuevo.h = nuevo.distanciaEuclidea(this.objetivo);
//   nuevo.f = (0.9 * nuevo.g) + (0.1 * nuevo.h);
// }

// public calcularSucesores(e: State): void {
//   if (
//     e.y > 0 &&
//     entidad.mv.escenario.celdas[e.x][e.y - 1].tipo !== OBSTACULO &&
//     entidad.mv.escenario.celdas[e.x][e.y - 1].tipo !== ADVERSARIO
//   ) {
//     const arriba = new State(e.x, e.y - 1, "arriba", e);
//     this.evaluar(arriba);
//     this.sucesores.push(arriba);
//   }

//   if (
//     e.y < NUMERO_CELDAS_LARGO - 1 &&
//     entidad.mv.escenario.celdas[e.x][e.y + 1].tipo !== OBSTACULO &&
//     entidad.mv.escenario.celdas[e.x][e.y + 1].tipo !== ADVERSARIO
//   ) {
//     const abajo = new State(e.x, e.y + 1, "abajo", e);
//     this.evaluar(abajo);
//     this.sucesores.push(abajo);
//   }

//   if (
//     e.x > 0 &&
//     entidad.mv.escenario.celdas[e.x - 1][e.y].tipo !== OBSTACULO &&
//     entidad.mv.escenario.celdas[e.x - 1][e.y].tipo !== ADVERSARIO
//   ) {
//     const izq = new State(e.x - 1, e.y, "izquierda", e);
//     this.evaluar(izq);
//     this.sucesores.push(izq);
//   }

//   if (
//     e.x < NUMERO_CELDAS_ANCHO - 1 &&
//     entidad.mv.escenario.celdas[e.x + 1][e.y].tipo !== OBSTACULO &&
//     entidad.mv.escenario.celdas[e.x + 1][e.y].tipo !== ADVERSARIO
//   ) {
//     const der = new State(e.x + 1, e.y, "derecha", e);
//     this.evaluar(der);
//     this.sucesores.push(der);
//   }
// }

// public reconstruirSolucion(): void {
//   const solucion: Array<State> = [];
//   let aux: State | null = this.objetivo;

//   while (aux !== null) {
//     solucion.push(aux);
//     aux = aux.predecesor;
//   }

//   for (let i = solucion.length - 1; i >= 0; i--) {
//     this.pasos.push(solucion[i].oper);
//   }
// }

// public getPasos(): Array<string> {
//   return this.pasos;
// }
