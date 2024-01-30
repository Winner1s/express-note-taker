//Imports the Express.js module.
const express = require("express");

//Imports the API routes module from the specified file path.
const apiRoutes = require("./routes/apiroutes.js");

//Imports the HTML routes module from the specified file path.
const htmlRoutes = require("./routes/htmlroutes.js");

//Creates an instance of the Express.js application.
const app = express();

//Sets the port number for the server. It uses the value of the PORT environment variable if available, otherwise defaults to port 3001.
const PORT = process.env.PORT || 3001;

// Serves static files from the public directory. This allows you to
//serve CSS, JavaScript, and other static assets.
app.use(express.static("public"));

//Parses incoming requests with URL-encoded payloads.
//This middleware allows you to access form data submitted via POST requests.
app.use(express.urlencoded({ extended: true }));

//Parses incoming requests with JSON payloads. This middleware allows you to access
//JSON data sent in the request body.
app.use(express.json());

//Mounts the API routes module at the /api path. Any requests that start with /api
//will be handled by the API routes.
app.use("/api", apiRoutes);

//Mounts the HTML routes module at the root path (/).
//Any requests that do not match the API routes will be handled by the HTML routes.
app.use("/", htmlRoutes);

//Starts the server and listens on the specified port. It logs a message to the console
//indicating that the server is running.
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

//This code sets up the server, defines the middleware, and establishes the routing for both API and HTML routes.
