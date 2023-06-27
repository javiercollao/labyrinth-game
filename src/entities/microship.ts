 
import PlayGame from "~/scenes/play-game";
import { microship } from "../config/gameOptions";
import Character from "./character";


export default class Microship extends Character {
    public scene!: PlayGame;
  
    constructor(scene: PlayGame, x: number, y: number) {
        super(scene, x, y, 'microship');
        scene.add.existing(this); 
        this.anims.create({key:'microship', frames:microship, repeat:-1});
    }
   
    animation(): void {
        this.play('microship');
    }

    remove(): void{
        this.destroy()
    }
}