const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());


app.post('/webhook', (req, res) => {
  console.log('🔔 Webhook received:');
  console.log(req.body);

  res.status(200).send('✅ Webhook received successfully');
});


app.listen(PORT, () => {
  console.log(`🚀 Webhook server is running on http://localhost:${PORT}`);
});
