import SocialGroups from './socialGroups'
import World from './world'

const astroWorld = new World(10)
const antiSocial = new SocialGroups(astroWorld.getGrid())


astroWorld.initWorld()
antiSocial.frog(4,4)
astroWorld.generateDays()
console.log(astroWorld.history)