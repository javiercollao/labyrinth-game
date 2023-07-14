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
      this.algoritmo()
      console.log("inicio: ",this.inicio)
      console.log("target: ",this.target)
      console.log("openSet: ",this.openSet)
      console.log("closeSet: ",this.closeSet)
      console.log("camino: ",this.camino)
      console.log("terminado: ",this.terminado)

      setInterval(() => {
        this.algoritmo() 

        this.crearTarget(this.scene.player)
      }, 100);
       

    
    
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
    let x = Math.abs(((a.x-56)/16) - ((b.x-56)/16));
    let y = Math.abs(((a.y-56)/16) - ((b.y-56)/16));
    let dist = x+y;
    return dist;
  }

  public algoritmo() {
    if(!this.terminado){
      if(this.openSet.length > 0){
        let indexGanador = 0

        for(let i=0; i<this.openSet.length; i++){
          if(this.openSet[i].f <= this.openSet[indexGanador].f){
            indexGanador = i;
          }
        }

        // Estado ganador
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

          let newOpenSet : State[] = []
 
          newOpenSet.filter(s => s.x !== actual.x && s.y !== actual.y)
          this.openSet = newOpenSet

          let newCloseSet : State[] = this.closeSet
          newCloseSet.push(actual)
          this.closeSet = newCloseSet


          let vecinos = actual.neighbors
          for(let i=0; i< vecinos.length; i++){
            let vecino = vecinos[i];
  
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

              this.scene.meanie[0].x= actual.x
              this.scene.meanie[0].y= actual.y
  
            }
        }
      } 
    }else{
      console.log('No hay un camino posible');
  
      this.crearMatriz()
      this.crearInicio(this.scene.meanie[0])
      this.crearTarget(this.scene.player)
      this.crearVecinos()
      this.crearOpenSet()
      this.terminado = false
      
    } 
    
  }
  }

}

 
