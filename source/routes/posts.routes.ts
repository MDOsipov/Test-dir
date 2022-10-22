import express from 'express';
import controller from '../controllers/posts.controller';
const router = express.Router();

router.get('/getPosts', controller.getPosts);
router.post('/addPost', controller.addPost);


export default { router };