/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

/**
 * Creates a package.json file with specific content based on the package type.
 * @param {string} pkgType - The package type. Possible values: 'cjs' or 'mjs'.
 */
function createPackageJson(pkgType) {
  let packageJsonPath;
  let packageJsonContent;

  if (pkgType === 'cjs') {
    // Set packageJsonPath for CommonJS package
    packageJsonPath = path.join(__dirname, 'dist', 'cjs', 'node', 'package.json');
    packageJsonContent = {
      type: 'commonjs'
    };
  }

  if (pkgType === 'mjs') {
    // Set packageJsonPath for ES module package
    packageJsonPath = path.join(__dirname, 'dist', 'mjs', 'src', 'package.json');
    packageJsonContent = {
      type: 'module'
    };
  }

  // Convert packageJsonContent to a formatted JSON string
  const packageJsonData = JSON.stringify(packageJsonContent, null, 2);

  // Write package.json file
  fs.writeFile(packageJsonPath, packageJsonData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing package.json:', err);
    } else {
      console.log('package.json created in "' + packageJsonPath + '" successfully!');
    }
  });
}


createPackageJson('cjs');
createPackageJson('mjs');
