import Pet from '../models/Pet.js';
import getToken from '../helpers/get-token.js';
import ObjectId from 'mongoose';
import getUserByToken from '../helpers/get-user-by-token.js';

export default class PetController {
    static async create(req, res) {
        const { name, age, weight, color } = req.body
        const images = req.files
        const available = true

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
        if (images.length === 0) {
            res.status(422).json({ message: 'A imagem é obrigatória!' })
            return
        }

        // get user
        const token = getToken(req)
        const user = await getUserByToken(token)


        //create pet
        // create pet
        const pet = new Pet({
            name: name,
            age: age,
            weight: weight,
            color: color,
            available: available,
            images: [],
            user: {
                _id: user._id,
                name: user.name,
                image: user.image,
                phone: user.phone,
            },
        })

        images.map((image) => {
            pet.image.push(image.filename)
        })

        try {
            const newPet = await pet.save()

            res.status(201).json({
                message: 'Pet cadastrado com sucesso!',
                newPet: newPet,
            })
        } catch (error) {
            res.status(500).json({ message: error })
            return
        }
    }
}

