// avoir tous les utilisateur
//@route GET /api/users
//@access public
const getUsers = (req, res)=>{
    res.status(200).json({message: "Get all Users"});

};
// creer nouveau contact
//@route POST /api/users
//@access public
const createUser = (req, res)=>{
    res.status(201).json({message: "Create User"});

};

// avoir  un utilisateur
//@route GET /api/users/:id
//@access public
const getUser = (req, res)=>{
    res.status(200).json({message:`Get User For ${req.params.id}`});

};

// maj un utilisateur
//@route PUT /api/users/:id
//@access public
const updateUser = (req, res)=>{
    res.status(200).json({message:`Update User For ${req.params.id}`});

};

// supprimer  un utilisateur
//@route DELETE/api/users/:id
//@access public
const deleteUser = (req, res)=>{
    res.status(200).json({message: `Delete User For ${req.params.id}`});

};
module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
};