const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/user");
const plotRoutes = require("./routes/plots");


const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json())
app.use('/api', userRoutes);
app.use('/api', plotRoutes);

//Rutas
app.get('/', (req, res) => {
    res.send('Welcome to my API')
});

//MongoDB conexión
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port', port));

