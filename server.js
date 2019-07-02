const express = require('express');
const { join } = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(join(process.cwd(), 'public')));

app.listen(PORT, () => console.log('Application successfully started and listen at port', PORT));
