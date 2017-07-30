//import express from 'express'
//import router  from './src/router/index'
var path = require('path')
var express = require('express')
var app = express();
var router = express.Router()
app.use('/',express.static(path.join(__dirname,'/')))
app.listen(80,function(){
    console.log("services is running")
})
