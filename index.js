import expreess from 'express';
import { connectDb } from './db/connectDb.js';
import { configDotenv } from 'dotenv';
import userRouter from './routes/userRoute.js';

configDotenv();


const app = expreess();
const PORT = process.env.PORT || 3000;
connectDb();
app.use(expreess.json());


app.use("/api",userRouter)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});