const usersController = {
    registerUser: async (req,res) =>{
        try {
        }
        catch (error) {
            console.log(error);
            res.status(500).json({message: 'Internal server error'});
        }
    },

    loginUser: async (req, res) => {
        try {

        }
        catch (error) {
            console.log(error);
            res.status(500).json({message: 'Internal server error'});
        }
    },

    logoutUser: async (req, res) => {
        try {

        }
        catch (error) {
            console.log(error);
            res.status(500).json({message: 'Internal server error'});
        }
    },

     getUserdata: async (req, res) => {
        try {

        }
        catch (error) {
            console.log(error);
            res.status(500).json({message: 'Internal server error'});
        }
    },

    };

    module.exports = usersController;