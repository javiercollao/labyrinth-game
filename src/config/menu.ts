export type ConfigMenu = {
    key: string,
    image: string, 
    btn: string, 
    x: number;
    y: number;
};
  
export const menuGameInit: ConfigMenu= {
    key: 'InitGame',
    image: 'menu-intro',
    btn: 'btn-menu-intro',
    x: 373,
    y: 289
};
  
export  const menuGameOver: ConfigMenu = {
    key: 'GameOver',
    image: 'menu-end',
    btn: 'btn-menu-end',
    x: 80,
    y: 300
};