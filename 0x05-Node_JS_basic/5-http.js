const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
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

// Route handlers for different endpoints
const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.end(responseText);
    },
  },
  {
    route: '/students',
    async handler(_, res) {
      const responseParts = ['This is the list of our students'];

      try {
        const report = await countStudents(DB_FILE);
        responseParts.push(report);
      } catch (error) {
        responseParts.push(error instanceof Error ? error.message : error.toString());
      }

      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.end(responseText);
    },
  },
];

// Handling HTTP requests
app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      return;
    }
  }

  // Return 404 for undefined routes
  res.statusCode = 404;
  res.end('404 Not Found');
});

// Start the HTTP server
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Exporting the app for testing
module.exports = app;
