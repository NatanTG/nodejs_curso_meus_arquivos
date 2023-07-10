import Pet from '../models/Pet.js';

export default class PetController {
    static async create(req, res) {

        res.json({ message: 'Pet created' });


        // try {
        //     //     const pet = await Pet.create(req.body);
        //     //     res.status(200).json(pet);
        //     // } catch (error) {
        //     //     res.status(500).json({ error: error.message });
        // }
    }
}