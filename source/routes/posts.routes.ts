import express from 'express';
import controller from '../controllers/posts.controller';
const router = express.Router();

router.get('/getPosts', controller.getPosts);

export default { router };