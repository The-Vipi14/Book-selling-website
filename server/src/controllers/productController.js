import Product from "../models/ProductModel.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const createProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    const { title, author, publisher, description, price, discountPrice, category } = req.body;

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "bookstore/products",
      transformation: [
        { width: 800, height: 1200, crop: "limit" },
        { quality: "auto", fetch_format: "auto" }
      ]
    });

    fs.unlinkSync(req.file.path); // delete temp file

    const product = await Product.create({
      title: title.trim(),
      author: author.trim(),
      publisher: publisher.trim(),
      description: description.trim(),
      price: parseFloat(price),
      discountPrice: discountPrice ? parseFloat(discountPrice) : undefined,
      category,
      image: result.secure_url,
      public_id: result.public_id  // optional: for future delete/update
    });
    
    console.log("created");

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product
    }); 

  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    console.error("Create Product Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server error"
    });
  }
};



// get all products

export const getAllProducts = async (req, res)=>{
  try {
    const products = await Product.find().sort({
      createdAt:-1
    });
    res.status(200).json({success:true, products});

  } catch (error) {
    res.status(500).json({success:false, message:error.message});
  }
};
