import express from "express";
const router = express.Router();
import { products } from "./data.js";

router.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find((product) => product.id === Number(productId));

    if (!product) {
        res.status(404).send('Produto não encontrado');
        return;
    }

    res.render('product-detail', { product, imageUrl: product.image });
});

router.get("/", (req, res) => {
    res.render("home", { products });
});

export default router;
