import conn from '../db/conn.js'
import { ObjectId } from 'mongodb'
const newObjectId = new ObjectId()

class Product {
    constructor(name, price, description, image) {
        this.name = name
        this.price = price
        this.description = description
        this.image = image
    }

    async save() {
        const product = conn.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            description: this.description,
            image: this.image,
        })

        return product
    }

    static async getProducts() {
        const products = conn.db().collection('products').find().toArray()

        return products
    }

    static async getProductById(id) {

        const objectId = new ObjectId(id)
        const product = conn.db().collection('products').findOne({ _id: objectId })

        return product

    }

    static async removeProduct(id) {

        await conn
            .db()
            .collection('products')
            .deleteOne({ _id: new ObjectId(id) })

        return
    }

    async updateProduct(id) {
        try {
            await conn.db().collection('products').updateOne(
                { _id: new ObjectId(id) },
                { $set: this }
            );

        } catch (error) {
            // Trate o erro de atualização aqui
            console.error('Erro ao atualizar o produto:', error);
        }
    }

}


export default Product