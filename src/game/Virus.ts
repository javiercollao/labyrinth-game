import { invalidTileIndicesVirus, virus } from "../config/sprite";
import Character from "./Character";
import LevelScene from "./LevelScene";

export default class Virus extends Character {
    previousPositionX: number; 
    previousPositionY: number;

    constructor(scene : LevelScene, x : number, y : number) {
        super(scene, x, y); 
        this.previousPositionX = 0;
        this.previousPositionY = 0;
        this.anims.create({key:'virus', frames:virus, repeat:-1})
        this.anims.play('virus')
        this.checkingTileToRightFromPosition(invalidTileIndicesVirus)
        this.checkingTileToLeftFromPosition(invalidTileIndicesVirus)
        this.checkingTileToUpFromPosition(invalidTileIndicesVirus)
        this.checkingTileToDownFromPosition(invalidTileIndicesVirus)
    }

    public behavior(){
        if(this.getMoveLeft() && this.getMoveDown()){
            this.previousPositionX = this.x
            this.previousPositionY = this.y
            this.setX(this.x-16)
        }else if(this.getMoveLeft() && this.getMoveRight()){
            if(this.x < this.previousPositionX){
                this.previousPositionX = this.x
                this.previousPositionY = this.y
                this.setX(this.x-16)
            }else{
                this.previousPositionX = this.x
                this.previousPositionY = this.y
                this.setX(this.x+16)
            }
        }else if(this.getMoveRight() && this.getMoveDown()){
            this.previousPositionX = this.x
            this.previousPositionY = this.y
            this.setY(this.y+16)
        }else if(this.getMoveUp() && this.getMoveDown()){
            if(this.y < this.previousPositionY){
                this.previousPositionX = this.x
                this.previousPositionY = this.y
                this.setY(this.y-16)
            }else{
                this.previousPositionX = this.x
                this.previousPositionY = this.y
                this.setY(this.y+16)
            }
        }else if(this.getMoveRight() && this.getMoveUp()){
            this.previousPositionX = this.x
            this.previousPositionY = this.y
            this.setX(this.x+16)
        }else if(this.getMoveLeft() && this.getMoveUp()){
            this.previousPositionX = this.x
            this.previousPositionY = this.y
            this.setY(this.y-16)
        }
        this.checkingTileToRightFromPosition(invalidTileIndicesVirus)
        this.checkingTileToLeftFromPosition(invalidTileIndicesVirus)
        this.checkingTileToUpFromPosition(invalidTileIndicesVirus)
        this.checkingTileToDownFromPosition(invalidTileIndicesVirus)
    }


    main(){

        // cambiar a un while hasta que muera player
        setInterval(() => { 
            this.behavior()
          }, 400);
    }


}