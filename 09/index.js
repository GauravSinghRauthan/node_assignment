const { subscribe } = require('diagnostics_channel');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const subscribeMeg = (channel)=>{
    console.log(`Thanks for subscribing to ${channel}`)
}

eventEmitter.addListener("subscribe",subscribeMeg)

eventEmitter.emit("subscribe","College Wallah")

console.log("after remove event ")

eventEmitter.removeListener("subscribe",subscribeMeg)

eventEmitter.emit("subscribe","College Wallah")