import express from 'express';
import mapRoutes from './routes';

// Create an Express application
const app = express();
const PORT = 1245;

// Map routes to controllers
mapRoutes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the Express application
export default app;
