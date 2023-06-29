 
import { tiles,levelTesting } from "../config/level"; 
import Door from "./Door";
import Inputs from "./Inputs";
import Player from "./Player";

 
export default class LevelScene extends Phaser.Scene{
    public inputs!: Inputs; 
    player!: Player;
    map!: Phaser.Tilemaps.Tilemap;
    config: any;
    door!: Door;

    constructor(config : any) {
        super({
          key : config.key
        })
        this.config = config 
    }

    public init() {
      this.inputs = new Inputs(this);
    }
    
    public create (): void {  
      
      this.map = this.make.tilemap(tiles)
      
      const container = this.map.addTilesetImage('principal','mainGame')
      const gameContainer = this.map.createLayer('static', container, 0, 0)
      gameContainer.setDepth(2)

      const laberynth = this.map.addTilesetImage('sprites2', 'levelTiles')
      const layer = this.map.createLayer(this.config.levelNumber, laberynth, 0, 0)
      layer.setDepth(1)


      this.player = new Player(this, this.positionHorizontal(this.config.player.x),this.positionVertical(this.config.player.y))
      this.door = new Door(this,this.positionHorizontal(this.config.door.x),this.positionVertical(this.config.door.y))

      this.update(3, 33)
  
    }

    public update(time: number, delta: number): void {
      this.player.behavior()
      this.handlePlayerDoorCollision()

    }

    public positionHorizontal(tile: number): number {
      return this.config.tileWidth* (tile + .5);
    }
    
    public positionVertical(tile: number): number {
      return this.config.tileHeigth * (tile + .5);
    }

    // Collisions

    public handlePlayerDoorCollision(){ 
        if (this.door.y === this.player.y && this.player.x  === this.door.x ) {
            this.scene.start(levelTesting)
        }
    }
}