import 'phaser' 
import { directions, tilesConfig, tileType, tilesObject} from '../config/gameOptions'
import Level from '../maps/level'; 
import Door from '../primary/door'; 
import Player from '../primary/player';
import Blob from '../enemies/blob';
import Meanie from '../enemies/meanie';
import Nanorobot from '../enemies/nanorobot';
import Virus from '../enemies/virus';
import Bolt from '../items/bolt';
import Byte from '../items/byte';
import Floppy from '../items/floppy';
import Microship from '../items/microship';
import Power from '../items/power';

const { LEFT, RIGHT, UP, DOWN } = directions

export default class PlayGame extends Phaser.Scene {
  
  player!: Player; 
  layer!: Phaser.Tilemaps.TilemapLayer; 
  level!: number;
  //capa!: Phaser.Tilemaps.TilemapLayer;
  map!: Level;
 
  constructor() {
    super({
      key :'PlayGame'
    })
    this.level = 0;
  }
   
  create () {
    // this.initLayer(); 
    // this.map = this.make.tilemap(tilesConfig) 
    // const tileset = this.map.addTilesetImage('sprites2','levelTiles')
  
    // this.layer = this.map.createLayer(1, tileset, 0, 0);

    this.map = new Level(this, this.level)
 
    this.map.init()
    this.map.setLevel(this.level)
    this.layer = this.map.getLayerGame()

    
    this.player = new Player(this, this.positionHorizontal(tilesObject[this.level].player.x), this.positionVertical(tilesObject[this.level].player.y));
    this.player.standAnimation()

    this.createDoor()
    this.createEnemies()
    this.createItems()
    // // this.Level1Objects()
 
    //this.player.setDepth(2)
    //this.layer.setDepth(0)
    //this.capa.setDepth(1) 
     
    this.canMove()
    this.checkTilePlayer()
    this.input.keyboard.on('keydown', this.handleKey, this)
    //this.input.on('pointerup', this.handleSwipe, this)
  }
  

  /**
   *  @desc Calcula la posicion de un tile horizontal
  **/
  positionHorizontal (tile: number) : number {
    return tilesConfig.tileWidth*tile+(tilesConfig.tileWidth/2)
  }

  /**
   *  @desc Calcula la posicion de un tile veritcal
  **/
  positionVertical (tile: number): number {
    return tilesConfig.tileHeight*tile+(tilesConfig.tileHeight/2)
  }
  
  /**
   *  @desc gestiona los mapas de cada nivel
  **/
  // initLayer() : void {
  //   const map = this.make.tilemap(tilesConfig) 
  //   const tilesetMain = map.addTilesetImage('principal','mainGame')  
  //   this.capa = map.createLayer('static', tilesetMain, 0, 0)
  //   const tileset = map.addTilesetImage('sprites2','levelTiles')
    
  //   switch(this.level){
  //       case 1: this.layer = map.createLayer('level1', tileset, 0, 0);
  //       break;
  //       case 2: this.setNewLayer('level2', 1, 1, map, tileset);
  //       break;
  //       case 3: this.setNewLayer('level3', 0, 12, map, tileset);
  //       break;
  //       case 4: this.setNewLayer('level4', 0, 0, map, tileset);
  //       break;
  //       case 5: this.setNewLayer('level5', 0, 13, map, tileset);
  //       break;
      
  //   }
  // }

  /**
   *  @desc Modifia el nivel del juego
  **/
  setLevel() : number {
    return this.level++;
  }

  /**
   *  @desc Actualiza el mapa del nivel actual y lo inicializa
  **/
  setNewLayer(name: string, posX: number, posY: number, map: Phaser.Tilemaps.Tilemap, tileset: Phaser.Tilemaps.Tileset) : void{
    this.layer.destroy(true)
    this.layer = map.createLayer(name, tileset, 0, 0)
    this.layer.setDepth(0)
    //this.capa.setDepth(1) 
    this.player.setPosition(this.positionHorizontal(posX), this.positionVertical(posY))
    this.canMove()
    this.checkTilePlayer()
  }
   
  /**
   *  @desc Gestiona los controles
  **/
  handleKey(e): void{
      switch (e.code) {
        case 'KeyA':
        case 'ArrowLeft':
          this.makeMove(LEFT)
          this.player.walkLeftAnimation();
          break
        case 'KeyD':
        case 'ArrowRight':
          this.makeMove(RIGHT)
          this.player.walkRightAnimation();
          break
        case 'KeyW':
        case 'ArrowUp':
          this.makeMove(UP)
          break
        case 'KeyS':
        case 'ArrowDown':
          this.makeMove(DOWN)
          break
      } 
  }

  // handleSwipe(e) {
  //   const swipeTime = e.upTime - e.downTime
  //   const swipe = new Phaser.Geom.Point(e.upX - e.downX, e.upY - e.downY)
  //   console.log(`Movement time: ${swipeTime}ms`)
  //   console.log(`Horizontal distance: ${swipe.x} pixels`)
  //   console.log(`Vertical distance: ${swipe.y} pixels`)   
  // }
 
  /**
   *  @desc Se encarga de mover al personaje principal en la escena
  **/
  makeMove(d): void{
    if(d === RIGHT && this.player.getCanMoveRight()){
      this.player.rightMovement()
      this.canMove()
      this.checkTilePlayer()
    }else if(d === LEFT && this.player.getCanMoveLeft()){
      this.player.leftMovement()
      this.canMove()
      this.checkTilePlayer()
    }else if(d === DOWN && this.player.getCanMoveDown()){
      this.player.downMovement()
      this.canMove()
      this.checkTilePlayer()
    }else if(d === UP && this.player.getCanMoveUp()){
      this.player.upMovement()
      this.canMove()
      this.checkTilePlayer()
    }
  }

