import express from 'express';
import bodyParser from 'body-parser'; //query, params
import viewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from './configs/connectDB';
import dotenv from "dotenv/config";
import cors from "cors";

let app = express();

//cors
app.use(cors({ credentials: true, origin: true }));

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


viewEngine(app);
initWebRoutes(app);

connectDB();


let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Web is running on port ${port}`)
})