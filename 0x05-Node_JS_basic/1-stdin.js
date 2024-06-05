// Prompt the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle user input from stdin
process.stdin.on('data', (data) => {
  // Print the user's name
  process.stdout.write(`Your name is: ${data}`);
});

// Handle the end of the input stream
process.stdin.on('end', () => {
  // Inform the user that the program is closing
  process.stdout.write('This important software is now closing\n');
});
