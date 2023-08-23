const express = require("express");
const dotenv = require("dotenv").config({ path: './config.env'});
const app = express();
const colors = require("colors");
const connectDB = require("./database/db");
const cors = require('cors');
const path = require('path');
const router = require("./routes/router")
const ServiceProvider = require("./models/serviceProvider")


// Initiall Set Up
app.use(cors({
    origin: '*',
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use(cors());
app.use('/imgs', express.static(path.join(__dirname, 'imgs')));
app.use("/api",router);



// Connecting to MongoDB
connectDB();

app.post('/add-service-provider', async (req, res) => {
    try {
      // Create a new service provider using the dummy data
      const newServiceProvider = new ServiceProvider(req.body);
  
      // Save the new service provider to the database
      const savedServiceProvider = await newServiceProvider.save();
  
      res.status(201).json({ success: true, data: savedServiceProvider });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'An error occurred' });
    }
  });
// Starting the serveron Localhost
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log(`Server running on Port ${PORT}`.yellow.bold);
})

