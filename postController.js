import PostService from './postService.js';

class PostController {
    async create(req, res) {
		try {	
			const picture = req.files?.picture;

            if (!picture) {
                return res.status(400).json('Picture is required.');
            }
			
			const post = await PostService.create(req.body, req.files.picture);

			return res.status(200).json(post);
		} catch (e) {
			return res.status(400).json(e.message)
		}
    }

    async findAll(req, res) {
		try {
			const allPosts = await PostService.findAll();

			return res.json(allPosts);
		} catch (e) {
			res.status(500).json(e)
		}
	}

    async findById(req, res) {
		try {
			const { id } = req.params;
			const post = await PostService.findById(id)

			return res.json(post);
		} catch (e) {
			res.status(404).json(e.message);
		}
	}

    async updateById(req, res) {
		try {
			const { id } = req.params
			const body = req.body;
			const updatedPost = await PostService.updateById(id, body);

			return res.json(updatedPost);
		} catch (e) {
			res.status(400).json(e.message)
		}
	}

    async deleteById(req, res) {
		try {
			const { id } = req.params;

			const deletedPost = await PostService.deleteById(id);

			return res.json(deletedPost);
		} catch (e) {
			res.status(400).json(e.message);
		}
	}
}

export default new PostController;