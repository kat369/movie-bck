import express from "express";
import { MongoClient } from "mongodb";
import filmsRouter from "./Routes/Flims.js"
import * as dotenv from 'dotenv';
import cors from "cors";
dotenv.config()

const app = express();
app.use(cors())
const PORT =process.env.PORT;


    const MONGO_URL=process.env.MONGO_URL;
   
const client=new MongoClient(MONGO_URL) 

 await client.connect(); 
 console.log("Mongodb is connected");


 app.use(express.json());

app.get("/", function (request, response) {
  response.send("welcome to movie app backend");
});

app.use('/films',filmsRouter);


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


export {client};




