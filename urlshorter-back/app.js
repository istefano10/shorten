const express = require('express');
const app = express();
const connectDB = require('./config/db');
var cors = require('cors');
require('dotenv').config({ path: './config/.env' });

connectDB();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());


app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));

// Server Setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
