const sass = require('sass');
const fs = require('fs');

result = sass.renderSync({
    file: "scss/main.scss",
    outFile: "css/style.css",
    sourceMap: true,
    outputStyle: "expanded"
});

fs.writeFileSync("public/css/style.css", result.css);
fs.writeFileSync("public/css/style.css.map", result.map);
