// Simple packaging script for MultiTools
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📦 Packaging MultiTools...');

// Create package directory
const packageDir = 'MultiTools-Package';
if (fs.existsSync(packageDir)) {
    fs.rmSync(packageDir, { recursive: true });
}
fs.mkdirSync(packageDir);

// Copy all files
const filesToCopy = [
    'index.html',
    'about.html',
    'contact.html',
    'privacy.html',
    'disclaimer.html',
    'README.md',
    'TEST_PLAN.md',
    'css/',
    'js/'
];

filesToCopy.forEach(file => {
    const srcPath = file;
    const destPath = path.join(packageDir, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true });
        copyDirectory(srcPath, destPath);
    } else {
        fs.copyFileSync(srcPath, destPath);
    }
});

function copyDirectory(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            fs.mkdirSync(destPath, { recursive: true });
            copyDirectory(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Create zip file
try {
    execSync(`cd ${packageDir} && zip -r ../MultiTools.zip .`, { stdio: 'inherit' });
    console.log('✅ Package created: MultiTools.zip');
} catch (error) {
    console.log('⚠️  Could not create zip file. Package directory created: MultiTools-Package/');
}

console.log('🎉 Packaging complete!');
console.log('\n📋 Package contents:');
console.log('- index.html (Home page)');
console.log('- about.html (About page)');
console.log('- contact.html (Contact page)');
console.log('- privacy.html (Privacy policy)');
console.log('- disclaimer.html (Disclaimer)');
console.log('- css/styles.css (Main stylesheet)');
console.log('- js/scripts.js (Main JavaScript)');
console.log('- js/tools/ (Individual tool modules)');
console.log('- README.md (Documentation)');
console.log('- TEST_PLAN.md (Testing guide)');
console.log('\n🚀 To use: Open index.html in a web browser');
