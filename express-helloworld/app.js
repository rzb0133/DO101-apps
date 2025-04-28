const express = require('express');
const app = express();

// Openshift port or 8080 as a fallback
const port = process.env.PORT || 8080;

// Define a single “/” route returning “Hello World!”
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listening on 0.0.0.0 for OpenShift to route to
app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`);
});

