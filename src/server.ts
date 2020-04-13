import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json()); // important to add this here...

app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
