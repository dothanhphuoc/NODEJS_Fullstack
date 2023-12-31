import express from 'express';
import bodyParser from 'body-parser'; //query, params
import viewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from './configs/connectDB';
import dotenv from "dotenv/config";
// import cors from "cors";

let app = express();

//cors
// app.use(cors({ credentials: true, origin: true }));
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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