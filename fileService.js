import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
	async saveFile(file) {
		try{
			const extension = path.extname(file.name);
			const fileName = uuid.v4() + extension;
			const filePath = path.resolve('static', fileName);
			await file.mv(filePath);
			return fileName;
		} catch (e) {
			console.log(e);			
		}
	}
}

export default new FileService();