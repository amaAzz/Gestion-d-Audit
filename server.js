const express= require("express");


// const dotenv = require("dotenv").config();
const app = express();
 
const port = process.env.PORT|| 3000;

//Cette ligne de code indique à l'application d'utiliser un ensemble de routes définies dans l'objet router lorsque l'URL commence par /api.
app.use("/api/users", require("./routes/users.routes.js"));
//callback function
app.listen(port, ()=>{
    console.log('server running on port' );
});
   