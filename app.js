const express = require("express")
const bodyParser = require("body-parser")
const Company = require("require-all")({dirname: __dirname + "/path/Company/"})
const CompanyPermission = require("require-all")({dirname: __dirname + "/path/CompanyPermission/"})
const CompanyRole = require("require-all")({dirname: __dirname + "/path/CompanyRole/"})
const CoWithRole = require("require-all")({dirname: __dirname + "/path/CoWithRole/"})
const RoleWithPermission = require("require-all")({dirname: __dirname + "/path/RoleWithPermission/"})



const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


Object.keys(Company).forEach(function(key){
    app.use(Company[key])
})
Object.keys(CompanyPermission).forEach(function(key){
    app.use(CompanyPermission[key])
})
Object.keys(CompanyRole).forEach(function(key){
    app.use(CompanyRole[key])
})
Object.keys(CoWithRole).forEach(function(key){
    app.use(CoWithRole[key])
})
Object.keys(RoleWithPermission).forEach(function(key){
    app.use(RoleWithPermission[key])
})


app.use(function (req, res, next) {
  res.status(404).send("404 Not Found")
})

const hostname = process.env.IP || "0.0.0.0"
const port = process.env.PORT || 9004

app.listen(port, hostname,()=>{
    console.log(`server listening at ${hostname}:${port}`)
})
