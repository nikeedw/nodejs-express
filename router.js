import { Router } from "express";
import Post from "./Post.js";

const router = new Router()

router.post('/posts', async (req, res) => {
	try{
		const { author, title, content, picture } = req.body;
		const post = await Post.create({author, title, content, picture});
		console.log(req.body);
		res.json(post);
	} catch(e) {
		res.status(500).json(e);
	}
});
router.get('/posts');
router.get('/posts/:id');
router.delete('/posts/:id');
router.put('posts');

export default router;