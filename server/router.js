import express from 'express';

import create from 'service/Transaction/create.js';
import get from 'service/Transaction/get.js';
import list from 'service/Transaction/list.js';
import getUser from 'service/User/get.js';

const router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/api/v1/docs');
})

router.get('/docs', function (req, res) {
  res.send('Doc is here: https://agileengine.bitbucket.io/fsNDJmGOAwqCpzZx/api/');
})

router.get('/transactions', list);
router.post('/transactions', create);
router.get('/transactions/:id', get);

router.get('/users/:id', getUser);

export default router;
