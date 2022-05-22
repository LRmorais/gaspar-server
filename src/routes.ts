import express from 'express';
import * as UserController from './controllers/user.controller';

const router = express.Router();

// user routes
router.get('/users', UserController.findAllUsers);
router.post('/signin', UserController.login);
router.post('/user', UserController.createUser);

export { router };
