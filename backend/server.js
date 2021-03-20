const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello from Express!'));
app.use('/api', routes);

if (process.argv.includes('dev')) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
}

module.exports = app;
