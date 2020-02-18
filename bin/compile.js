const sass = require('sass');
const fs = require('fs');

var result = sass.renderSync({
	file: "scss/main.scss",
	outputStyle: "compressed"
});

fs.writeFileSync("src/index.css", result.css);