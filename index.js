const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const AuthRouter = require('./routes/AuthRouter');
const productRouter = require('./routes/prodcutRouter');
const cors = require('cors');

require('dotenv').config();
const connectDB = require('./models/db');
connectDB();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/auth',AuthRouter);
app.use('/products',productRouter);


// home route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running successfully 🚀",
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 