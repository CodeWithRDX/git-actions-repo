const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello World! Again');
})
app.get('/health', (req, res) => {
  res.send('Health is fine! Again');
})
app.get('/about', (req, res) => {
  res.send('About us! Again');
})
app.get('/fix', (req, res) => {
  res.send('fix us! Again');
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
})