const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a project title"],
        maxlength: [50, "Title can not be more than 50 characters"]
    },
    thumbnail: {
        type: String,
        default: "no-photo.jpg",
        required: [true, "Please provide a thumbnail for the project"]
    },
    pictures: {
        type: [String],
        required: [true, "Please provide pictures for the projects"]
    },
    description: {
        type: String,
        required: [true, "Please provide a project description"]
    },
    url: {
        type: String,
        match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, "Please provide a valid URL"]
    },
    code: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }]
});

module.exports = mongoose.model("Project", ProjectSchema);