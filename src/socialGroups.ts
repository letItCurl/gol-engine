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
}

