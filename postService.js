import Post from "./post.js";
import FileService from "./fileService.js";

class PostService {

	async create(body, picture) {
		const fileName = await FileService.saveFile(picture)
		const createdPost = await Post.create({...body, picture: fileName});

		return createdPost;
	}
	
	async findAll() {
			const allPosts = await Post.find();

			return allPosts;
	}

	async findById(id) {

			const post = await Post.findById(id);

			if (!post) throw new Error('Post not found.')

			return post;
		} 

	async updateById(id, body) {

			if (!id) {
				throw new Error('No post ID provided.')
			}

			const updatedPost = await Post.findByIdAndUpdate(id, body, { new: true });

			if (!updatedPost) {
				throw new Error('Post not found')
			}

			return updatedPost;
		
	}

	async deleteById(id) {

			if(!id) {throw new Error('No post ID provided.')}

			const deletedPost = await Post.findByIdAndDelete(id);

			if (!deletedPost) {
				throw new Error('Post not found.')
			}

			return deletedPost;
		}

}	




export default new PostService