 
import { tiles,levelTesting } from "../config/level"; 
import Bolt from "./Bolt";
import Byte from "./Byte";
import Door from "./Door";
import Floppy from "./Floppy";
import Inputs from "./Inputs";
import Meanie from "./Meanie";
import Microchip from "./Microchip";
import Player from "./Player";
import Virus from "./Virus";


 
export default class LevelScene extends Phaser.Scene{
    public inputs!: Inputs
    public player!: Player
    public map!: Phaser.Tilemaps.Tilemap
    public config: any
    public door!: Door
    public bolt!: Bolt[]
    public microchip!: Microchip[]
    public byte!: Byte[]
    public floppy!: Floppy[]
    public virus!: Virus[]
    public meanie!: Meanie[]

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

      // Player
      this.player = new Player(this, this.positionHorizontal(this.config.player.x),this.positionVertical(this.config.player.y))

      // Door
      this.door = new Door(this,this.positionHorizontal(this.config.door.x),this.positionVertical(this.config.door.y))
      
      // Bolt
      const bolts = this.config.items.bolt
      this.bolt = bolts.map((bolt) => new Bolt(this, this.positionHorizontal(bolt.x), this.positionVertical(bolt.y)))

      // Items
      const microchips = this.config.items.microchip
      this.microchip = microchips.map((microchip) => new Microchip(this, this.positionHorizontal(microchip.x), this.positionVertical(microchip.y)))
      
      const bytes = this.config.items.byte
      this.byte = bytes.map((byte) =>  new Byte(this, this.positionHorizontal(byte.x), this.positionVertical(byte.y)))

      const floppys = this.config.items.floppy
      this.floppy = floppys.map((floppy) =>  new Floppy(this, this.positionHorizontal(floppy.x), this.positionVertical(floppy.y)))

      // Enemies
      const virus = this.config.items.virus
      this.virus = virus.map((virus) => new Virus(this, this.positionHorizontal(virus.x), this.positionVertical(virus.y)))
      
      const meanies = this.config.items.meanie
      this.meanie = meanies.map((meanie) => new Meanie(this, this.positionHorizontal(meanie.x), this.positionVertical(meanie.y)))
      
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