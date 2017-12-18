let a = require('./calculator.js');
const { spawn } = require('child_process');

let add = a.add(3, 3);
let mul = a.mul(3, 3);
let sub = a.subs(4,2);

console.log(mul);
console.log(add);
console.log(sub);

let x = a.power_level(5000);

console.log(x);

let emp = new a.User('alam', 'alam@mail.com');

console.log(emp.name);
console.log(emp.email);

console.log('=================================================');

const ls = spawn('ls', ['-lh', '/Users/alam/']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
