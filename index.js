import express from "express";
import mongoose	from 'mongoose';
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL = "mongodb+srv://user:user@cluster0.x4qr88m.mongodb.net/";

const app = express();

// module registration
app.use(express.json());
app.use(express.static('static'))
app.use(fileUpload({}));
app.use('/api', router); // endpoint

async function startApp() {
	try {
		await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
		app.listen(PORT, console.log('SERVER STARTED ON PORT ' + PORT));
	} catch(e) {
		console.log(e);
	}
}

startApp();