const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Create a zip file of the project
const output = fs.createWriteStream('gebeya-project.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', function() {
  console.log('Project archived! Size: ' + archive.pointer() + ' total bytes');
  console.log('Download the gebeya-project.zip file and extract it to your local machine');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Add all project files except node_modules and dist
archive.glob('**/*', {
  ignore: ['node_modules/**', 'dist/**', '*.zip', '.git/**']
});

archive.finalize();