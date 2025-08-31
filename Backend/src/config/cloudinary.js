// ------------------------------------------------Imports-----------------------------------------------------
import { v2 as cloudinary } from "cloudinary";
// ------------------------------------------------------------------------------------------------------------

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploaderCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "ThriftyThreads",
      quality: "70",
    });
    return { public_id: result.public_id, secure_url: result.secure_url };
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error("Cloudinary upload failed");
  }
};

const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    if (result.result === "ok") {
      console.log("Image deleted successfully");
    } else {
      console.log("Image deletion failed or not found:", result);
    }
    return result;
  } catch (error) {
    console.error("Delete error:", error);
    throw new Error("Cloudinary delete failed");
  }
};

const deleteMultipleFromCloudinary = async (deletedImages) => {
  try {
    const result = await cloudinary.api.delete_resources(deletedImages);
    console.log(result.deleted);
    return result;
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    throw new Error("Cloudinary delete failed");
  }
};

export {
  cloudinary,
  uploaderCloudinary,
  deleteFromCloudinary,
  deleteMultipleFromCloudinary,
};
