import express from "express";
import * as dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser"
import { webRouter } from "./src/routes/web/index.js";
import { apiRouter } from "./src/routes/api/index.js";




// CONFIG
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json())
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "src", "views"))
app.set("view engine", "pug");
app.use(express.static("./node_modules/bootstrap/dist/"));
app.use(express.static("public", { mimetype: 'text/css' }))

// API ROUTES
app.use("/api", apiRouter)

// WEB ROUTES
app.use("/", webRouter)


// APP LISTENING
const {PORT} = process.env;
app.listen(PORT, () => console.log("Server is running on port:", PORT))