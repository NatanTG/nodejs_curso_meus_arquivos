import express from "express";
import exphbs from "express-handlebars";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");





app.get('/products/:id', (req, res) => {

    const posts = [
        {
            id: 1,
            title: "Mouse azul bala",
            content: "Esse mouse é bala e ele é azul",
        },
        {
            id: 2,
            title: "Helicóptero Robinson R66 Turbine",
            content: "Equipado com Garmin G1000H NXi, Stormscope, Tail Rotor Camera, Inlet Barrier Filter, Soundprooofing, AutoPilot 3 axis, Aux. Fuel Tank, Wire Strike Kit, etcEssa é a descrição do produto 2",

        },
        {
            id: 3,
            title: "Cigarro eletrônico descartável Elf Bar 4000 puffs recarregável",
            content: "O Stig Elf Bar BC4000, também conhecido como Pod Elf Bar 4000 puffs, é um cigarro eletrônico descartável leve, prático e fácil de ser levado para qualquer lugar",

        },
    ];

    const productId = req.params.id;
    // Lógica para encontrar o produto com o ID fornecido no array de produtos
    const product = posts.find((product) => product.id === Number(productId));

    if (!product) {
        res.status(404).send('Produto não encontrado');
        return;
    }

    res.render('product', { product, imageUrl: product.image });

});


app.get("/", (req, res) => {

    const posts = [
        {
            id: 1,
            title: "Mouse azul bala",
        },
        {
            id: 2,
            title: "Helicóptero Robinson R66 Turbine",
            content: "Equipado com Garmin G1000H NXi, Stormscope, Tail Rotor Camera, Inlet Barrier Filter, Soundprooofing, AutoPilot 3 axis, Aux. Fuel Tank, Wire Strike Kit, etcEssa é a descrição do produto 2",
            price: 100.000,
            image: "https://www.aeronavesavenda.com/wp-content/uploads/2022/09/EXT-22.jpg",
        },
        {
            id: 3,
            title: "Cigarro eletrônico descartável Elf Bar 4000 puffs recarregável",
            content: "O Stig Elf Bar BC4000, também conhecido como Pod Elf Bar 4000 puffs, é um cigarro eletrônico descartável leve, prático e fácil de ser levado para qualquer lugar",
            price: 100,
            image: "https://www.clubedovapor.com/6907-thickbox_default/pod-descartavel-elf-bar-4000-puffs-recarregavel.jpg",
        },
    ];


    res.render("home", { posts });


});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});