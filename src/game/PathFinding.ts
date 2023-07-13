import { invalidTileIndicesBolt } from "../config/sprite";
import LevelScene from "./LevelScene";
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
  scene: LevelScene; 

  constructor(scene: LevelScene, w: number, h: number) {
    this.scene = scene 
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

  public main(){
    this.crearMatriz()
    this.crearInicio(this.scene.meanie[0])
    this.crearTarget(this.scene.player)
    this.crearVecinos()
    this.crearOpenSet()
    console.log("inicio: ",this.inicio)
    console.log("target: ",this.target)
    console.log("openSet: ",this.openSet)
    this.algoritmo()
    console.log("camino: ",this.camino)
    console.log("terminado: ",this.terminado)
  }
  

  public crearMatriz() {
    for (let i = 0; i < this.height; i++) {
      this.matriz[i] = [];
      for (let j = 0; j < this.width; j++) {
        let x = 56 + 16*j;
        let y = 56 + 16*i;
        this.matriz[i][j] = new State(x, y);
        const tile = this.scene.map.getTileAtWorldXY(x, y, true);
        const invalidTileIndices = new Set(invalidTileIndicesBolt);
        if (invalidTileIndices.has(tile.index)) {
          this.matriz[i][j].type = 1
        }
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

  public crearInicio(meanie : Meanie) { 
    //Meanie
    let fila_i = (meanie.y-56)/16
    let columna_j = (meanie.x-56)/16
    this.inicio =  this.matriz[fila_i][columna_j];
  }

  public crearTarget(player : Player) {
    //Player
    let fila_i = (player.y-56)/16
    let columna_j = (player.x-56)/16
    this.target = this.matriz[fila_i][columna_j];
  }

  public crearOpenSet(){
    const newOpenSet : State[] = this.openSet
    newOpenSet.push(this.inicio)
    this.openSet = newOpenSet
  }

  public heuristica(a: State,b :State){
    let x = Math.abs(a.x - b.x);
    let y = Math.abs(a.y - b.y);
    let dist = x+y;
    return dist;
  }

  public algoritmo() {
    if(!this.terminado){
      if(this.openSet.length > 0){
        let indexGanador = 0

        for(let i=0; i<this.openSet.length; i++){
          if(this.openSet[i].f < this.openSet[indexGanador].f){
            indexGanador = i;
          }
        }

        let actual = this.openSet[indexGanador]

        if(actual === this.target){
          let temp = actual
          const newCamino : State[] = this.camino
          newCamino.push(temp)
          this.camino = newCamino
          while(temp.parent != null){
            temp = temp.parent;
            newCamino.push(temp)
            this.camino = newCamino
          }
          this.terminado = true
        }else{
          let newOpenSet : State[] = this.openSet
          newOpenSet.filter(s => s !== actual)
          this.openSet = newOpenSet

          let newCloseSet : State[] = this.closeSet
          newCloseSet.push(actual)
          this.closeSet = newCloseSet

          let vecinos = actual.neighbors
          for(let i=0; i< vecinos.length; i++){
            var vecino = vecinos[i];
  
            //SI EL VECINO NO ESTÁ EN CLOSEDSET Y NO ES UNA PARED, HACEMOS LOS CÁLCULOS
            if(!this.closeSet.includes(vecino) && vecino.type!=1){
              let tempG = actual.g + 1;
  
              //si el vecino está en OpenSet y su peso es mayor
              if(this.openSet.includes(vecino)){
                if(tempG < vecino.g){
                  vecino.g = tempG;     //camino más corto
                }
              }
              else{
                vecino.g = tempG;
                let newOpenSet : State[] = this.openSet
                newOpenSet.push(vecino)
                this.openSet = newOpenSet 
              }
  
              //ACTUALIZAMOS VALORES
              vecino.h = this.heuristica(vecino,this.target);
              vecino.f = vecino.g + vecino.h;
  
              //GUARDAMOS EL PADRE (DE DÓNDE VENIMOS)
              vecino.parent = actual;
  
            }
        }
      } 
    }else{
      console.log('No hay un camino posible');
      this.terminado = true;
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
