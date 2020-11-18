const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc    Home Page
// @route   GET /
exports.getHome = asyncHandler(async (req, res, next) => {
    res.status(200).render("home");
});

// @desc    Members Page
// @route   GET /members
exports.getMembers = asyncHandler(async (req, res, next) => {
    res.status(200).render("members");
});

// @desc    Projects Page
// @route   GET /projects
exports.getProjects = asyncHandler(async (req, res, next) => {
    res.status(200).render("projects");
});