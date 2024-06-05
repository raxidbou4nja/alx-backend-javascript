const express = require('express');
const fs = require('fs').promises; // Using fs.promises for async file reading

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

// Function to count the number of students from the database file
const countStudents = async (dataPath) => {
  if (!dataPath) {
    throw new Error('Database file not provided');
  }

  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, -1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, -1);
      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const reportParts = [`Number of students: ${Object.values(studentGroups).reduce((total, group) => total + group.length, 0)}`];
    for (const [field, group] of Object.entries(studentGroups)) {
      reportParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
    }

    return reportParts.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// Define route for root URL
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Define route for /students
app.get('/students', async (_, res) => {
  try {
    const report = await countStudents(DB_FILE);
    const responseText = `This is the list of our students\n${report}`;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.status(200).send(responseText);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : error.toString();
    const responseText = `Error: ${errorMessage}`;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.status(500).send(responseText);
  }
});

// Start the server on specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the Express app for testing
module.exports = app;
