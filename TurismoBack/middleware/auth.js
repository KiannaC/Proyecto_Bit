import { Jwt } from "jsonwebtoken";


exports.aut = async (req,res) => {

    try {

        const token = req.headers.authorization
        const secret = process.config.SECRET_KEY

        if (!token) throw "no hay token"
        if (!secret) throw "No hay llave secreta"

        const decoded = jwt.verify(token, secret)

        return next()
        
    } catch (error) {
        return console.log('Error');
    }

}