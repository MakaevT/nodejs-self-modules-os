import os, {hostname} from 'os'
import { greetings } from './welcome.js';
console.log(os.homedir())

console.log(os.hostname())

console.log(os.version())

console.log(os.type())

console.log(greetings(os.type())) 