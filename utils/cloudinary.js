const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
  });
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Project', // Change this to your desired folder name
        format: async (req, file) => 'jpg', // You can change the format if needed
    },
});



  
  
  module.exports = multer({ storage });