const express = require('express');
const bodyParser = require('body-parser');
const {createServer}=require("http")
const app = express();
app.use(bodyParser.json());
const cors =require('cors')
const generalRouts= require('./Apis/generalRoutes.js');
const dbConfig = require('./dataBase/config/dbConfig.js');
const httpServer=createServer(app)
const server= httpServer.listen(3000, () => console.log('Example app listening on port 3000!'));

 app.use(cors({
     origin:'http://localhost:4200'
 }))

generalRouts(app)
dbConfig(app)