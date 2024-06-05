import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Map routes to corresponding controllers.
 * @param {Object} app - The Express application object.
 */
const mapRoutes = (app) => {
  // Map homepage route to AppController's method
  app.get('/', AppController.getHomepage);
  
  // Map /students route to StudentsController's method for retrieving all students
  app.get('/students', StudentsController.getAllStudents);
  
  // Map /students/:major route to StudentsController's method for retrieving students by major
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

// Export the mapRoutes function
export default mapRoutes;
