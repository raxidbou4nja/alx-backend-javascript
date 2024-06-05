/**
 * Controller for handling miscellaneous routes.
 */
class AppController {
  /**
   * Handle request for homepage.
   * @param {Object} request - The request object.
   * @param {Object} response - The response object.
   */
  static getHomepage(request, response) {
    // Send a response with status code 200 and message
    response.status(200).send('Hello Holberton School!');
  }
}

// Export the controller class
export default AppController;
