import fs from 'fs';

/**
 * Reads the data of students from a CSV data file.
 * @param {string} dataPath - The path to the CSV data file.
 * @returns {Promise<Object>} A promise that resolves to an object containing student groups.
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  // Check if dataPath is provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  
  // Read the file
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      // Parse the data and create student groups
      const fileLines = data.toString('utf-8').trim().split('\n');
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
      // Resolve the promise with student groups
      resolve(studentGroups);
    }
  });
});

// Export the readDatabase function
export default readDatabase;
