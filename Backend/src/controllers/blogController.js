import { Blog } from "../models/blog.js";
import AdminUser from "../models/adminUser.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";
import mongoose from "mongoose";

export const createBlog = asyncHandler(async (req, res, next) => {
  const {
    author_id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    meta_title,
    meta_description,
    tags,
    categories,
    status,
  } = req.body;

  if (!author_id || !title || !content || !slug) {
    return next(
      new ErrorResponse("Author ID, title, content, and slug are required", 400)
    );
  }

  if (!mongoose.Types.ObjectId.isValid(author_id)) {
    return next(new ErrorResponse("Invalid author ID", 400));
  }

  const existing = await Blog.findOne({
    $or: [{ slug: slug.toLowerCase() }, { title: title.trim() }],
  });

  if (existing) {
    const conflictField =
      existing.slug === slug.toLowerCase() ? "Slug" : "Title";
    return next(
      new ErrorResponse(
        `${conflictField} already exists. Please choose a different one.`,
        409
      )
    );
  }
  const author = await AdminUser.findById(author_id);

  if (!author) {
    return next(new ErrorResponse("Author not found", 404));
  }

  if (
    author.roleType !== "superadmin" &&
    !author.modules.includes("Blog") &&
    author.status !== "active"
  ) {
    return next(
      new ErrorResponse("Author does not have permission to create blogs", 401)
    );
  }

  const blog = new Blog({
    author_id: author._id,
    author: author.name,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    meta_title,
    meta_description,
    tags,
    categories,
    status,
  });
  await blog.save();

  return res.status(201).json({
    success: true,
    data: blog,
  });
});

export const getAllBlogs = asyncHandler(async (req, res, next) => {
  const blogs = await Blog.find().sort({ created_at: -1 });
  return res.status(200).json({
    success: true,
    data: blogs,
  });
});

export const getBlogById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (!blog) {
    return next(new ErrorResponse("Blog not found", 404));
  }
  return res.status(200).json({
    success: true,
    data: blog,
  });
});

export const updateBlog = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const {
    author_id,
    title,
    slug,
    excerpt,
    content,
    featured_image,
    meta_title,
    meta_description,
    tags,
    categories,
    status,
  } = req.body;

  if (!author_id) {
    return next(new ErrorResponse("Author ID is required", 400));
  }

  if (!mongoose.Types.ObjectId.isValid(author_id)) {
    return next(new ErrorResponse("Invalid author ID", 400));
  }
  const blog = await Blog.findById(id);
  if (!blog) {
    return next(new ErrorResponse("Blog not found", 404));
  }

  const existing = await Blog.findOne({
    $or: [{ slug: slug?.toLowerCase() }, { title: title?.trim() }],
    _id: { $ne: blog._id },
  });

  if (existing) {
    const conflictField =
      existing.slug === slug.toLowerCase() ? "Slug" : "Title";
    return next(
      new ErrorResponse(
        `${conflictField} already exists. Please choose a different one.`,
        409
      )
    );
  }

  const author = await AdminUser.findById(author_id);

  if (!author) {
    return next(new ErrorResponse("Author not found", 404));
  }

  if (
    author.roleType !== "superadmin" &&
    !author.modules.includes("Blog") &&
    author.status !== "active"
  ) {
    return next(
      new ErrorResponse("Author does not have permission to update blogs", 401)
    );
  }

  blog.author_id = author._id;
  blog.author = author.name;
  if (title) blog.title = title;
  if (slug) blog.slug = slug.toLowerCase();
  if (excerpt) blog.excerpt = excerpt;
  if (content) blog.content = content;
  if (featured_image) blog.featured_image = featured_image;
  if (meta_title) blog.meta_title = meta_title;
  if (meta_description) blog.meta_description = meta_description;
  if (tags) blog.tags = tags;
  if (categories) blog.categories = categories;
  if (status) blog.status = status;
    blog.updated_at = Date.now();
    await blog.save();

  return res.status(200).json({
    success: true,
    data: blog,
  });
});

export const deleteBlog = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { author_id } = req.body;

  if (!author_id) {
    return next(new ErrorResponse("Author ID is required", 400));
  }

  if (!mongoose.Types.ObjectId.isValid(author_id)) {
    return next(new ErrorResponse("Invalid author ID", 400));
  }

  const author = await AdminUser.findById(author_id);

  if (!author) {
    return next(new ErrorResponse("Author not found", 404));
  }

  if (
    author.roleType !== "superadmin" &&
    !author.modules.includes("Blog") &&
    author.status !== "active"
  ) {
    return next(
      new ErrorResponse("Author does not have permission to delete blogs", 401)
    );
  }

  const blog = await Blog.findByIdAndDelete(id);

  if (!blog) {
    return next(new ErrorResponse("Blog not found", 404));
  }

  return res.status(200).json({
    success: true,
    data: {},
  });
});
