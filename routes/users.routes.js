const express= require("express");
const app = express();



//import functions from controller
const router = express.Router();
const {getUser,
    createUser,
    getUser,
    updateUser,
    deleteUser,
} = require("../controllers/usersController");

router.route("/").get(getUser).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;