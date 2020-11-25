const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a first name"],
        maxlength: [25, "Name can not be more than 25 characters"]
    },
    middleName: {
        type: String,
        maxlength: [25, "Name can not be more than 25 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Please provide a last name"],
        maxlength: [25, "Name can not be more than 25 characters"]
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }]
});

module.exports = mongoose.model("Member", MemberSchema);