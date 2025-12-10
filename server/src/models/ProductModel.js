import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publisher: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discountPrice: {
            type: Number
        },
        category: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }, // Cloudinary URL
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;