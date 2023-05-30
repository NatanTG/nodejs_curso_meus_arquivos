import express from "express";
import exphbs from "express-handlebars";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));





app.get('/products/:id', (req, res) => {

    const posts = [
        {
            id: 1,
            title: "Mouse azul bala",
            image: "https://m.media-amazon.com/images/I/518nJW8GElL._AC_SL1000_.jpg",
            content: "Esse mouse é bala e ele é azul",
            price: 50,
        },
        {
            id: 2,
            title: "Helicóptero Robinson R66 Turbine",
            image: "https://www.aeronavesavenda.com/wp-content/uploads/2022/09/EXT-22.jpg",
            content: "Equipado com Garmin G1000H NXi, Stormscope, Tail Rotor Camera, Inlet Barrier Filter, Soundprooofing, AutoPilot 3 axis, Aux. Fuel Tank, Wire Strike Kit, etcEssa é a descrição do produto 2",
            price: 100.000,
        },
        {
            id: 3,
            title: "Cigarro eletrônico descartável Elf Bar 4000 puffs recarregável",
            image: "https://www.clubedovapor.com/6907-thickbox_default/pod-descartavel-elf-bar-4000-puffs-recarregavel.jpg",
            content: "O Stig Elf Bar BC4000, também conhecido como Pod Elf Bar 4000 puffs, é um cigarro eletrônico descartável leve, prático e fácil de ser levado para qualquer lugar",
            price: 100,
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

    const posts2 = [
        {
            id: 1,
            title: "Mouse azul bala",
            image: "https://m.media-amazon.com/images/I/518nJW8GElL._AC_SL1000_.jpg",
        },
        {
            id: 2,
            title: "Helicóptero Robinson R66 Turbine",
            content: "Equipado com Garmin G1000H NXi, Stormscope, Tail Rotor Camera, Inlet Barrier Filter, Soundprooofing, AutoPilot 3 axis, Aux. Fuel Tank, Wire Strike Kit, etcEssa é a descrição do produto 2",

            image: "https://www.aeronavesavenda.com/wp-content/uploads/2022/09/EXT-22.jpg",
        },
        {
            id: 3,
            title: "Cigarro eletrônico descartável Elf Bar 4000 puffs recarregável",
            content: "O Stig Elf Bar BC4000, também conhecido como Pod Elf Bar 4000 puffs, é um cigarro eletrônico descartável leve, prático e fácil de ser levado para qualquer lugar",

            image: "https://www.clubedovapor.com/6907-thickbox_default/pod-descartavel-elf-bar-4000-puffs-recarregavel.jpg",
        },
    ];


    res.render("home", { posts2 });


});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});