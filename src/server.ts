/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import './database'; // important to add this here...
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

// Global Error middwares
app.use(
  (err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      // eslint-disable-next-line prettier/prettier
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
