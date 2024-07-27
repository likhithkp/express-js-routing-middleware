/**
 * Express.js is a npm package. It is a framework to build web servers.
 * Framework are those packages that has certain rules and most commonly a flow how to achieve a certain result.
 * Express manages everything from req to res.
 * */

//Import Express and set it to const names express, express is a func.tion
const express = require("express");
// Set the express function to app variable.
const app = express();
const PORT = 3001;

/**
 * Routes
 * ---------
 * Any slug(technical word for path) or path that comes after the domain name is called routes
 * Ex: https:www.github.com/likhithkp.
 * Here, https:www.github.com is the domain and likhithkp is the route.
 * */

/**
 * Middleware
 * ------------
 * Middleware is a function which is executed before you hit a path, only if middleware exists there for that path, it will perform
 * those actions in that code before sending back the res.
 * Middlewares are almost used in every path, authentication is the best example for middlware.
 * Before you hit a certain path that needs a user to be logged in to view, the middleware action works here. It will check if the user is 
 * logged in if not it will hit the different path
 * 
 * There are 2 types of middlewares
 * One is called using the app.use(line 34). This is runned before any routes are hit.
 * It has access to req, res and has an extra function called next.
 * After the middleware is executed and if the conditon is satisfied, next() must be given to make sure the next part is executed.
 */

app.use((req, res, next) => {
    console.log("Middleware running");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello").status(200)
});

app.get("/profile", (req, res) => {
    res.send("profile page").status(200)
});

// Start the server and keep it running at any port.
app.listen(PORT,() => {
    console.log(`Server running @ port ${PORT}`);
});