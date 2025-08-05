import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const SOURCE_IMAGE = './public/images/hero-background.jpg';
const OUTPUT_DIR = './public';

async function generateIcons() {
  try {
    // Read the source image
    const sourceBuffer = await sharp(SOURCE_IMAGE)
      .resize(512, 512, { fit: 'cover', position: 'center' })
      .toBuffer();

    // Generate PNG icons
    const sizes = [16, 32, 192, 512];
    for (const size of sizes) {
      await sharp(sourceBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(OUTPUT_DIR, `icon-${size}.png`));
      console.log(`Generated ${size}x${size} PNG icon`);
    }

    // Generate Apple Touch Icon (180x180)
    await sharp(sourceBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));
    console.log('Generated Apple Touch Icon');

    // Generate ICO file (contains 16x16, 32x32, and 48x48)
    const icoSizes = [16, 32, 48];
    const icoBuffers = await Promise.all(
      icoSizes.map(size =>
        sharp(sourceBuffer)
          .resize(size, size)
          .toFormat('png')
          .toBuffer()
      )
    );

    // Use the first buffer as the ICO file (browsers will handle multiple sizes)
    await fs.writeFile(path.join(OUTPUT_DIR, 'icon.ico'), icoBuffers[0]);
    console.log('Generated ICO file');

    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();