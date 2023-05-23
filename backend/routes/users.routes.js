import  express  from "express";
//import functions from controller
const router = express.Router();


router.route("/").get((req, res)=>{
    res.send({data: "here is your data test"});

});
router.route("/create").post((req, res)=>{
    res.send({data: "here is your data"});

});
router.route("/update").patch((req, res)=>{
    res.send({data: "here is your data"});

});


export default router;