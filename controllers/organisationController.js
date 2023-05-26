// avoir tous les organisations 
//@route GET /api/organisation
//@access public
const getOrganisations = (req, res)=>{
    res.status(200).json({message: "Get all Organisations"});

};
// creer nouveau organisation 
//@route POST /api/organisation
//@access public
const createOrganisation = (req, res)=>{
    res.status(201).json({message: "Create Organisation"});

};

// avoir  une organisation
//@route GET /api/organisation/:id
//@access public
const getOrganisation = (req, res)=>{
    res.status(200).json({message:`Get Organisation For ${req.params.id}`});

};

// maj d'une organisation
//@route PUT /api/oraganisation/:id
//@access public
const updateOrganisation = (req, res)=>{
    res.status(200).json({message:`Update Organisation For ${req.params.id}`});

};

// supprimer  un utilisateur
//@route DELETE/api/users/:id
//@access public
const deleteOrganisation = (req, res)=>{
    res.status(200).json({message: `Delete Organisation For ${req.params.id}`});

};
module.exports = {
    getOrganisations,
    createOrganisation,
    getOrganisation,
    updateOrganisation,
    deleteOrganisation,
};