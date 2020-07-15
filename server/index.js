import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from 'router.js';

const server = express();

server.use(cors())

server.use('/', express.static(path.join(__dirname, '../build')));
server.use('/public', express.static(path.join(__dirname, '../public')));

server.use(bodyParser.json());

server.use('/api/v1', router)

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server is listening on port ${port}`));
