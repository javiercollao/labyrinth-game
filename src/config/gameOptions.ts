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
      b: 639,
      c: 641
    }  
  }

  export const byte = [
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

  export const power = [
    { key: 'sprites', frame: 'tile045.png'},
    { key: 'sprites', frame: 'tile046.png'},
    { key: 'sprites', frame: 'tile047.png'},
    { key: 'sprites', frame: 'tile048.png'},
    { key: 'sprites', frame: 'tile049.png'},
    { key: 'sprites', frame: 'tile050.png'},
    { key: 'sprites', frame: 'tile051.png'},
    { key: 'sprites', frame: 'tile052.png'}
  ]

  export const microship = [
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

  export const floppy = [
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

  export const virus = [
    { key: 'sprites', frame: 'e_tile006.png', duration: 1000, visible: true},
    { key: 'sprites', frame: 'e_tile006.png', duration: 1000, visible: true},
    { key: 'sprites', frame: 'e_tile007.png', duration: 1000, visible: true},
    { key: 'sprites', frame: 'e_tile007.png', duration: 1000, visible: true}
  ]

  export const meanie = [
    { key: 'sprites', frame: 'e_tile012.png'},
    { key: 'sprites', frame: 'e_tile012.png'},
    { key: 'sprites', frame: 'e_tile013.png'},
    { key: 'sprites', frame: 'e_tile013.png'},
  ]

  export const nanorobot = [
    { key: 'sprites', frame: 'e_tile018.png'},
    { key: 'sprites', frame: 'e_tile018.png'},
    { key: 'sprites', frame: 'e_tile019.png'},
    { key: 'sprites', frame: 'e_tile019.png'},
  ]

  export const blob = [
    { key: 'sprites', frame: 'e_tile024.png'},
    { key: 'sprites', frame: 'e_tile025.png'},
    { key: 'sprites', frame: 'e_tile026.png'},
    { key: 'sprites', frame: 'e_tile027.png'},
    { key: 'sprites', frame: 'e_tile028.png'},
    { key: 'sprites', frame: 'e_tile029.png'},
  ]

  export const bolt = [
    { key: 'sprites', frame: 't_tile066.png'}
  ]

  const noElement = { x: -1, y: -1}
  export const tilesObject = [
    {
    name: 'level1',
    player: {
      x: 4,
      y: 4
    },
    door: {
      x: 21,
      y: 4
    },
    items: 
      {
        bolt : [
          {
            x:19,
            y:13
          }
        ],
        byte : [
          {
            x: 11,
            y: 5
          },
          {
            x: 18,
            y: 5
          }
        ],
        floppy: [noElement],
        microship: [
          {
            x:20,
            y:13
          },
          {
            x:21,
            y:13
          },
          {
            x:19,
            y:14
          },
          {
            x:20,
            y:14
          },
          {
            x:21,
            y:14
          }
        ],
        power: [noElement]
      }
    ,
    enemies : {
      blob: [
        noElement
      ],
      meanie: [noElement],
      nanorobot: [noElement],
      virus: [noElement]
    }
  },
  {
    name: 'level2',
    player: {
      x: 5,
      y: 4
    },
    door: {
      x: 21,
      y: 14
    },
    items: 
      {
        bolt : [
          {
            x:7,
            y:4
          },
          {
            x:7,
            y:5
          },
          {
            x:7,
            y:6
          },
          {
            x:7,
            y:7
          },
          {
            x:7,
            y:8
          },
          {
            x:7,
            y:9
          },
          {
            x:7,
            y:10
          },
          {
            x:11,
            y:5
          },
          {
            x:19,
            y:5
          },
          {
            x:15,
            y:6
          },
          {
            x:11,
            y:10
          },
          {
            x:19,
            y:9
          },
          {
            x:15,
            y:12
          },
          {
            x:7,
            y:13
          },
          {
            x:7,
            y:14
          }
        ],
        byte : [
          {
            x:4,
            y:13
          },
          {
            x:4,
            y:14
          },
          {
            x:5,
            y:13
          },
          {
            x:5,
            y:14
          },
          {
            x:6,
            y:13
          },
          {
            x:6,
            y:14
          }
        ],
        floppy: [noElement], 
        microship: [
          {
            x:7,
            y:11
          },
          {
            x:11,
            y:6
          },
          {
            x:11,
            y:11
          },
          {
            x:15,
            y:13
          },
          {
            x:19,
            y:10
          },
          {
            x:21,
            y:4
          }
        ],
        power: [noElement]
      }
    ,
    enemies : {
      blob: [
        noElement
      ],
      meanie: [noElement],
      nanorobot: [noElement],
      virus: [noElement]
    }
  },
  {
    name: 'level3',
    player: {
      x: 3,
      y: 15
    },
    door: {
      x: 22,
      y: 15
    },
    items: 
      {
        bolt : [
          {x:4,y:3},
          {x:5,y:3},
          {x:6,y:4},
          {x:7,y:5},
          {x:8,y:6},
          {x:8,y:7},
          {x:9,y:7},
          {x:9,y:8},
          {x:10,y:8},
          {x:10,y:9},
          {x:11,y:9},
          {x:11,y:10},
          {x:12,y:10},
          {x:12,y:11},
          {x:13,y:11},
          {x:13,y:10},
          {x:14,y:10},
          {x:14,y:9},
          {x:15,y:9},
          {x:15,y:8},
          {x:16,y:8},
          {x:16,y:7},
          {x:17,y:7},
          {x:17,y:6},
          {x:18,y:5},
          {x:19,y:4},
          {x:20,y:3},
          {x:21,y:3}
        ],
        byte : [
          {x:10,y:3},
          {x:11,y:4},
          {x:12,y:5},
          {x:13,y:5},
          {x:14,y:4},
          {x:15,y:3}
        ],
        floppy: [
          {x:11,y:3},
          {x:12,y:3},
          {x:13,y:3},
          {x:14,y:3},
          {x:12,y:4},
          {x:13,y:4}
        ],
        microship: [
          {x:5,y:4},
          {x:6,y:5},
          {x:7,y:6},
          {x:18,y:6},
          {x:19,y:5},
          {x:20,y:4}
        ],
        power: [noElement]
      }
    ,
    enemies : {
      blob: [
        noElement
      ],
      meanie: [noElement],
      nanorobot: [noElement],
      virus: [noElement]
    }
  },
  {
    name: 'level4',
    player: {
      x: 3,
      y: 3
    },
    door: {
      x: 22,
      y: 3
    },
    items: 
      {
        bolt : [
          noElement
        ],
        byte : [
          noElement
        ],
        floppy: [noElement],
        microship: [
          {x:10,y:10},
          {x:9,y:10},
          {x:15,y:10},
          {x:16,y:10}
        ],
        power: [noElement]
      }
    ,
    enemies : {
      blob: [
        noElement
      ],
      meanie: [noElement],
      nanorobot: [noElement],
      virus: [
        {x:5,y:8},
        {x:5,y:11},
        {x:20,y:13},
        {x:20,y:8}
      ]
    }
  },
  {
    name: 'level5',
    player: {
      x: 3,
      y: 3
    },
    door: {
      x: 22,
      y: 15
    },
    items: 
      {
        bolt : [
          {x:8,y:3}
        ],
        byte : [
          noElement
        ],
        floppy: [
         {x:6,y:12},
         {x:7,y:12},
         {x:8,y:12},
        ],
        microship: [
         {x:8,y:5},
         {x:9,y:6},
         {x:10,y:7},
         {x:11,y:8},
         {x:12,y:9},
         {x:13,y:10},
         {x:14,y:11},
         {x:15,y:12}
        ],
        power: [
         {x:16,y:13},
         {x:17,y:14},
         {x:18,y:15},
         {x:16,y:14},
         {x:16,y:15},
         {x:17,y:15}
        ]
      }
    ,
    enemies : {
      blob: [
        noElement
      ],
      meanie: [
        {x:18,y:5},
        {x:20,y:8}
      ],
      nanorobot: [noElement],
      virus: [
        {x:4,y:10},
        {x:4,y:13}
      ]
    }
  },
  {
    name: 'level6',
    player: {
      x: 9,
      y: 9
    },
    door: {
      x: 16,
      y: 9
    },
    items: 
      {
        bolt : [
          noElement
        ],
        byte : [
          noElement
        ],
        floppy: [
          {x:5,y:3},
          {x:6,y:3},
          {x:19,y:3},
          {x:20,y:3}
        ],
        microship: [
          noElement
        ],
        power: [noElement]
      }
    ,
    enemies : {
      blob: [
        noElement
      ],
      meanie: [noElement],
      nanorobot: [noElement],
      virus: [
        {x:5,y:5},
        {x:5,y:5},
        {x:6,y:5},
        {x:7,y:5},
        {x:12,y:7},
        {x:20,y:8},
        {x:5,y:7},
        {x:9,y:7},
        {x:10,y:11},
        {x:11,y:11},
        {x:17,y:11},
        {x:16,y:13}
      ]
    }
  },
  {
    name: 'level7',
    player: {
      x: 3,
      y: 3
    },
    door: {
      x: 22,
      y: 15
    },
    items: 
      {
        bolt : [
          noElement
        ],
        byte : [
          {x:5,y:3},
          {x:5,y:7},
          {x:5,y:11},
          {x:5,y:15},
          {x:20,y:3},
          {x:20,y:7},
          {x:20,y:11},
          {x:20,y:15}
        ],
        floppy: [
          {x:5,y:9},
          {x:6,y:9},
          {x:7,y:9},
          {x:8,y:9},
          {x:9,y:9},
          {x:10,y:9},
          {x:11,y:9},
          {x:12,y:9},
          {x:13,y:9},
          {x:14,y:9},
          {x:15,y:9},
          {x:16,y:9},
          {x:17,y:9},
          {x:18,y:9},
          {x:19,y:9},
          {x:20,y:9}
        ],
        microship: [
          {x:5,y:5},
          {x:6,y:5},
          {x:7,y:5},
          {x:8,y:5},
          {x:9,y:5},
          {x:10,y:5},
          {x:11,y:5},
          {x:12,y:5},
          {x:13,y:5},
          {x:14,y:5},
          {x:15,y:5},
          {x:16,y:5},
          {x:17,y:5},
          {x:18,y:5},
          {x:19,y:5},
          {x:20,y:5},
          {x:5,y:13},
          {x:6,y:13},
          {x:7,y:13},
          {x:8,y:13},
          {x:9,y:13},
          {x:10,y:13},
          {x:11,y:13},
          {x:12,y:13},
          {x:13,y:13},
          {x:14,y:13},
          {x:15,y:13},
          {x:16,y:13},
          {x:17,y:13},
          {x:18,y:13},
          {x:19,y:13},
          {x:20,y:13},
        ],
        power: [noElement]
      }
    ,
    enemies : {
      blob: [
        noElement
      ],
      meanie: [noElement],
      nanorobot: [noElement],
      virus: [noElement]
    }
  },
  {
    name: 'level8',
    player: {
      x: 10,
      y: 9
    },
    door: {
      x: 15,
      y: 9
    },
    items: 
      {
        bolt : [
          {
           noElement
          }
        ],
        byte : [
          noElement
        ],
        floppy: [noElement],
        microship: [
          {x:4, y:3},
          {x:4, y:15},
          {x:21, y:3},
          {x:21, y:15}
        ],
        power: [noElement]
      }
    ,
    enemies : {
      blob: [
        noElement
      ],
      meanie: [noElement],
      nanorobot: [noElement],
      virus: [noElement]
    }
  },
  {
    name: 'level9',
    player: {
      x: 4,
      y: 15
    },
    door: {
      x: 21,
      y: 15
    },
    items: 
      {
        bolt : [
          {x:8,y:3},
          {x:14,y:3},
          {x:16,y:3},
          {x:19,y:3},
          {x:8,y:4},
          {x:14,y:4},
          {x:16,y:4},
          {x:19,y:4},
          {x:8,y:6},
          {x:14,y:6},
          {x:16,y:6},
          {x:19,y:6},
          {x:8,y:7},
          {x:14,y:7},
          {x:16,y:7},
          {x:19,y:7},
          {x:8,y:9},
          {x:14,y:9},
          {x:16,y:9},
          {x:19,y:9},
          {x:8,y:10},
          {x:14,y:10},
          {x:16,y:10},
          {x:19,y:10},
          {x:8,y:13},
          {x:14,y:13},
          {x:16,y:13},
          {x:19,y:13},
          {x:8,y:14},
          {x:14,y:14},
          {x:16,y:14},
          {x:19,y:14}
        ],
        byte : [
          noElement
        ],
        floppy: [noElement],
        microship: [
          {x:8,y:15},
          {x:14,y:15},
          {x:16,y:15},
          {x:19,y:15},
          {x:8,y:5},
          {x:14,y:5},
          {x:16,y:5},
          {x:19,y:5},
          {x:8,y:8},
          {x:14,y:8},
          {x:16,y:8},
          {x:19,y:8},
          {x:8,y:11},
          {x:14,y:11},
          {x:16,y:11},
          {x:19,y:11},
          {x:8,y:12},
          {x:14,y:12},
          {x:16,y:12},
          {x:19,y:12},
        ],
        power: [noElement]
      }
    ,
    enemies : {
      blob: [
        noElement
      ],
      meanie: [noElement],
      nanorobot: [noElement],
      virus: [noElement]
    }
  },
  {
    name: 'level10',
    player: {
      x: 3,
      y: 3
    },
    door: {
      x: 22,
      y: 13
    },
    items: 
      {
        bolt : [
          noElement
        ],
        byte : [
          noElement
        ],
        floppy: [
          {x:8,y:3},
          {x:9,y:3},
          {x:10,y:3},
          {x:11,y:3},
          {x:12,y:3},
          {x:13,y:3},
          {x:14,y:3},
          {x:15,y:3},
          {x:16,y:3},
          {x:17,y:3},
          {x:18,y:3},
          {x:9,y:4},
          {x:10,y:4},
          {x:11,y:4},
          {x:12,y:4},
          {x:13,y:4},
          {x:14,y:4},
          {x:15,y:4},
          {x:16,y:4},
          {x:17,y:4},
          {x:10,y:5},
          {x:11,y:5},
          {x:12,y:5},
          {x:13,y:5},
          {x:14,y:5},
          {x:15,y:5},
          {x:16,y:5},
          {x:11,y:6},
          {x:12,y:6},
          {x:13,y:6},
          {x:14,y:6},
          {x:15,y:6},
          {x:12,y:7},
          {x:13,y:7},
          {x:14,y:7},
          {x:13,y:8}
        ],
        microship: [
          {x:3,y:15},
          {x:4,y:15},
          {x:5,y:15},
          {x:6,y:15},
          {x:7,y:15},
          {x:8,y:15},
          {x:9,y:15},
          {x:10,y:15},
          {x:11,y:15},
          {x:12,y:15},
          {x:14,y:15},
          {x:15,y:15},
          {x:16,y:15},
          {x:17,y:15},
          {x:18,y:15},
          {x:19,y:15},
          {x:20,y:15},
          {x:21,y:15},
          {x:22,y:15},
        ],
        power: [noElement]
      }
    ,
    enemies : {
      blob: [
        noElement
      ],
      meanie: [noElement],
      nanorobot: [noElement],
      virus: [{x:13,y:11}]
    }
  }
]
  