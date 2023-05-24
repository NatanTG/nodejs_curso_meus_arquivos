import Express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const app = Express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const basePath = path.join(__dirname, "templates");

app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);
}
);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);