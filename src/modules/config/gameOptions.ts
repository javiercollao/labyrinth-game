export default {
    boardSize: {
      cols: 26,
      rows: 21
    },
    swipeMaxTime: 1000,
    swipeMinDistance: 20,
    swipeMinNormal: 0.85,
    tileSize: 16,
    tileSpacing: 0,
    tweenSpeed: 2000
  }

  const LEFT = 0
  const RIGHT = 1
  const UP = 2
  const DOWN = 3
  
  export const directions = {
    LEFT,
    RIGHT,
    UP,
    DOWN
  }

  export const tilesConfig = {
    key: 'levels',
    tileWidth: 16,
    tileHeight: 16
  }

  export const tileType = {
    wall: {
      a: 643,
      b: 644
    },
    block:{
      a: 640,
      b: 639
    }  
  }

  export const point1 = [
    { key: 'sprites', frame: 'tile000.png'},
    { key: 'sprites', frame: 'tile001.png'},
    { key: 'sprites', frame: 'tile002.png'},
    { key: 'sprites', frame: 'tile003.png'},
    { key: 'sprites', frame: 'tile004.png'},
    { key: 'sprites', frame: 'tile005.png'},
    { key: 'sprites', frame: 'tile006.png'},
    { key: 'sprites', frame: 'tile007.png'},
    { key: 'sprites', frame: 'tile008.png'},
    { key: 'sprites', frame: 'tile009.png'},
    { key: 'sprites', frame: 'tile010.png'},
    { key: 'sprites', frame: 'tile011.png'},
    { key: 'sprites', frame: 'tile012.png'},
    { key: 'sprites', frame: 'tile013.png'},
    { key: 'sprites', frame: 'tile014.png'}
  ]

  export const point2 = [
    { key: 'sprites', frame: 'tile015.png'},
    { key: 'sprites', frame: 'tile016.png'},
    { key: 'sprites', frame: 'tile017.png'},
    { key: 'sprites', frame: 'tile018.png'},
    { key: 'sprites', frame: 'tile019.png'},
    { key: 'sprites', frame: 'tile020.png'},
    { key: 'sprites', frame: 'tile021.png'},
    { key: 'sprites', frame: 'tile022.png'},
    { key: 'sprites', frame: 'tile023.png'},
    { key: 'sprites', frame: 'tile024.png'},
    { key: 'sprites', frame: 'tile025.png'},
    { key: 'sprites', frame: 'tile026.png'},
    { key: 'sprites', frame: 'tile027.png'},
    { key: 'sprites', frame: 'tile028.png'},
    { key: 'sprites', frame: 'tile029.png'}
  ]

  export const point3 = [
    { key: 'sprites', frame: 'tile030.png'},
    { key: 'sprites', frame: 'tile031.png'},
    { key: 'sprites', frame: 'tile032.png'},
    { key: 'sprites', frame: 'tile033.png'},
    { key: 'sprites', frame: 'tile034.png'},
    { key: 'sprites', frame: 'tile035.png'},
    { key: 'sprites', frame: 'tile036.png'},
    { key: 'sprites', frame: 'tile037.png'},
    { key: 'sprites', frame: 'tile038.png'},
    { key: 'sprites', frame: 'tile039.png'},
    { key: 'sprites', frame: 'tile040.png'},
    { key: 'sprites', frame: 'tile041.png'},
    { key: 'sprites', frame: 'tile042.png'},
    { key: 'sprites', frame: 'tile043.png'},
    { key: 'sprites', frame: 'tile044.png'}
  ]

  export const point4 = [
    { key: 'sprites', frame: 'tile045.png'},
    { key: 'sprites', frame: 'tile046.png'},
    { key: 'sprites', frame: 'tile047.png'},
    { key: 'sprites', frame: 'tile048.png'},
    { key: 'sprites', frame: 'tile049.png'},
    { key: 'sprites', frame: 'tile050.png'},
    { key: 'sprites', frame: 'tile051.png'},
    { key: 'sprites', frame: 'tile052.png'}
  ]

  export const ship = [
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile075.png'},
    { key: 'sprites', frame: 'tile076.png'},
    { key: 'sprites', frame: 'tile077.png'},
    { key: 'sprites', frame: 'tile078.png'},
    { key: 'sprites', frame: 'tile079.png'},
    { key: 'sprites', frame: 'tile080.png'},
    { key: 'sprites', frame: 'tile081.png'},
    { key: 'sprites', frame: 'tile082.png'}
  ]

  export const floppyDisk = [
    { key: 'sprites', frame: 'tile060.png'}
  ]

  export const arrowWall = [
    { key: 'sprites', frame: 'w_tile042.png'},
    { key: 'sprites', frame: 'w_tile043.png'},
    { key: 'sprites', frame: 'w_tile044.png'},
    { key: 'sprites', frame: 'w_tile045.png'}
  ]

  export const door = [
    { key: 'sprites', frame: 'd_tile054.png'},
    { key: 'sprites', frame: 'd_tile055.png'},
    { key: 'sprites', frame: 'd_tile056.png'},
    { key: 'sprites', frame: 'd_tile057.png'},
    { key: 'sprites', frame: 'd_tile063.png'},
    { key: 'sprites', frame: 'd_tile062.png'},
    { key: 'sprites', frame: 'd_tile061.png'},
    { key: 'sprites', frame: 'd_tile060.png'},
    { key: 'sprites', frame: 'd_tile059.png'},
    { key: 'sprites', frame: 'd_tile059.png'},
    { key: 'sprites', frame: 'd_tile059.png'}, 
    { key: 'sprites', frame: 'd_tile059.png'},
    { key: 'sprites', frame: 'd_tile059.png'},
    { key: 'sprites', frame: 'd_tile059.png'},
    { key: 'sprites', frame: 'd_tile059.png'},
    { key: 'sprites', frame: 'd_tile059.png'},
    { key: 'sprites', frame: 'd_tile059.png'},
    { key: 'sprites', frame: 'd_tile059.png'},
    { key: 'sprites', frame: 'd_tile059.png'}
  ]

  export const dexterStand = [
    { key: 'sprites', frame: 'p_tile000.png'}
  ]

  export const dexterWalk = [
    { key: 'sprites', frame: 'p_tile002.png'},
    { key: 'sprites', frame: 'p_tile003.png'},
    { key: 'sprites', frame: 'p_tile004.png'}
  ]

  export const bee = [
    { key: 'sprites', frame: 'e_tile006.png'},
    { key: 'sprites', frame: 'e_tile006.png'},
    { key: 'sprites', frame: 'e_tile007.png'},
    { key: 'sprites', frame: 'e_tile007.png'},
  ]

  export const monkey = [
    { key: 'sprites', frame: 'e_tile012.png'},
    { key: 'sprites', frame: 'e_tile012.png'},
    { key: 'sprites', frame: 'e_tile013.png'},
    { key: 'sprites', frame: 'e_tile013.png'},
  ]

  export const robot = [
    { key: 'sprites', frame: 'e_tile018.png'},
    { key: 'sprites', frame: 'e_tile018.png'},
    { key: 'sprites', frame: 'e_tile019.png'},
    { key: 'sprites', frame: 'e_tile019.png'},
  ]

  export const ball = [
    { key: 'sprites', frame: 'e_tile024.png'},
    { key: 'sprites', frame: 'e_tile025.png'},
    { key: 'sprites', frame: 'e_tile026.png'},
    { key: 'sprites', frame: 'e_tile027.png'},
    { key: 'sprites', frame: 'e_tile028.png'},
    { key: 'sprites', frame: 'e_tile029.png'},
  ]

  export const screw = [
    { key: 'sprites', frame: 't_tile066.png'}
  ]


  