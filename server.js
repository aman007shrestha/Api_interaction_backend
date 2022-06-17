const express = require('express');
const connectDb = require('./utils/db');
require('dotenv').config();
const cors = require('cors');

const PORT = 3000;
console.log(process.env.PORT);
connectDb();
const app = express();
app.use(express.json());
app.use(cors());
// Routes
app.use('/api/blogs', require('./routes/blogRoutes'));
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