  /**
   *  @desc Modifica los permisos del jugador de moverse a las casillas disponibles en la escena
  **/
  canMove(){
    this.nextTileRightIndex()
    this.nextTileLeftIndex()
    this.nextTileDownIndex()
    this.nextTileUpIndex()
  }

  nextTileRightIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.getNextRightPosition(), this.player.getPositionY(), true); 
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveRight(false) : this.player.setCanMoveRight(true)
  }

  nextTileLeftIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.getNextLeftPosition(), this.player.getPositionY(), true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveLeft(false) : this.player.setCanMoveLeft(true)
  }

  nextTileUpIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.getPositionX(), this.player.getNextUpPosition(), true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveUp(false) : this.player.setCanMoveUp(true)
  }

  nextTileDownIndex(){
    const tile = this.layer.getTileAtWorldXY(this.player.getPositionX(), this.player.getNextDownPosition(), true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveDown(false) : this.player.setCanMoveDown(true)
  }

  /**
   *  @desc Calcula la posicion de un tile horizontal
  **/
  checkTilePlayer(){
    const tile = this.layer.getTileAtWorldXY(this.player.getPositionX(), this.player.getPositionY(), true);

    if(tile.index === tileType.block.a || tileType.block.b || tile.index === 95 || tile.index === 0){
      this.layer.removeTileAtWorldXY(this.player.getPositionX(), this.player.getPositionY(),false)
    }

  }

  // Level1Objects(): void{
  //    // Puntos
  //    let p1 = new Point(this,this.positionHorizontal(11), this.positionVertical(5) )
  //    p1.animation('point1')
  //    let p2 = new Point(this,this.positionHorizontal(18), this.positionVertical(5) )
  //    p2.animation('point1')
  //    // Ships
  //    let ship1 = new Point(this,this.positionHorizontal(19), this.positionVertical(14) )
  //    ship1.animation('ship')
  //    let ship2 = new Point(this,this.positionHorizontal(20), this.positionVertical(13) )
  //    ship2.animation('ship')
  //    let ship3 = new Point(this,this.positionHorizontal(21), this.positionVertical(13) )
  //    ship3.animation('ship')
  //    let ship4 = new Point(this,this.positionHorizontal(21), this.positionVertical(14) )
  //    ship4.animation('ship')
  //    let ship5 = new Point(this,this.positionHorizontal(20), this.positionVertical(14) )
  //    ship5.animation('ship')
  //    // Puertas
  //    let door = new Door(this,this.positionHorizontal(21), this.positionVertical(4) )
  //    door.animation()

  //    //Enemy
  //    let screw1 = new Enemy(this,this.positionHorizontal(19), this.positionVertical(13) )
  //    screw1.animation('screw')

  // }


  createDoor(): void{
    const door = new Door(this, this.positionHorizontal(tilesObject[this.level].door.x), this.positionVertical(tilesObject[this.level].door.y))
    door.animation()
  }

  createEnemies() : void {
    this.createBlob()
    this.createMeanie()
    this.createNanorobot()
    this.createVirus()
  }

  createBlob(): void{
    const blobs = tilesObject[this.level].enemies.blob; 
    blobs.map((blob) => new Blob(this, this.positionHorizontal(blob.x), this.positionVertical(blob.y))).map((enemy) => enemy.animation())
    
  }

  createMeanie(): void{
    const meanies = tilesObject[this.level].enemies.meanie;
    meanies.map((meanie) => new Meanie(this, this.positionHorizontal(meanie.x), this.positionVertical(meanie.y))).map((enemy) => enemy.animation())
  }

  createNanorobot(): void{
    const nanorobots = tilesObject[this.level].enemies.nanorobot;
    nanorobots.map((nanorobot) => new Nanorobot(this, this.positionHorizontal(nanorobot.x), this.positionVertical(nanorobot.y))).map((enemy) => enemy.animation())
  }

  createVirus(): void{
    const virus = tilesObject[this.level].enemies.virus;
    virus.map((viru) => new Virus(this, this.positionHorizontal(viru.x), this.positionVertical(viru.y))).map((enemy) => enemy.animation())
  }

  createItems() : void{ 
    this.createBolt();
    this.createByte();
    this.createFloppy();
    this.createMicroship();
    this.createPower();
  }

  createBolt() : void{
    const bolts = tilesObject[this.level].items.bolt;
    bolts.map((bolt) => new Bolt(this, this.positionHorizontal(bolt.x), this.positionVertical(bolt.y))).map((item) => item.animation())
  }

  createByte() : void{
    const bytes = tilesObject[this.level].items.byte;
    bytes.map((byte) => new Byte(this, this.positionHorizontal(byte.x), this.positionVertical(byte.y))).map((item) => item.animation())
  }

  createFloppy() : void{
    const floppys = tilesObject[this.level].items.floppy;
    floppys.map((floppy) => new Floppy(this, this.positionHorizontal(floppy.x), this.positionVertical(floppy.y))).map((item) => item.animation())
  }

  createMicroship() : void{
    const microships = tilesObject[this.level].items.microship;
    microships.map((microship) => new Microship(this, this.positionHorizontal(microship.x), this.positionVertical(microship.y))).map((item) => item.animation())
  }

  createPower() : void{
    const powers = tilesObject[this.level].items.power;
    powers.map((power) => new Power(this, this.positionHorizontal(power.x), this.positionVertical(power.y))).map((item) => item.animation())
  }




 
}
