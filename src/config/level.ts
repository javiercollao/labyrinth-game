 
export const tiles: Phaser.Types.Tilemaps.TilemapConfig = {
  key: 'levels',
  tileWidth: 16,
  tileHeight: 16
};

export const levelInitTesting = "Level4"
export const levelTesting = "GameOver"

const noElement = { x: -1, y: -1}

export const level1Config = {
  key: "Level1",
  keyNext: "Level2",
  levelNumber: 0,
  tileWidth: 16,
  tileHeigth: 16,
  player: {
    x: 4,
    y: 4
  },
  door: {
    x: 21,
    y: 4
  },
  items: {
    bolt: [
      {
        x: 19,
        y: 13
      }
    ],
    byte: [
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
    microchip: [
      {
        x: 20,
        y: 13
      },
      {
        x: 21,
        y: 13
      },
      {
        x: 19,
        y: 14
      },
      {
        x: 20,
        y: 14
      },
      {
        x: 21,
        y: 14
      }
    ],
    power: [noElement]
  },
  enemies: {
    blob: [noElement],
    meanie: [noElement],
    nanorobot: [noElement],
    virus: [noElement]
  } 
}

export const level2Config  = {
  key: "Level2",
  keyNext: "Level3",
  levelNumber: 1,
  tileWidth: 16,
  tileHeigth: 16,
  player: {
    x: 4,
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
      microchip: [
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
}

export const level3Config  = {
  key: "Level3",
  keyNext: "Level4",
  levelNumber: 2,
  tileWidth: 16,
  tileHeigth: 16,
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
      microchip: [
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

}

export const level4Config  = {
  key: "Level4",
  keyNext: "Level5",
  levelNumber: 3,
  tileWidth: 16,
  tileHeigth: 16,
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
      microchip: [
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
}

export const level5Config  = {
  key: "Level5",
  keyNext: "Level6",
  levelNumber: 4,
  tileWidth: 16,
  tileHeigth: 16,
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
      microchip: [
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
}

export const level6Config  = {
  key: "Level6",
  keyNext: "Level7",
  levelNumber: 5,
  tileWidth: 16,
  tileHeigth: 16,
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
      microchip: [
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

}

export const level7Config  = {
  key: "Level7",
  keyNext: "Level8",
  levelNumber: 6,
  tileWidth: 16,
  tileHeigth: 16,
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
      microchip: [
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
}

export const level8Config  = {
  key: "Level8",
  keyNext: "Level9",
  levelNumber: 7,
  tileWidth: 16,
  tileHeigth: 16,
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
      microchip: [
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
}

export const level9Config  = {
  key: "Level9",
  keyNext: "Level10",
  levelNumber: 8,
  tileWidth: 16,
  tileHeigth: 16,
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
      microchip: [
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
}

export const level10Config  = {
  key: "Level10",
  keyNext: "GameOver",
  levelNumber: 9,
  tileWidth: 16,
  tileHeigth: 16,
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
      microchip: [
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
