import { tileType } from "../config/sprite";
import { LevelConfig, tiles } from "../config/level"; 
import Inputs from "./Inputs";
import Player from "./Player";

 
export default class LevelScene extends Phaser.Scene{
    public inputs!: Inputs;
    private config: LevelConfig;
    player!: Player;
    map!: Phaser.Tilemaps.Tilemap;

    constructor(config : LevelConfig) {
        super({
          key : config.key
        })
        this.config = config 
    }

    public init() {
      this.inputs = new Inputs(this);
    }
    
    public create (): void {  
      
      this.map = this.make.tilemap(tiles);
      
      const container = this.map.addTilesetImage('principal','mainGame')
      const gameContainer = this.map.createLayer('static', container, 0, 0);
      gameContainer.setDepth(2)

      const laberynth = this.map.addTilesetImage('sprites2', 'levelTiles');
      const layer = this.map.createLayer(this.config.levelNumber, laberynth, 0, 0);
      layer.setDepth(1)


      this.player = new Player(this, this.positionHorizontal(4),this.positionVertical(4));
      this.update(3, 33)
  
    }

    public update(time: number, delta: number): void {
      this.player.behavior()

    }

    public positionHorizontal(tile: number): number {
      return this.config.tileWidth* (tile + .5);
    }
    
    public positionVertical(tile: number): number {
      return this.config.tileHeigth * (tile + .5);
    }

    // Collisions

    
}