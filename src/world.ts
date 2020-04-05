import SocialGroups from './socialGroups'

interface Exterior{
    map:Array<Array<number>>;
}

export default class World implements Exterior {

    map:Array<Array<number>>;
    name:string;

    constructor(name:string){
        this.name = name;
        this.map = [];
    }
    display(toDisp:string=this.name):void{
        console.log(toDisp)
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
}

const astroWorld = new World('travis')
const antiSocial = new SocialGroups(astroWorld.getGrid())


astroWorld.initWorld(5)
antiSocial.bar(2,2)
astroWorld.displayGrid()