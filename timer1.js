// process.stdout.write("\x07");
const stdOut = process.stdout;
const arg = process.argv.slice(2);

const timer = function(number) {
  if (isNaN(number) || number <= 0) {
    return;
  }
  setTimeout(() => {
    stdOut.write("\x07");
  }, number * 1000);
};

for (let i = 0; i < arg.length; i++) {
  timer(arg[i]);
}

// node timer1.js 10 3 5 15 9
/*
3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
*/
