import fs from 'fs/promises';
import path from 'path';
import { web_fetch } from '...'; // This is a placeholder for the actual web_fetch tool

const publicDir = path.join(process.cwd(), 'public');
const backupDir = path.join(publicDir, 'backup');
const port = 8080;

async function optimizeImages() {
  try {
    // Create backup directory if it doesn't exist
    await fs.mkdir(backupDir, { recursive: true });

    const files = await fs.readdir(publicDir);
    const imageFiles = files.filter(file => /\.(png|jpg|jpeg)$/i.test(file));

    for (const file of imageFiles) {
      const imageUrl = `http://localhost:${port}/${file}`;
      const filePath = path.join(publicDir, file);
      const backupFilePath = path.join(backupDir, file);

      // Backup the original image
      await fs.copyFile(filePath, backupFilePath);

      // Use web_fetch to optimize the image
      const optimizedImage = await web_fetch({
        url: `http://api.resmush.it/ws.php?img=${imageUrl}`
      });

      // Save the optimized image
      await fs.writeFile(filePath, optimizedImage);

      console.log(`Optimized and backed up: ${file}`);
    }
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();