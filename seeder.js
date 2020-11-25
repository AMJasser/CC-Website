const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const Member = require("./models/Member");
const Project = require("./models/Project");

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Read JSON files
const members = [
    {
        _id: "5d713995b721c3bb38c1f5d0",
        firstName: "Abdullah",
        lastName: "AlJasser",
        projects: ["5d725a037b292f5f8ceff787", "5d725a1b7b292f5f8ceff788"]
    },
    {
        _id: "5d713a66ec8f2b88b8f830b8",
        firstName: "Hassan",
        lastName: "AlLail",
        projects: ["5d725a037b292f5f8ceff787", "5d725a1b7b292f5f8ceff788"]
    },
];
const projects = [
    {
        _id: "5d725a037b292f5f8ceff787",
        title: "Some project2",
        thumbnail: "some pic",
        pictures: ["some pic", "some pic"],
        description: "it's nice",
        members: ["5d713995b721c3bb38c1f5d0", "5d713a66ec8f2b88b8f830b8"]
    },
    {
        _id: "5d725a1b7b292f5f8ceff788",
        title: "Some project",
        thumbnail: "some pic",
        pictures: ["some pic", "some pic"],
        description: "it's nice",
        members: ["5d713995b721c3bb38c1f5d0", "5d713a66ec8f2b88b8f830b8"]
    },
];

// Import into DB
const importData = async () => {
    try {
        await Member.create(members);
        await Project.create(projects);
        console.log("Data Imported...");
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

// Delete data
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany();
        await Course.deleteMany();
        await User.deleteMany();
        await Review.deleteMany();
        console.log("Data Destroyed...".red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

const testFunc = async () => {
    try {
        const members = await Member.findOne({_id: "5d713995b721c3bb38c1f5d0"}).populate("projects");
        console.log(members);
    } catch(err) {
        console.error(err);
    }
}

if (process.argv[2] === "-i") {
    importData();
} else if (process.argv[2] === "-d") {
    deleteData();
} else if (process.argv[2] === "-t") {
    testFunc();
}