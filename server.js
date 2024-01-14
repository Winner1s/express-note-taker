const express = require('express');
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.uelencoded({extended: true}));
app.use(express.json());

app.use('/api'. apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});