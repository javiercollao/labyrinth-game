import { meanie } from "../config/sprite";
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Meanie extends Character {

    constructor(scene : LevelScene, x : number, y : number) {
        super(scene, x, y); 
        this.anims.create({key:'meanie', frames:meanie, repeat:-1})
        this.anims.play('meanie')
    }

}