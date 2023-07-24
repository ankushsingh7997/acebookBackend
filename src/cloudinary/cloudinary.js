const cloudinary = require('cloudinary').v2;
const sharp = require('sharp'); // Import the sharp library
const fs = require('fs');
const util = require('util');
require('dotenv').config();

const writeFileAsync = util.promisify(fs.writeFile);
const mkdirAsync = util.promisify(fs.mkdir);


cloudinary.config({ 
  cloud_name: 'djqgmtozb', 
  api_key: '873176939388955', 
  api_secret:process.env.cloudinary_secretId,
});


const uploadImage = async (image) => {
  try {
    
    const file = image;

    // Resize the image to a maximum width of 800 pixels (you can adjust this as needed)
    const resizedImageBuffer = await sharp(file.path)
      .resize({ width: 800 })
      .jpeg({ quality: 80 }) // You can adjust the quality value to control the compression level
      .toBuffer();

    // Create the 'temp' directory if it doesn't exist
    if (!fs.existsSync('./temp')) {
      await mkdirAsync('./temp');
    }

    // Save the resized image buffer to a temporary file
    const tempFilePath = `./temp/${Date.now()}_resized_image.jpg`;
    await writeFileAsync(tempFilePath, resizedImageBuffer);

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    // Upload the resized image from the temporary file to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(tempFilePath, options);

    // Delete the temporary file after uploading to Cloudinary
    fs.unlinkSync(tempFilePath);

    return uploadResult.url;
  } catch (err) {
    console.log(err);
    throw err; // Rethrow the error to handle it in the calling code
  }
};

module.exports = { uploadImage };

