// import multer from 'multer';

// import Pkg from 'multer-storage-cloudinary';

// import cloudinary from '../config/cloudinary.js';

// const {cloudinaryStorage} = Pkg

// const storage = new cloudinaryStorage({
//     cloudinary,
//     params:{
//         folder:"products",
//         allowed_formats:['jpg','png','jpeg','wpeg'],
//     }
// });

// const upload = multer({storage});

// export default upload;


import multer from "multer";
import path from "path";

// Save temporarily in uploads folder
const storage = multer.diskStorage({
  destination: "uploads/", 
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

export default upload;