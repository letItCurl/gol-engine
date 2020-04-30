<p align="center">
  <a style="Color: #f694ff;" href="https://gameoflife-ts.web.app/"><img src="https://res.cloudinary.com/duydvdaxd/image/upload/v1587807196/Vue-Sprint/GOL_ENGINE_dz4s0y.png"/></a>
</p>

<p align="center" ><a style="Color: #f694ff;" href="https://gameoflife-ts.web.app/" >Look what we can do !</a></p>

# Features [![](https://img.shields.io/badge/autor-letItCurl-red.svg)](https://www.linkedin.com/in/roland-lopez-developer/?locale=en_US)

You can create an instance of the object world and with it you can:

- Produce a NxN matrix called: "map".
- Execute all rules to all cell in the NxN matrix.
- It store automatically the history in the object world as: world.history
- Set initial patern in the world. (bar / gliders / etc)

# How to use this ? [![](https://img.shields.io/badge/version-1.0.0-green.svg)]()

## installation:
cd into your project and execute:
```
npm i gol-engine
//or with yarn
yarn add gol-engine
```

## Classes:

### World class:

>This class do all the job: generate days / save history / set patterns
```
const {world} = require('gol-engine')
const myWorld = new world['default'](5) //The argument is the size on the matrix
```

| Data: | Desc: |
| :--- | :---: |
| map | nxn matrix of 0 or 1 |
| history | list of nxn matrix of 0 or 1 |

| Methods: | Desc: |
| :--- | :--- |
| initWorld() | This create the inital matrix (no arguments) |
| displayGrid() |  |
| getGrid() |  | 
| getNeighbour(posx:number,posy:number) | return the numbers of neighbour |
| nextDay() | generate the next frame and save the previous one in the history | 
| generateDays(time:number=10) | execute nextDays() n times. Default value of n=10 |
| bar(x:number,y:number) | Spawn a bar of 3 cells at (x,y) | 
| block(x:number,y:number) | Spawn a block of 2x2 cells at (x,y) | 
| frog(x:number,y:number) | Spawn a frog @(x,y) | 
| barFive(x:number,y:number) | Spawn a bar of five cells at (x,y) | 
| glider(x:number,y:number) | Spawn a Glider at (x,y) | 
| uClown(x:number,y:number) | Spawn a Clown at (x,y) | 

## Example:

Here is the instruction for basic usage:
- create a file and cd into it.
- install the package with:
```
npm i gol-engine
//or with yarn
yarn add gol-engine
```
- create a file named "gol.js"
- paste the following code inside "gol.js"
```
const {world} = require('gol-engine')
// in your favorite framework:
// import {world} from 'gol-engine'

const myWorld = new world['default'](5)

console.log('INIT..')
myWorld.initWorld()

console.log('### INITIAL MAP ###')
console.log(myWorld.map)

console.log('SET BAR @(2,2)...')
myWorld.bar(2,2)

console.log('### MAP WITH BAR ###')
console.log(myWorld.map)

console.log('GENRERATING NEXT FRAME...')
myWorld.nextDay()

console.log('### FINAL MAP ###')
console.log(myWorld.map)
```
- run gol.js:
```
node ./gol.js
```
- enjoy the logs !

# Important

***Remenber to init() before make using the object world.***

# Technical stack
- TS
- ESlint
- Npm
- Git
- A lot of patience :p

# About
Npm module made from scratch by me, for you, with <3. 
I used this code to do <a href="https://github.com/letItCurl/vue-gol-ts">this<a/> in Vue.js with the TS template.
<table style="border: none;">
  <tr>
    <td>
      <div style="width: 120px;">
        <img style="width: 120px;" src="https://res.cloudinary.com/duydvdaxd/image/upload/w_120,c_fill,ar_1:1,g_auto/v1587723517/Rodeooo_khmmmu.jpg"/>
    </div>
    </td>
    <td>
      <div style="margin-left: 30px;">
        <p>Hey there !</br>
        I'm letItCurl, fullstack developer engineer in freelance a.k.a Roland in real life :p</br>
        If you have any question you can <a href="https://www.linkedin.com/in/roland-lopez-developer/?locale=en_US">contact me</a> if you wish !</p>
        <p>I'm always ready to help !</p>
        <a style="color: #f694ff;" href="mailto:rolandlopez.developer@gmail.com?subject=Hey! Are you available?">Email me</a>
    </div>
    </td>
  </tr>
</table>

