interface IPlayer {
    standAnimation():void;
    walkRightAnimation():void;
    walkLeftAnimation():void;
    rightMovement():void;
    leftMovement():void;
    upMovement():void;
    downMovement():void;
    getPositionX():integer;
    getPositionY():integer;
    getNextRightPosition():integer;
    getNextLeftPosition():integer;
    getNextUpPosition():integer;
    getNextDownPosition():integer;
    getCanMoveRight():boolean;
    getCanMoveLeft():boolean;
    getCanMoveUp():boolean;
    getCanMoveDown():boolean;
    setCanMoveRight(value:boolean):void;
    setCanMoveLeft(value:boolean):void;
    setCanMoveUp(value:boolean):void;
    setCanMoveDown(value:boolean):void;
    setScore():void;
}

export default IPlayer;