const express = require("express");
const connect = require("./configs/db")
const app = require("./index");

app.listen(2345,async function (){
    await connect();
    console.log('listening on the port 2345')
})