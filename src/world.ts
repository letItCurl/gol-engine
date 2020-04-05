import SocialGroups from './socialGroups'

interface Exterior{
    map:Array<Array<number>>;
    history:Array<Array<number>>;
}

export default class World implements Exterior {
    map:Array<Array<number>>;
    history:Array<Array<number>>;
    constructor(){
        this.map = [];
        this.history = []
    }
    initWorld(n:number):void{
        const line:Array<number> = []
        for(let y = 0 ; y<n ; y++){
           line.push(0)
        }
        for(let y = 0 ; y<n ; y++){
            this.map.push([...line])
         }
    }
    displayGrid():void{
        console.log(this.map)
    }
    getGrid():Array<Array<number>>{
        return this.map
    }
    getNeighbour(posx:number,posy:number):number{
        var n:number = 0;
        for(let y = posy-1 ; y<=posy+1 ; y++){
            for(let x = posx-1 ; x<=posx+1 ; x++){

                const notMe = ((posx!=x === false) && (posy!=y === false))

                if(this.map[y][x]===1 && !notMe){
                    n++
                }
            }
        }
        return n
    }
    
}

const astroWorld = new World()
const antiSocial = new SocialGroups(astroWorld.getGrid())


astroWorld.initWorld(5)
antiSocial.bar(2,2)
astroWorld.displayGrid()
console.log(astroWorld.getNeighbour(1,2))