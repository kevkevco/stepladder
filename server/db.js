import { connect, connection } from 'mongoose';
connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connection established');
        // Additional logic to execute upon successful connection can go here
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const db = connection;

db.on('error', (error) => {
    console.error('MongoDB error:', error);
});

module.exports = db; // Export the database connection to be used by the Express server