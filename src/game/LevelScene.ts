import { LevelConfig, tiles } from "../config/level"; 
import Inputs from "./Inputs";
import Player from "./Player";

 
export default class LevelScene extends Phaser.Scene{
    public inputs!: Inputs;
    private config: LevelConfig;
    player!: Player;

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
      
      const map = this.make.tilemap(tiles);

      const laberynth = map.addTilesetImage('sprites2', 'levelTiles');
      const layer = map.createLayer(this.config.levelNumber, laberynth, 0, 0);
      layer.setDepth(1)

      const container = map.addTilesetImage('principal','mainGame')
      const gameContainer = map.createLayer('static', container, 0, 0);
      gameContainer.setDepth(2)

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
    
}