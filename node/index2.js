import * as fs from 'fs';
fs.copyFileSync('source.txt', 'destination.txt');
console.log('source.txt was copied to destination.txt');