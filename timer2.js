const stdOut = process.stdout;
const stdIn = process.stdin;
// don't worry about these next two lines of setup work.
stdIn.setRawMode(true);
stdIn.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////

stdIn.on("data", key => {
  if (key === "\u0003") {
    stdOut.write("Thanks for using me, ciao!\n");
    process.exit();
  }
  if (key === "b") {
    stdOut.write("\x07");
  }
  if (
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "7" ||
    key === "8" ||
    key === "9"
  ) {
    stdOut.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      stdOut.write("\x07");
    }, key * 1000);
  }
});
