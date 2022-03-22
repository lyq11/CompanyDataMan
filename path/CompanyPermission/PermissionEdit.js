const express = require("express")
const router = express.Router()
const check = require("express-validator/check").check
const checktoken = require("../../middleware/verify_mid")
const validationResult = require("express-validator/check").validationResult
const rpcIns = require("../../ins/CompanyManIns").getInstance()
router.post("/company/permission/edit", [
    check("id")
        .notEmpty()
        .withMessage("id can not be empty"),
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
    if ("tag" in req.body){
        data.tag  = req.body["tag"]
    }
    if ("name" in req.body){
        data.name =req.body["name"]
    }
    if ("summarize" in req.body){
        data.summarize =req.body["summarize"]
    }
    rpcIns.updatePermissions(data,(result) => {
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
