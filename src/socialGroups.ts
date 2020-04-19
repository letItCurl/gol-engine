interface Exterior{
    map:Array<Array<number>>;
}

export default class SocialGroups implements Exterior{
    map:Array<Array<number>>;
    constructor(map:Array<Array<number>>){
        this.map = map
    }
    bar(x:number,y:number):void{
        this.map[y][x-1] = 1
        this.map[y][x] = 1
        this.map[y][x+1] = 1
    }
    block(x:number,y:number):void{
        this.map[y][x] = 1
        this.map[y][x+1] = 1
        this.map[y+1][x] = 1
        this.map[y+1][x+1] = 1
    }
    frog(x:number,y:number):void{
        this.bar(x,y)
        this.bar(x+1,y+1)
    }
    barFive(x:number,y:number):void{
        this.map[y][x-2] = 1
        this.map[y][x-1] = 1
        this.map[y][x] = 1
        this.map[y][x+1] = 1
        this.map[y][x+2] = 1
    }
}

