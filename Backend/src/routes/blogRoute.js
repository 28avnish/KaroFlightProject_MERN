import express from 'express';
import { 
    createBlog, 
    deleteBlog, 
    getAllBlogs, 
    getBlogById, 
    updateBlog 
} from '../controllers/blogController.js';
import { verifyAdminToken } from '../middlewares/verifyAdminToken.js';

const router = express.Router();

router.use(verifyAdminToken);

router.route('/')
  .post(createBlog)
  .get(getAllBlogs);

router.route('/:id')
  .get(getBlogById)
  .patch(updateBlog)
  .delete(deleteBlog);

export default router;
