import  express  from "express";
import router from "./routes/general.routes.js";


const app = express();
const PORT = 3000;


app.use('/api',router);
app.listen(PORT, ()=>{
    console.log("server running");
});
