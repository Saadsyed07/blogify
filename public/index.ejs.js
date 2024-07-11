import ejs from  "ejs";
import fs from "fs";
import path from "path";

const viewsDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'static');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(viewsDir).forEach(file => {
  if (file.endsWith('.ejs')) {
    const template = fs.readFileSync(path.join(viewsDir, file), 'utf-8');
    const html = ejs.render(template, {});
    const outputFileName = file.replace('.ejs', '.html');
    fs.writeFileSync(path.join(outputDir, outputFileName), html);
  }
});

console.log('EJS templates rendered to static HTML files.');
