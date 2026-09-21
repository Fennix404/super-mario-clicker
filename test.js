// we need fs to read da file, and a vm for our sandbox to run in, mon
const fs = require('fs');
const vm = require('vm');

console.log('Testing... testing... testing testing testing testing... TESTING ARGGHHHHH TES-TEST--DO YOU REAAAAAAAAAAD???? Ahem');

// first verify the script (plus1button) exist
if (!fs.existsSync('plus1button.js')) {
  console.error('You won\'t make it far in this world without javascript, kid...');
  process.exit(1);
}

// now lets load the script and run it in a sandboxed environment
// we must create a sandbox with a dummy document to prevent crashes when our vm reads that line
const fileContent = fs.readFileSync('plus1button.js', 'utf8');
const sandbox = {
  x : 0,
  document: {
    getElementById: function(id) {
      return { innerHTML: 'NaN' }; 
    }
  }
};
vm.createContext(sandbox); 
vm.runInContext(fileContent, sandbox);


//now we can run a bunch of shenanigans
if (sandbox.x !== 0) {
  console.error(`Huh? Score defaulted to ${sandbox.x}??`);
  process.exit(1);
}

sandbox.plus();

if (sandbox.x !== 1) {
  console.log('Score was NOT 1 after one click...');
}

for (let i = 0; i < 10; i++) {
  sandbox.plus();
}

if (sandbox.x !== 11) {
  console.log('Score was NOT 11 after eleven clicks...');
}

for (let i = 0; i < 5; i++) {
  sandbox.minus();
}

if (sandbox.x !== 6) {
  console.log('Score was NOT 6 after eleven plus clicks and five minus clicks...');
}

console.log('Made to to the end of the tests unscathed!');