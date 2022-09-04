const express = require('express');
require('dotenv').config();
const axios = require('axios');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './client/dist')));
app.use(express.json());

app.get('/products', (req, res) => {
  axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products',
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.get('/productid', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${req.query.id}`,
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.get('/related', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${req.query.id}/related`,
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.get('/styles', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${req.query.id}/styles`,
    headers: {
      Authorization: process.env.API_KEY,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.get('/products/:product_id', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp${req.originalUrl}`,
    headers: {
      Authorization: `${process.env.API_KEY}`,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.get('/products/:product_id/styles', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp${req.originalUrl}`,
    headers: {
      Authorization: `${process.env.API_KEY}`,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.post('/cart', (req, res) => {
  axios({
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/cart',
    data: req.body,
    headers: {
      Authorization: `${process.env.API_KEY}`,
    },
  })
    .then(() => { res.sendStatus(201); console.log('Success!'); })
    .catch(() => res.sendStatus(500));
});

app.get('/cart', (req, res) => {
  axios({
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/cart',
    headers: {
      Authorization: `${process.env.API_KEY}`,
    },
  })
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});

app.get('/reviews/meta/', (req, res) => {
  console.log(req)
  const { product_id } = req.query.product_id;
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp${req.originalUrl}`,
    headers: {
      Authorization: `${process.env.API_KEY}`,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

// Route for getting questions object
app.get('/qa/questions/:product_id/:page/:count', (req, res) => {
  // eslint-disable-next-line camelcase
  const { product_id } = req.params;
  const { page } = req.params;
  const { count } = req.params;
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions?product_id=${product_id}&page=${page}&count=${count}`,
    headers: {
      Authorization: `${process.env.API_KEY}`,
    },
  })
    .then((repsonse) => { res.send(repsonse.data); })
    .catch((err) => { res.send((err)); });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`);
});
