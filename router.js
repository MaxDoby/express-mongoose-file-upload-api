import { Router } from "express";
import PostController from "./postController.js";

const router = new Router()

router.post('/posts', PostController.create)

router.get('/posts', PostController.findAll)

router.put('/posts/id/:id', PostController.updateById);


router.get('/posts/id/:id', PostController.findById)



router.delete('/posts/id/:id', PostController.deleteById)

export default router