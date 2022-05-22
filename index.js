// import dotenv
import 'dotenv/config'; 
// import express
import express from 'express';
import usersRouter from './routes/usersRouter.js';
// import user
// call express
const app = express();
// create port variable to either what hosting 
//service gives me(process.env.Port) or port 5000
const port = process.env.PORT || 5000;
// use Middleware "app.use" to translate everything
// whats incoming into json format
app.use(express.json());
// create middleware to tell where the home route is
app.use('/api/users', usersRouter);
// Create an Express server with separate routes for:
// GET  /  : To get all the users 
app
  .route("/")
  .get((req, res) =>
    res.send(
      "<h1>Willkommen auf unserer API</h1><h2>folgende Endpunkte sind verfügbar:</h2><p>/users -> alle Users abrufen & neue Users hinzufügen</p><p>/users/:id -> einzelnen User abrufen, User löschen, User aktualisieren</p><p>/orders -> alle Orders abrufen & neue Orders hinzufügen</p><p>/order/:id -> einzelnen Order abrufen, Order löschen, Order aktualisieren</p>"
    )
  );

// create endpoint called /users or /users/:id which can execute all CRUD operations
app.route('/users').get((req, res) => res.json(users));
// create a endpoint for one user with /users/:id
app.route("/users/:id").get((req, res) => res.json());
// here we start our server and tell it that he has to listen for 
// incoming requests 
app.listen(port, () => console.log(`Server is listening on Port ${port}`));