interface Exterior{
    map:Array<Array<number>>;
    size:number;
    history:Array<Array<Array<number>>>;
}

export default class World implements Exterior {
    map:Array<Array<number>>;
    history:Array<Array<Array<number>>>;
    size:number;
    constructor(size:number=30){
        this.map = [];
        this.history = []
        this.size = size
    }
    initWorld():void{
        const line:Array<number> = []
        for(let y = 0 ; y<this.size ; y++){
           line.push(0)
        }
        for(let y = 0 ; y<this.size ; y++){
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
    nextDay():void{
        var liveAndLetDie:Array<Array<number>> = []
        for(let y = 1 ; y< this.size-1 ; y++){
            for(let x = 1 ; x< this.size-1 ; x++){
                if(this.getNeighbour(x,y)===3){
                    liveAndLetDie.push([x,y,1])
                }
                else if(this.getNeighbour(x,y)<2 || this.getNeighbour(x,y)>3){
                    liveAndLetDie.push([x,y,0])
                }
            }
        }
        if(this.history.length===0){
            this.history.push(JSON.parse(JSON.stringify(this.map)))    
        }
        liveAndLetDie.forEach(el=>{
            this.map[el[1]][el[0]]=el[2]
        })
        this.history.push(JSON.parse(JSON.stringify(this.map)))
    }
    clear():void{
        for(let y = 0 ; y< this.size ; y++){
            for(let x = 0 ; x< this.size ; x++){
                this.map[y][x]=0;
            }
        }
        this.history.push(JSON.parse(JSON.stringify(this.map)))
    }
    generateDays(time:number=10):void{
        for(let days = 0 ; days < time ; days ++){
            this.nextDay();
        }
    }
}


