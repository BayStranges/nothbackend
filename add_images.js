const fs = require('fs');
const path = require('path');

// Read the server.js file
const serverPath = path.join(__dirname, 'server.js');
let serverContent = fs.readFileSync(serverPath, 'utf8');

// Function to add image to items
function addImageToItems(content) {
  // Regex to match items
  const itemRegex = /(\{ name: '[^']+', price: '[^']+', description: '[^']*' \})/g;
  return content.replace(itemRegex, (match) => {
    if (match.includes('image:')) return match;
    return match.replace('}', ', image: \'images/logo.png\' }');
  });
}

// Apply the transformation
serverContent = addImageToItems(serverContent);

// Write back to server.js
fs.writeFileSync(serverPath, serverContent);

console.log('Images added to all menu items.');
