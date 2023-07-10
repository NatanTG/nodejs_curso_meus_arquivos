import Pet from '../models/Pet.js';

export default class PetController {
    static async create(req, res) {
        const { name, age, weight, color } = req.body
        const images = req.files
        const available = true

        //image upload
        if (req.file) {
            user.image = req.file.filename
        }

        // validations
        if (!name) {
            res.status(422).json({ message: 'O nome é obrigatório!' })
            return
        }
        if (!age) {
            res.status(422).json({ message: 'A idade é obrigatório!' })
            return
        }
        if (!weight) {
            res.status(422).json({ message: 'O peso é obrigatório!' })
            return
        }
        if (!color) {
            res.status(422).json({ message: 'A cor é obrigatório!' })
            return
        }
        if (!images) {
            res.status(422).json({ message: 'A imagem é obrigatória!' })
            return
        }

        // get user
        const token = getToken(req)
        const user = await getUserByToken(token)

    }
}