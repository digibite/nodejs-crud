const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const res = require('express/lib/response');

const app = express();

app.get('/endpoint-1', (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      message: 'Hello from endpoint 1'
    }
  })
});
app.get('/endpoint-2', (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      message: 'Hello from endpoint 2'
    }
  })
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Express listening on PORT ${PORT}`));