import Post from "./Post.js";

class PostController {
	async create(req, res) {
		try{
			const { author, title, content, picture } = req.body;
			const post = await Post.create({author, title, content, picture});
			console.log(req.body);
			res.json(post);
		} catch(e) {
			res.status(500).json(e);
		}
	}

	async getAll(req, res) {
		try {
			const posts = await Post.find(); // it will return all posts from DB
			return res.json(posts);
		} catch(e) {
			res.status(500).json(e);
		}
	}

	async getOne(req, res) {
		try {
			const { id } = req.params;
			const post = await Post.findById(id);
			if(!id) {
				res.status(400).json({message: "id is not pointed!"});
			}
			return res.json(post);
		} catch(e) {
			res.status(500).json(e);
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params;
			if(!id) {
				res.status(400).json({message: "id is not pointed!"});
			}
			const post = await Post.findByIdAndDelete(id);
			return res.json(post);
		} catch(e) {
			res.status(500).json(e);
		}
	}

	async update(req, res) {
		try {
			const post = req.body;
			if(!post._id) {
				res.status(400).json({message: "id is not pointed!"});
			}
			const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
			return res.json(updatedPost);
		} catch(e) {
			res.status(500).json(e);
		}
	}
}

// export object creating from class PostController
export default new PostController();