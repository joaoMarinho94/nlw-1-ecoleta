import express from 'express';

const routes = express.Router();

routes.get('/users', (req, res) =>{
  return res.status(200).json({ok: true});
})

export default routes;