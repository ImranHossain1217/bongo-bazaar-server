const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg:'wellcome to bongobazaar!!.'});
});

app.listen(port,()=> {
    console.log(`BongoBazaar Server running on ${port}`)
});
