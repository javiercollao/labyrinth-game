import { invalidTileIndicesMeanie } from "../config/sprite";
import LevelScene from "./LevelScene"; 
import State from "./State";
 
export default class PathFinding {
  width: number;
  height: number;
  matriz: State[][] | []; 
  scene: LevelScene; 

  constructor(scene: LevelScene, w: number, h: number) {
    this.scene = scene 
    this.width = w;
    this.height = h;
    this.matriz = [];
    this.crearMatriz(); 
  }

  public main(){
      this.crearMatriz()
      this.crearVecinos()
  }
   
  public crearMatriz() {
    for (let i = 0; i < this.height; i++) {
      this.matriz[i] = [];
      for (let j = 0; j < this.width; j++) {
        let x = 56 + 16*j;
        let y = 56 + 16*i;
        this.matriz[i][j] = new State(x, y);
        const tile = this.scene.map.getTileAtWorldXY(x, y, true);
        const invalidTileIndices = new Set(invalidTileIndicesMeanie);
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
}

 
