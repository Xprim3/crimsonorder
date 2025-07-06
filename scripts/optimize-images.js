import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDirs = [
  path.join(__dirname, '../public/logo'),
  path.join(__dirname, '../src/assets/images'),
];
const outputDir = path.join(__dirname, '../public/optimized');

async function optimizeImages() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const dir of inputDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));
    for (const file of files) {
      const filePath = path.join(dir, file);
      const baseName = path.parse(file).name;
      const ext = path.parse(file).ext;
      const destBase = path.join(outputDir, baseName);

      // Optimize as WebP
      const webp = await imagemin([filePath], {
        destination: outputDir,
        plugins: [imageminWebp({ quality: 80 })],
      });
      if (webp.length) {
        fs.renameSync(webp[0].destinationPath, `${destBase}.webp`);
      }

      // Optimize as JPEG (if original is JPEG)
      if (/jpe?g/i.test(ext)) {
        const jpeg = await imagemin([filePath], {
          destination: outputDir,
          plugins: [imageminMozjpeg({ quality: 80 })],
        });
        if (jpeg.length) {
          fs.renameSync(jpeg[0].destinationPath, `${destBase}.jpg`);
        }
      }

      // Optimize as PNG (if original is PNG)
      if (/png/i.test(ext)) {
        const png = await imagemin([filePath], {
          destination: outputDir,
          plugins: [imageminPngquant({ quality: [0.7, 0.9] })],
        });
        if (png.length) {
          fs.renameSync(png[0].destinationPath, `${destBase}.png`);
        }
      }
    }
  }
  console.log('Image optimization complete!');
}

optimizeImages(); 