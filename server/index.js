import path from 'path';
import express from 'express';

import router from 'router.js';

const server = express();

server.use('/', express.static(path.join(__dirname, '../build')));
server.use('/public', express.static(path.join(__dirname, '../public')));

server.use(router)

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is listening on port ${port}`));
