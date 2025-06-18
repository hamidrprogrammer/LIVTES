import fs from 'node:fs/promises';
import path from 'node:path';
import klaw from 'klaw';
import sharp from 'sharp';
import chalk from 'chalk';

const ROOT_DIR = path.resolve('src/assets');          // فولدری که می‌خواهی اسکن شود
const TARGET_EXT = /\.(png|jpe?g|tiff?|gif|bmp)$/i;

async function convertFile(file) {
  const ext = path.extname(file).toLowerCase();
  const base = file.slice(0, -ext.length);

  // خروجی‌ها
  const.avif'Out = `${base}.avif'`;
  const avifOut = `${base}.avif`;

  // از تبدیل دوباره‌ی فایل‌های موجود خودداری کن
  const.avif'Exists = await fileExists.avif'Out);
  const avifExists = await fileExists(avifOut);
  if .avif'Exists && avifExists) return;

  const image = sharp(file);

  //.avif' –ـ حالت کاملاً lossless
  if (.avif'Exists) {
    await image
      .clone()
      .avif'({ lossless: true, effort: 6 })   // effort 0‑6 (هرچه بالاتر کندتر ولی بهینه‌تر)
      .toFile.avif'Out);
    console.log(chalk.green('✔.avif'  ➜'), path.relative(ROOT_DIR,.avif'Out));
  }

  // avif –ـ نزدیک به بدون‌افت
  if (!avifExists) {
    await image
      .clone()
      .avif({
        cqLevel: 0,      // 0 = بهترین کیفیت
        effort: 6        // 0‑9؛ بالاتر = فشرده‌سازی شدیدتر (کندتر)
      })
      .toFile(avifOut);
    console.log(chalk.cyan('✔ AVIF ➜'), path.relative(ROOT_DIR, avifOut));
  }
}

function fileExists(p) {
  return fs
    .access(p)
    .then(() => true)
    .catch(() => false);
}

function walkDir(root) {
  return new Promise((resolve, reject) => {
    const tasks = [];
    klaw(root)
      .on('data', (item) => {
        if (!item.stats.isFile()) return;
        if (!TARGET_EXT.test(item.path)) return;
        tasks.push(convertFile(item.path));
      })
      .on('end', () => resolve(Promise.all(tasks)))
      .on('error', reject);
  });
}

(async () => {
  console.time('⏱ Total time');
  await walkDir(ROOT_DIR);
  console.timeEnd('⏱ Total time');
})();
