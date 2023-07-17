import { meanie } from "../config/sprite";
import Character from "./Character";
import LevelScene from "./LevelScene";
import State from "./State";

export default class Meanie extends Character {
   
  inicio: State | null;
  target: State | null;
  openSet: State[]
  closeSet: State[];
  terminado: boolean;
  camino: State[]; 
  matriz: State[][] | []; 

    constructor(scene : LevelScene, x : number, y : number) {
        super(scene, x, y); 
        this.anims.create({key:'meanie', frames:meanie, repeat:-1})
        this.anims.play('meanie') 
        this.matriz = this.scene.pathFinding.matriz
        this.inicio = null;
        this.target = null;
        this.openSet = []
        this.closeSet = []
        this.terminado = false
        this.camino = []
        this.main()
    }

    public crearInicio() {  
      let fila_i = (this.y-56)/16
      let columna_j = (this.x-56)/16
      this.inicio =  this.matriz[fila_i][columna_j];
    }

    public crearTarget() { 
      let fila_i = (this.scene.player.y-56)/16
      let columna_j = (this.scene.player.x-56)/16
      this.target = this.matriz[fila_i][columna_j];
    }

    public crearOpenSet(){
      const newOpenSet : State[] | any = this.openSet 
      newOpenSet.push(this.inicio); 
      this.openSet = newOpenSet
    }

    public heuristica(a: State | any,b :State | any){
      let x = Math.abs(((a.x-56)/16) - ((b.x-56)/16));
      let y = Math.abs(((a.y-56)/16) - ((b.y-56)/16));
      let dist = x+y;
      return dist;
    }

    public behavior() {

      this.scene.pathFinding.crearMatriz()
        if(!this.terminado){

          if(this.openSet.length > 0){
            let indexGanador = 0
    
            for(let i=0; i<this.openSet.length; i++){
              if(this.openSet[i].f <= this.openSet[indexGanador].f){
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
              this.x = actual.x
              this.y = actual.y
                
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
      
                 
                if(!this.closeSet.includes(vecino) && vecino.type!=1){
                  let tempG = actual.g + 1;
        
                  if(this.openSet.includes(vecino)){
                    if(tempG < vecino.g){
                      vecino.g = tempG; 
                    }
                  }
                  else{
                    vecino.g = tempG;
                    let newOpenSet : State[] = this.openSet
                    newOpenSet.push(vecino)
                    this.openSet = newOpenSet 
                  }
       
                    vecino.h = this.heuristica(vecino,this.target);
                 
                  vecino.f = vecino.g + vecino.h;
       
                  vecino.parent = actual;
    
                  this.x = actual.x
                  this.y = actual.y
      
                }
            }
          } 
        }else{
          console.log('No hay un camino posible');  
          this.crearInicio()
          this.crearTarget()
          this.scene.pathFinding.crearVecinos()
          this.crearOpenSet() 
          this.behavior()
          this.terminado = false
        } 
      } 
    }
    
    public main() {
      this.scene.pathFinding.crearMatriz()
      this.crearInicio()
      this.crearTarget()
      this.scene.pathFinding.crearVecinos()
      this.crearOpenSet()
      this.behavior() 

      setInterval(() => {
        this.behavior() 
        this.crearTarget()
      }, 400);
       
    }
}