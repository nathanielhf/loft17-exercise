import fs from 'fs'
const imageFolder = './assets/images/home-page-carousel/'

export function indexImages() {
    const imagesHomeCarousel = {}
    let id = 0;

    fs.readdir(imageFolder, (err, files) => {
        // for each file
        files.forEach(file => {
            imagesHomeCarousel.push(id, file)
        })
        // append to json object?
        // and give it an id?
        // https://www.w3schools.com/js/js_json.asp
    })

    fs.writeFileSync('.', imagesHomeCarousel);
//   const fs = require('fs');

//   function mapFolderStructure(json) {
//       const object = JSON.parse(json);
//       const returnObject = {};
//       let currentFolder = null;
      
//       for (const key in object) {
//           returnObject[key] = {};
//           for (const item of object[key]) {
//               if (item.hasOwnProperty('Folder name')) {
//                   currentFolder = item['Folder name'];
//               }
              
//               if (currentFolder) {
//                   if (!returnObject[key][currentFolder]) returnObject[key][currentFolder] = [];
//                   returnObject[key][currentFolder].push({ Filename: item.Filename });
//               }
//           }
//       }

//       return JSON.stringify(returnObject, null, 4);
//   }

//   const inputJson = fs.readFileSync('path/to/input', 'utf8');

//   const outputJson = mapFolderStructure(inputJson);

//   fs.writeFileSync('path/to/output', outputJson);
}