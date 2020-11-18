const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

// Load ENV vars
dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDB();

// Route files
const index = require("./routes/index");

const app = express();

// Set view engine
app.set("view engine", "ejs");

// Body parser
app.use(express.urlencoded({ extended: true }));

// DEV logging middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Mount routers
app.use(index);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);

    // Close server & exit process
    server.close(() => process.exit(1));
});