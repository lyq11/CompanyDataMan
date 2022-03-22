const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checktoken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/CompanyManIns").getInstance()
router.post("/company/edit", [
    check("id")
        .notEmpty()
        .isNumeric()
        .withMessage("id can not be empty"),
    check("name")
        .isString()
        .withMessage("product can not be empty"),
    check("address")
        .isString()
        .withMessage("product can not be empty"),
    check("contact")
        .isNumeric()
        .withMessage("product can not be empty"),
    check("email")
        .isEmail()
        .withMessage("product can not be empty"),
    checktoken
], function (req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.mapped() })
    }
    let data = {}
    if ("id" in req.body){
        data.id  = req.body["id"]
    }
    if ("name" in req.body){
        data.name  = req.body["name"]
    }
    if ("address" in req.body){
        data.address =req.body["address"]
    }
    if ("contact" in req.body){
        data.contact =req.body["contact"]
    }
    if ("email" in req.body){
        data.email =req.body["email"]
    }
    console.log(data)
    rpcIns.updateCompany(data,(result) => {
            console.log(result)
            if (result === 1) {
                res.json({ status: 1, message: "edit success" })
            } else {
                res.json({ status: -1, message: "edit fail" })
            }
        }, (error) => {
            res.json({ status: -1, message: error })
        })
})
module.exports = router
