const express=require('express')
const app =express();
const cors=require('cors')

app.use(express.json());
app.use(cors());

const db =require("./models");


const sereverRouter=require('./routes/server')
;app.use("/getdata",sereverRouter);


db.sequelize.sync().then(()=>{

    app.listen(3001,()=>{
        console.log("Server run on port 3001");
    });
});

