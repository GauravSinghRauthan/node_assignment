const { subscribe } = require('diagnostics_channel');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const subscribeMeg = (channel)=>{
    console.log(`Thanks for subscribing to ${channel}`)
}

eventEmitter.addListener("subscribe",subscribeMeg)

eventEmitter.emit("subscribe","College Wallah")

console.log(`The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`)

eventEmitter.setMaxListeners(5)

console.log(`The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`)