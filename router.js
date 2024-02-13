import { Router } from "express";
import PostController from "./PostController.js";

const router = new Router()

router.post('/posts', PostController.create);
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.delete('/posts/:id', PostController.delete);
router.put('/posts', PostController.update);

export default router;