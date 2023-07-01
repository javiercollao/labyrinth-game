import { meanie } from "../config/sprite";
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Meanie extends Character {
    closedSet: never[];
    openSet: never[];

    constructor(scene : LevelScene, x : number, y : number) {
        super(scene, x, y); 
        this.anims.create({key:'meanie', frames:meanie, repeat:-1})
        this.anims.play('meanie')
        this.openSet = [];
        this.closedSet = [];
    }

    public behavior(){

    }


    public heuristica() : number{
        let x = Math.abs(this.x - this.scene.player.x);
        let y = Math.abs(this.y - this.scene.player.y);
    
        let dist = x+y;
        
        return(dist);
    }
}