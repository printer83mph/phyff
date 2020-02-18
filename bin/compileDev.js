const sass = require('sass');
const fs = require('fs');

const result = sass.renderSync({
	file: "scss/main.scss",
	outFile: "src/index.css",
	sourceMap: true,
	outputStyle: "expanded"
});

fs.writeFileSync("src/index.css", result.css);
fs.writeFileSync("src/index.css.map", result.map);