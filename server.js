const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/publish',require('./routes/published'));
app.use('/api/draft',require('./routes/draft'));


app.listen(5000,()=> console.log("Server Started at port 5000 ...."))