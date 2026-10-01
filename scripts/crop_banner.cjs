const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/Pins Teaser.jpg');
const outputPath = path.join(__dirname, '../public/images/banner-wide.jpg');

async function cropImage() {
    try {
        const metadata = await sharp(inputPath).metadata();
        const width = metadata.width;
        const height = metadata.height;

        // Crop 15% from top and 15% from bottom
        const cropTop = Math.floor(height * 0.15);
        const cropHeight = Math.floor(height * 0.70);

        await sharp(inputPath)
            .extract({ left: 0, top: cropTop, width: width, height: cropHeight })
            .toFile(outputPath);

        console.log(`Cropped image saved to ${outputPath}`);
    } catch (error) {
        console.error('Error cropping image:', error);
    }
}

cropImage();
