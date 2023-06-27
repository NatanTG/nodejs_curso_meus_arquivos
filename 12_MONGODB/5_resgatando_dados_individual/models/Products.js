import conn from '../db/conn.js'
import { ObjectId } from 'mongodb'

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
        const product = await conn.db().collection('products').findOne({ _id: new ObjectId(id) })

        return product

    }
}


export default Product