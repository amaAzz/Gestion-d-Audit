const express= require("express");
const app = express();
const router = express.Router();
const {
    getOrganisations,
    createOrganisation,
    getOrganisation,
    updateOrganisation,
    deleteOrganisation,

}= require("../controllers/organisationController");
router.route("/").get(getOrganisations).post(createOrganisation);
router.route("/:id").get(getOrganisation).put(updateOrganisation).delete(deleteOrganisation);

export default router;