import 'phaser' 
import { tilesConfig, tileType, tilesObject} from '../config/gameOptions'
import Inputs from "../inputs/Inputs";
import Level from '../entities/maps/level';
import Door from '../entities/primary/door';
import Player from '../entities/player';
import Virus from '../entities/virus';


export default class PlayGame extends Phaser.Scene {
  
  public inputs!: Inputs;

  level!: number;
  player!: Player; 
  door!: Door;
  virus!: Virus[];

  layer!: Level;
  map!: Phaser.Tilemaps.Tilemap;
  bytesPoints: number;
  microshipsPoints: number;
 
  constructor() {
    super({
      key :'PlayGame'
    })
    this.level = 0;
    this.bytesPoints = 0;
    this.microshipsPoints = 0;
  }
   
  public init() {
    this.inputs = new Inputs(this);
  }

  create (data) { 
    // creamos mapa
    this.map = this.make.tilemap(tilesConfig);

    // actualizamos el nivel y creamos todo lo del juego
    this.setLevel(data.level)
    this.createGameContainer();
    this.createGameLaberynth();
     
    // creamos jugador sprite
    this.player = new Player(this, this.positionHorizontal(tilesObject[this.level].player.x), this.positionVertical(tilesObject[this.level].player.y));
 
    // creamos abejas
    const virus = tilesObject[this.level].enemies.virus;
    this.virus = virus.map((viru) => new Virus(this, this.positionHorizontal(viru.x), this.positionVertical(viru.y)))
    
    console.log('jookl')
      // //     this.virus.create(viru.x, viru.y,'sprites')
      // //     this.virus.playAnimation('virus','e_tile006.png')
    
 
    // this.createPlayer()
    // this.createDoor()
    // this.createEnemies()
    // this.createItems()

    
    
    console.log("nivel x",this.level)
    
    // Debemos inicializar a cada personaje de la escena 
    //this.canMove(this.player)
    //this.checkTilePlayer()

 
    // escuchamos los eventos del teclado
    //this.input.keyboard.on('keydown', this.handleKey, this)
    
  }

  update(time: number, delta: number): void {
    
    this.player.movement()
    this.player.removeTiles()
    this.virus.map((virus) => virus.movement())
  }
  

  setLevel(v : number) : void {
    this.level = v
  }


  createGameLaberynth(): void{
    let laberynth = this.map.addTilesetImage('sprites2','levelTiles');
    this.layer = new Level(this.map, laberynth, this.level);
  }

