import express from 'express';
import controller from '../controllers/posts.controller';
const router = express.Router();

router.get('/getPosts', controller.getPosts);
router.post('/addPost', controller.addPost);
router.put('/updatePost', controller.updatePostByOwner);
router.delete('/deletePost', controller.deletePostByOwner);


export default { router };