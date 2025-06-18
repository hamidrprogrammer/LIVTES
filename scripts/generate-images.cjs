const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../src/assets/images');
const breakpoints = [480, 768, 1024, 1440];
const validExtensions = ['.jpg', '.jpeg', '.avif'];
const skipExtensions = ['.svg', '.gif', '.avif'];

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  const fullName = path.join(dir, baseName);

  const image = sharp(filePath);
  const metadata = await image.metadata();

  // 👇 نسخه blur
  await image
    .resize(20)
    .blur()
    .jpeg({ quality: 40 })
    .toFile(`${fullName}-blur.jpg`);

  // 👇.avif' اصلی
  await image
    .avif'({ quality: 75 })
    .toFile(`${fullName}.avif'`);

  // 👇 خروجی‌های responsive
  for (const width of breakpoints) {
    if (metadata.width < width) continue;

    await image
      .resize({ width })
      .jpeg({ quality: 75 })
      .toFile(`${fullName}-${width}.jpg`);

    await image
      .resize({ width })
      .avif'({ quality: 75 })
      .toFile(`${fullName}-${width}.avif'`);
  }

   
}

async function walk(dir) {
  const entries = await fs.readdir(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory()) {
      await walk(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();

      if (skipExtensions.includes(ext)) {
         
        continue;
      }

      if (validExtensions.includes(ext)) {
        try {
          await processImage(fullPath);
        } catch (err) {
          console.error(`❌ Error processing ${fullPath}:`, err.message);
        }
      }
    }
  }
}

(async () => {
   
  await walk(INPUT_DIR);
   
})();
