//import fs from 'fs'
const fs = require('fs');
const { findSourceMap } = require('module');


function indexImages() {
    const imageFolder = './assets/images/home-page-carousel/'
    const imagesHomeCarousel = {}
    const imagesArray = []  

    fs.readdir(imageFolder, (err, files) => {
        // for each file
        files.forEach(file => {
            // // Object.assign(imagesHomeCarousel, file)
            // // imagesHomeCarousel.id = file
            // // id++
            // console.log(file)
            // // imagesHomeCarousel.push(file.toString)
            // let newFile = file.toString
            imagesArray.push(file)
            // might need path of file, probs relative: https://stackoverflow.com/questions/31317007/get-full-file-path-in-node-js
        })
        // append to json object?
        // and give it an id?
        // https://www.w3schools.com/js/js_json.asp
        //console.log(imagesArray)
        Object.assign(imagesHomeCarousel, imagesArray)
        // console.log(imagesHomeCarousel)
        const outputJSON = JSON.stringify(imagesHomeCarousel, null, 2)
        fs.writeFile('./assets/images/images-home-carousel', outputJSON, (err) => {
            console.log(err)
        });
    })

    
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

indexImages()