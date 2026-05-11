import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Vũ Toàn Thắng!');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'I am a message from Server!' });
});

app.listen(4000, () => {
  console.log('Backend Nodejs App listening on port 4000');
});
