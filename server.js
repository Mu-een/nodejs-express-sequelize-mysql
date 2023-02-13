const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express);

const db = require("./app/models");
db.sequelize.sync()
    
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req,res)=> {
    res.json({ message: "Welcome to Mu-een's application"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`)
});