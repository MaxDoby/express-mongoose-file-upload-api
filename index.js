import "dotenv/config";
import express from "express"
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL = process.env.DB_URL;

const app = express();


app.use(express.json());
app.use(express.static('static'))
app.use(fileUpload({}));
app.use('/api', router)

const startApp = async () => {
	try {
		if (!DB_URL) {
			throw new Error('DB_URL is not defined.');
		}

		await mongoose.connect(DB_URL)
		app.listen(PORT, () => console.log(`Server is running on `, PORT));
	} catch (error) {
		console.log(error);		
	}
}

startApp()
