import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './routes/main.route.js';
import mongoose from "mongoose";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

const middwareError = (err, req, res, next) => {
  res.status(500).json({
    "message" : "looxi ",
    "err" : err
  })
}

app.use(middwareError);

mongoose.connect('mongodb+srv://huyhg2521:huyhg2521@cluster0.uzl3b6j.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() =>app.listen(process.env.PORT || 8080, ()=>{
      console.log('you are listening on port 8080 and connect mongodb success!')
  }))
  .catch(err => console.error(err));

