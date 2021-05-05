const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

const routers = require('./routes/index.routes');
const userRoutes = require('./routes/user.routes');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cors());

app.use(routers);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`🚀 Server running on port: ${port}`);
});