  createGameContainer(): void{
    const container = this.map.addTilesetImage('principal','mainGame')
    const gameContainer = this.map.createLayer('static', container, 0, 0);
    gameContainer.setDepth(2)
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




















  // MALO
   
  // collisionDetectorBetweenAPlayerAndDoor () {
  //   if(this.door.x === this.player.getPositionX() && this.door.y === this.player.getPositionY()){
  //     // this.door.x === this.player.getPositionX() && this.door.y === this.player.getPositionY() && this.microshipsPoints >= this.microship.length
  //     this.level == 7? this.scene.start('Menu', {intro: false}):this.drawNewMap()
       
  //   }
  // }

 
   

 
  // /**
  //  *  @desc Aumenta el nivel del juego
  // **/
  // upgradeLevel() : number {
  //   return this.level++;
  // }

  // /**
  //  *  @desc Actualiza el mapa del nivel actual y lo inicializa
  // **/
  //  drawNewMap() : void {
  //   //this.layer.removeLayer()
  //   this.layer.novisible()
  //   this.upgradeLevel()
  //   this.microshipsPoints = 0;
  //   // this.cleanDoor()
  //   // this.cleanEnemies()
  //   // this.cleanItems()
  //   this.createGameLaberynth()
  //   // this.createDoor()
  //   // this.createEnemies()
  //   // this.createItems()
  //   this.player.setPosition(this.positionHorizontal(tilesObject[this.level].player.x), this.positionVertical(tilesObject[this.level].player.y))
  //   this.canMove(this.player)

  //   //this.physics.world.enable(this.player); 
    
  //   this.checkTilePlayer() 
  // }

  //  drawNewMapForLoseLife() : void { 
  //   //this.layer.removeAll()
  //   this.createGameLaberynth()
  //   this.layer.examp()
  //   this.microshipsPoints = 0;
  //   this.player.setPosition(this.positionHorizontal(tilesObject[this.level].player.x), this.positionVertical(tilesObject[this.level].player.y))
  //   this.canMove(this.player)
     
  //   this.checkTilePlayer() 
  // }
 
  // /**
  //  *  @desc Se encarga de mover al personaje principal en la escena
  // **/
  // makeMove(d): void {
  //   if(d === RIGHT && this.player.getCanMoveRight()){
  //     this.player.rightMovement()
  //     this.canMove(this.player)
  //     this.checkTilePlayer()
  //   }else if(d === LEFT && this.player.getCanMoveLeft()){
  //     this.player.leftMovement()
  //     this.canMove(this.player)
  //     this.checkTilePlayer()
  //   }else if(d === DOWN && this.player.getCanMoveDown()){
  //     this.player.downMovement()
  //     this.canMove(this.player)
  //     this.checkTilePlayer()
  //   }else if(d === UP && this.player.getCanMoveUp()){
  //     this.player.upMovement()
  //     this.canMove(this.player)
  //     this.checkTilePlayer()
  //   }
  // }

  // /**
  //  *  @desc Modifica los permisos del jugador de moverse a las casillas disponibles en la escena
  // **/
  // canMove(character){
  //   this.nextTileRightIndex(character)
  //   this.nextTileLeftIndex(character)
  //   this.nextTileDownIndex(character)
  //   this.nextTileUpIndex(character)
  // }


  // nextTileRightIndex(character){ 
  //   const tile = this.map.getTileAtWorldXY(character.getNextRightPosition(), character.getPositionY(), true); 
  //   (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? character.setCanMoveRight(false) : character.setCanMoveRight(true)
  // }

  // nextTileLeftIndex(character){
  //   const tile = this.map.getTileAtWorldXY(character.getNextLeftPosition(), character.getPositionY(), true);
  //   (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? character.setCanMoveLeft(false) : character.setCanMoveLeft(true)
  // }

  // nextTileUpIndex(character){
  //   const tile = this.map.getTileAtWorldXY(character.getPositionX(), character.getNextUpPosition(), true);
  //   (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? character.setCanMoveUp(false) : character.setCanMoveUp(true)
  // }

  // nextTileDownIndex(character){
  //   const tile = this.map.getTileAtWorldXY(character.getPositionX(), character.getNextDownPosition(), true);
  //   (tile.index === tileType.wall.a || tile.index === tileType.wall.b)? character.setCanMoveDown(false) : character.setCanMoveDown(true)
  // }

  // // destroyBytes(){
  // //   this.byte.map((byte) => {
  // //     if(byte.x === this.player.getPositionX() && byte.y === this.player.getPositionY()){
  // //       this.bytesPoints += 1;
  // //       byte.destroy()
  // //     }
  // //   })
  // // }

  // // collisionWithEnemie(enemies){
  // //   enemies.map((enemie) => {
  // //     if(enemie.x === this.player.getPositionX() && enemie.y === this.player.getPositionY()){
  // //       this.scene.start('PlayGame', {level: this.level})
  // //     }
  // //   })
  // // }

  // // destroyMicroShips(){
  // //   this.microship.map((microship) => {
  // //     if(microship.x === this.player.getPositionX() && microship.y === this.player.getPositionY()){
  // //       this.microshipsPoints += 1;
  // //       microship.destroy()
  // //     }
  // //   })
  // // }

  // // destroyFloppys(){
  // //   this.floppy.map((floppy) => {
  // //     if(floppy.x === this.player.getPositionX() && floppy.y === this.player.getPositionY()){
  // //       //this.microshipsPoints += 1;
  // //       floppy.destroy()
  // //     }
  // //   })
  // // }

  // // destroyPower(){
  // //   this.power.map((power) => {
  // //     if(power.x === this.player.getPositionX() && power.y === this.player.getPositionY()){
  // //       //this.microshipsPoints += 1;
  // //       power.destroy()
  // //     }
  // //   })
  // // }

  // /**
  //  *  @desc Calcula la posicion de un tile horizontal
  // **/
  // checkTilePlayer(){
  //   const tile = this.map.getTileAtWorldXY(this.player.getPositionX(), this.player.getPositionY(), true);

  //   if(tile.index === tileType.block.a || tile.index === tileType.block.b || tile.index === tileType.block.c || tile.index === 95 ){
  //     this.map.removeTileAtWorldXY(this.player.getPositionX(), this.player.getPositionY(),false)
  //   }
  //   // this.destroyBytes()
  //   // this.destroyMicroShips()
  //   // this.destroyFloppys()
  //   // this.destroyPower()
  //   // this.collisionWithEnemie(this.meanie)
  //   // this.collisionWithEnemie(this.blob)
  //   // this.collisionWithEnemie(this.nanorobot)
  //   // this.collisionWithEnemie(this.virus)
  //   // this.collisionDetectorBetweenAPlayerAndDoor()
  //   // console.log(`microships = ${this.microship.length}`)
  //   // console.log(`pointsMS = ${this.microshipsPoints} , pointsByte = ${this.bytesPoints}`)
  // }


 

 

  // // ========================================================================
 


  // // createPlayer(): void{
  // //   this.player = new Player(this, this.positionHorizontal(tilesObject[this.level].player.x), this.positionVertical(tilesObject[this.level].player.y));
  // //   this.player.standAnimation()
  // // }

  // // createDoor(): void{
  // //   this.door = new Door(this, this.positionHorizontal(tilesObject[this.level].door.x), this.positionVertical(tilesObject[this.level].door.y))
  // //   this.door.animation()
  // // }

  // // createEnemies() : void {
  // //   // this.createBlob()
  // //   // this.createMeanie()
  // //   // this.createNanorobot()
  // //   this.createVirus()
  // // }

  // // createBlob(): void{
  // //   const blobs = tilesObject[this.level].enemies.blob; 
  // //   this.blob = blobs.map((blob) => new Blob(this, this.positionHorizontal(blob.x), this.positionVertical(blob.y)))
  // //   this.blob.map((blob) => blob.animation())
  // // }

  // // createMeanie(): void{
  // //   const meanies = tilesObject[this.level].enemies.meanie;
  // //   this.meanie = meanies.map((meanie) => new Meanie(this, this.positionHorizontal(meanie.x), this.positionVertical(meanie.y)))
  // //   this.meanie.map((meanie) => meanie.animation())
  // // }

  // // createNanorobot(): void{
  // //   const nanorobots = tilesObject[this.level].enemies.nanorobot;
  // //   this.nanorobot = nanorobots.map((nanorobot) => new Nanorobot(this, this.positionHorizontal(nanorobot.x), this.positionVertical(nanorobot.y)))
  // //   this.nanorobot.map((nanorobot) => nanorobot.animation())
  // // }

  // // createVirus(): void{
  // //   const virus = tilesObject[this.level].enemies.virus;

  // //   this.virus = this.physics.add.group()
 
  // //   virus.map((viru) => {
  // //     //new Virus(this, this.positionHorizontal(viru.x), this.positionVertical(viru.y))
  // //     this.virus.create(viru.x, viru.y,'sprites')
  // //     this.virus.playAnimation('virus','e_tile006.png')
  
  // //   })
  
  //   // this.virus = virus.map((viru) => new Virus(this, this.positionHorizontal(viru.x), this.positionVertical(viru.y)))
  //   // this.virus.map((virus) => virus.animation()) 
    
  //   // if(this.virus.length > 1){
  //   //    this.virus.map((viru) => {
  //   //        setInterval(() => {
  //   //         viru.movement(this.map)
  //   //         if(viru.getPositionX() === this.player.getPositionX() && viru.getPositionY() === this.player.getPositionY()){
  //   //           this.scene.start('PlayGame', {level: this.level})
  //   //         }
               
  //   //         }, 500);
  //   //      })
  //   // }
  // }

  // // createItems() : void{ 
  // //   this.createBolt();
  // //   this.createByte();
  // //   this.createFloppy();
  // //   this.createMicroship();
  // //   this.createPower();
  // // }

  // // createBolt() : void{
  // //   const bolts = tilesObject[this.level].items.bolt;
  // //   this.bolt = bolts.map((bolt) => new Bolt(this, this.positionHorizontal(bolt.x), this.positionVertical(bolt.y)))
  // //   this.bolt.map((bolt) => bolt.animation())
  // // }

  // // createByte() : void{
  // //   const bytes = tilesObject[this.level].items.byte;
  // //   this.byte = bytes.map((byte) => new Byte(this, this.positionHorizontal(byte.x), this.positionVertical(byte.y)))
  // //   this.byte.map((byte) => byte.animation())
  // // }

  // // createFloppy() : void{
  // //   const floppys = tilesObject[this.level].items.floppy;
  // //   this.floppy = floppys.map((floppy) => new Floppy(this, this.positionHorizontal(floppy.x), this.positionVertical(floppy.y)))
  // //   this.floppy.map((floppy) => floppy.animation())
  // // }

  // // createMicroship() : void{
  // //   const microships = tilesObject[this.level].items.microship;
  // //   this.microship = microships.map((microship) => new Microship(this, this.positionHorizontal(microship.x), this.positionVertical(microship.y)))
  // //   this.microship.map((microship) => microship.animation())
  // // }

  // // createPower() : void{
  // //   const powers = tilesObject[this.level].items.power;
  // //   this.power = powers.map((power) => new Power(this, this.positionHorizontal(power.x), this.positionVertical(power.y)))
  // //   this.power.map((power) => power.animation())
  // // }

  // // cleanEnemies(): void {
  // //   this.cleanBlob()
  // //   this.cleanMeanie()
  // //   this.cleanNanorobot()
  // //   this.cleanVirus()
  // // }

  // // cleanBlob(): void{
  // //   this.bolt.map((bolt) => bolt.remove())
  // // }

  // // cleanMeanie(): void{
  // //   this.meanie.map((meanie) => meanie.remove())
  // // }

  // // cleanNanorobot(): void{
  // //   this.nanorobot.map((nanorobot) => nanorobot.remove())
  // // }

  // // cleanVirus(): void{
  // //   //this.virus.map((virus) => virus.remove())
  // //   console.log("hola")
  // // }

  // // cleanItems(): void{
  // //   this.cleanBolt();
  // //   this.cleanByte();
  // //   this.cleanFloppy();
  // //   this.cleanMicroship();
  // //   this.cleanPower()
  // // }

  // // cleanBolt(): void{
  // //   this.bolt.map((bolt) => bolt.remove())
  // // }

  // // cleanByte(): void{
  // //   this.byte.map((byte) => byte.remove())
  // // }

  // // cleanFloppy(): void{
  // //   this.floppy.map((floppy) => floppy.remove())
  // // }

  // // cleanMicroship():void{
  // //   this.microship.map((microship) => microship.remove())
  // // }

  // // cleanPower():void{
  // //   this.power.map((power) => power.remove())
  // // }

  // // cleanDoor():void{
  // //   this.door.remove()
  // // }


  // /**
  //  *  @desc Gestiona los controles
  // **/
  // handleKey(e): void {
  //   switch (e.code) {
  //     case 'KeyA':
  //     case 'ArrowLeft':
  //       this.makeMove(LEFT)
  //       this.player.walkLeftAnimation(); 
  //       break
  //     case 'KeyD':
  //     case 'ArrowRight':
  //       this.makeMove(RIGHT)
  //       this.player.walkRightAnimation();
  //       break
  //     case 'KeyW':
  //     case 'ArrowUp':
  //       this.makeMove(UP)
  //       break
  //     case 'KeyS':
  //     case 'ArrowDown':
  //       this.makeMove(DOWN)
  //       break
  //   } 
  // }
}
