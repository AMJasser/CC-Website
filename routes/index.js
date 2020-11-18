const express = require("express");
const {
    getHome,
    getMembers,
    getProjects
} = require("../controllers/index");

const router = express.Router();

router
    .get("/", getHome)
    .get("/members", getMembers)
    .get("/projects", getProjects)

module.exports = router;