import mongoose from 'mongoose';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
    console.log("Database URL: " + process.env.DATABASE_URL);
}
mongoose.connect(process.env.DATABASE_URL, {
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

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB error:', error);
});

export default db; // Export the database connection to be used by the Express server