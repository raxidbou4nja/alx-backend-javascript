const fs = require('fs').promises;

/**
 * Counts the number of students in each field and prints the details.
 * @param {string} dataPath - The path to the student database file.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 * @throws Will throw an error if the database cannot be loaded.
 */
const countStudents = async (dataPath) => {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, -1);

    // Process each line of the file
    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, -1);
      const field = studentRecord[studentRecord.length - 1];

      // Initialize the field group if it doesn't exist
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      // Create a student object and add it to the appropriate group
      const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    // Calculate the total number of students
    const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    // Print the number of students and their names for each field
    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
