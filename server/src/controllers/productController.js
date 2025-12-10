// import Product from '../models/ProductModel.js'

// export const createProduct = async (req, res) => {
//   try {
//     const { title, description, price, discountPrice, category } = req.body;

//     const image = req.file.path; // Cloudinary gives URL here

//     const product = await Product.create({
//       title,
//       description,
//       price,
//       discountPrice,
//       category,
//       image,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Product created successfully",
//       product
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const createProduct = async (req, res) => {
  try {
    const file = req.file;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "products"
    });

    // Delete local temp file
    fs.unlinkSync(file.path);

    res.json({
      success: true,
      imageUrl: result.secure_url
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Upload failed" });
  }
};