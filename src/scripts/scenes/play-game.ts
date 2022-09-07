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
  
  level!: number;
  player!: Player; 
  door!: Door;
  blob!: Blob[];
  meanie!: Meanie[];
  nanorobot!: Nanorobot[];
  virus!: Virus[];
  bolt!: Bolt[];
  byte!: Byte[];
  microship!: Microship[];
  floppy!:Floppy[];
  power!: Power[];
  layer!: Level;
  map!: Phaser.Tilemaps.Tilemap; 
 
  constructor() {
    super({
      key :'PlayGame'
    })
    this.level = 0;
  }
   
  create () {
    this.map = this.make.tilemap(tilesConfig);

    this.createGameContainer();
    this.createGameLaberynth();
     
    this.createPlayer()
    this.createDoor()
    this.createEnemies()
    this.createItems()
    
     
    this.canMove()
    this.checkTilePlayer()
    this.input.keyboard.on('keydown', this.handleKey, this)
  }

   
  nextLevel () {
    if(this.door.x === this.player.getPositionX() && this.door.y === this.player.getPositionY()){
      this.drawNewMap()
    }
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
   *  @desc Modifia el nivel del juego
  **/
  setLevel() : number {
    return this.level++;
  }

  /**
   *  @desc Actualiza el mapa del nivel actual y lo inicializa
  **/
   drawNewMap() : void{
    this.layer.removeLayer() 
    this.setLevel()
    this.cleanDoor()
    this.cleanEnemies()
    this.cleanItems()
    this.createGameLaberynth()
    this.createDoor()
    this.createEnemies()
    this.createItems()
    this.player.setPosition(this.positionHorizontal(tilesObject[this.level].player.x), this.positionVertical(tilesObject[this.level].player.y))
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
    const tile = this.map.getTileAtWorldXY(this.player.getNextRightPosition(), this.player.getPositionY(), true); 
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveRight(false) : this.player.setCanMoveRight(true)
  }

  nextTileLeftIndex(){
    const tile = this.map.getTileAtWorldXY(this.player.getNextLeftPosition(), this.player.getPositionY(), true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveLeft(false) : this.player.setCanMoveLeft(true)
  }

  nextTileUpIndex(){
    const tile = this.map.getTileAtWorldXY(this.player.getPositionX(), this.player.getNextUpPosition(), true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveUp(false) : this.player.setCanMoveUp(true)
  }

  nextTileDownIndex(){
    const tile = this.map.getTileAtWorldXY(this.player.getPositionX(), this.player.getNextDownPosition(), true);
    (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? this.player.setCanMoveDown(false) : this.player.setCanMoveDown(true)
  }

  /**
   *  @desc Calcula la posicion de un tile horizontal
  **/
  checkTilePlayer(){
    const tile = this.map.getTileAtWorldXY(this.player.getPositionX(), this.player.getPositionY(), true);

    if(tile.index === tileType.block.a || tileType.block.b || tile.index === 95 || tile.index === 0){
      this.map.removeTileAtWorldXY(this.player.getPositionX(), this.player.getPositionY(),false)
    }

    this.nextLevel() 

  }

  createGameLaberynth(): void {
    const laberynth = this.map.addTilesetImage('sprites2','levelTiles');
    this.layer = new Level(this.map, laberynth, 0);
    this.layer.start();
  }

  createGameContainer(): void{
    const container = this.map.addTilesetImage('principal','mainGame')
    const gameContainer = this.map.createLayer('static', container, 0, 0);
    gameContainer.setDepth(2)
  }

  createPlayer(): void{
    this.player = new Player(this, this.positionHorizontal(tilesObject[this.level].player.x), this.positionVertical(tilesObject[this.level].player.y));
    this.player.standAnimation()
  }

  createDoor(): void{
    this.door = new Door(this, this.positionHorizontal(tilesObject[this.level].door.x), this.positionVertical(tilesObject[this.level].door.y))
    this.door.animation()
  }

  createEnemies() : void {
    this.createBlob()
    this.createMeanie()
    this.createNanorobot()
    this.createVirus()
  }

  createBlob(): void{
    const blobs = tilesObject[this.level].enemies.blob; 
    this.blob = blobs.map((blob) => new Blob(this, this.positionHorizontal(blob.x), this.positionVertical(blob.y)))
    this.blob.map((blob) => blob.animation())
  }

  createMeanie(): void{
    const meanies = tilesObject[this.level].enemies.meanie;
    this.meanie = meanies.map((meanie) => new Meanie(this, this.positionHorizontal(meanie.x), this.positionVertical(meanie.y)))
    this.meanie.map((meanie) => meanie.animation())
  }

  createNanorobot(): void{
    const nanorobots = tilesObject[this.level].enemies.nanorobot;
    this.nanorobot = nanorobots.map((nanorobot) => new Nanorobot(this, this.positionHorizontal(nanorobot.x), this.positionVertical(nanorobot.y)))
    this.nanorobot.map((nanorobot) => nanorobot.animation())
  }

  createVirus(): void{
    const virus = tilesObject[this.level].enemies.virus;
    this.virus = virus.map((viru) => new Virus(this, this.positionHorizontal(viru.x), this.positionVertical(viru.y)))
    this.virus.map((virus) => virus.animation())
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
    this.bolt = bolts.map((bolt) => new Bolt(this, this.positionHorizontal(bolt.x), this.positionVertical(bolt.y)))
    this.bolt.map((bolt) => bolt.animation())
  }

  createByte() : void{
    const bytes = tilesObject[this.level].items.byte;
    this.byte = bytes.map((byte) => new Byte(this, this.positionHorizontal(byte.x), this.positionVertical(byte.y)))
    this.byte.map((byte) => byte.animation())
  }

  createFloppy() : void{
    const floppys = tilesObject[this.level].items.floppy;
    this.floppy = floppys.map((floppy) => new Floppy(this, this.positionHorizontal(floppy.x), this.positionVertical(floppy.y)))
    this.floppy.map((floppy) => floppy.animation())
  }

  createMicroship() : void{
    const microships = tilesObject[this.level].items.microship;
    this.microship = microships.map((microship) => new Microship(this, this.positionHorizontal(microship.x), this.positionVertical(microship.y)))
    this.microship.map((microship) => microship.animation())
  }

  createPower() : void{
    const powers = tilesObject[this.level].items.power;
    this.power = powers.map((power) => new Power(this, this.positionHorizontal(power.x), this.positionVertical(power.y)))
    this.power.map((power) => power.animation())
  }

  cleanEnemies(): void {
    this.cleanBlob()
    this.cleanMeanie()
    this.cleanNanorobot()
    this.cleanVirus()
  }

  cleanBlob(): void{
    this.bolt.map((bolt) => bolt.remove())
  }

  cleanMeanie(): void{
    this.meanie.map((meanie) => meanie.remove())
  }

  cleanNanorobot(): void{
    this.nanorobot.map((nanorobot) => nanorobot.remove())
  }

  cleanVirus(): void{
    this.virus.map((virus) => virus.remove())
  }

  cleanItems(): void{
    this.cleanBolt();
    this.cleanByte();
    this.cleanFloppy();
    this.cleanMicroship();
    this.cleanPower()
  }

  cleanBolt(): void{
    this.bolt.map((bolt) => bolt.remove())
  }
  cleanByte(): void{
    this.byte.map((byte) => byte.remove())
  }
  cleanFloppy(): void{
    this.floppy.map((floppy) => floppy.remove())
  }
  cleanMicroship():void{
    this.microship.map((microship) => microship.remove())
  }
  cleanPower():void{
    this.power.map((power) => power.remove())
  }

  cleanDoor():void{
    this.door.remove()
  }
}
