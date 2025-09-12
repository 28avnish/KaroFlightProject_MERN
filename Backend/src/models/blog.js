import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  excerpt: String,
  content: { type: String, required: true },
  featured_image: String,
  author_id: { type: Schema.Types.ObjectId, ref: 'Staff', required: true },
  status: { 
    type: String, 
    enum: ['draft', 'published', 'archived'], 
    default: 'draft' 
  },
  published_at: Date,
  meta_title: String,
  meta_description: String,
  tags: [String],
  categories: [String],
  view_count: { type: Number, default: 0 },
  seo_score: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Blog = mongoose.model('Blog', blogSchema);

