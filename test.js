// const crypt = require('crypto');
import crypto from 'crypto';

// setTimeout(() => {
//     console.log('Here 1');
// }, 0);
// setTimeout(() => {
//     console.log('Here 2');
// }, 0);
// setTimeout(() => {
//     console.log('Here 3');
// }, 0);
// setTimeout(() => {
//     console.log('Here 4444');
// }, 0);

const NUM_REQUEST = 6;
for(let i = 0; i < NUM_REQUEST; i++){
    crypto.pbkdf2('secret', 'salt', 10000, 512, 'sha512', (err, key) => {
        console.time("dbsave");
        console.log(key);
        console.timeEnd('dbsave');
    });
}
// console.log('Here');