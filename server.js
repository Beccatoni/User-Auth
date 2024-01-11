const express = require('express');
const app = express();
const mongoose = require('mongoose'); // for database
const dotenv = require('dotenv'); // for environment variables
const helmet = require('helmet');
const morgan = require('morgan');
const {router} = require('./routes/index');


dotenv.config();

// Your MongoDB connection string (replace 'your_actual_connection_string' with the actual connection string)
const mongoURL = process.env.MONGO_URL;

// Connect to MongoDB using .then()
mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

  //middleware
  app.use(express.json());
  app.use(helmet());
  app.use(morgan('common'));

//   Routes
app.use('/api/v1', router);



// server connection
app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT)
})