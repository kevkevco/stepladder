const app = require('./app');

const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`) 
});