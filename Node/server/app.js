import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import http from 'http';

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'The magic is coming, wait for it'
  })
);


const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

export default app;
