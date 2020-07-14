import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/api/v1/docs');
})

router.get('/docs', function (req, res) {
  res.send('Doc is here: https://agileengine.bitbucket.io/fsNDJmGOAwqCpzZx/api/');
})

router.get('/transactions', function (req, res) {
  res.send('Wiki home page');
})

router.post('/transactions', function (req, res) {
  res.send('Wiki home page');
})

router.get('/transactions/:id', function (req, res) {
  res.send('Wiki home page');
})

export default router;
