const {ValidationError} = require("yup")
module.exports = (err) => {
    if(err instanceof ValidationError) {
        return {
            status: 422,
            message: err.message
        }
    }
    return { 
        status: 400,
        message: err.message
    }
}