import express from 'express';

const router = express.Router();

router.get('/api/v1', function (req, res) {
  res.send('Wiki home page');
})

export default router;
