import fs from 'fs'
import path from 'path'
// const fs = require('fs');

export function indexImages() {
  const imageFolder = './assets/images/home-page-carousel/'
  const imagesHomeCarousel = {}
  const imagesArray = []  

  fs.readdir(imageFolder, (err, files) => {
    files.forEach(file => {
      imagesArray.push(path.resolve(file))
    })

    //Object.assign(imagesHomeCarousel, imagesArray)

    const outputPath =  './assets/images-home-carousel.json'

    if (fs.existsSync(outputPath))  {fs.unlinkSync(outputPath)}

    const outputJSON = JSON.stringify(imagesArray, null, 2)
    fs.writeFile(outputPath, outputJSON, (err) => {
      console.log(err)
    });
  })
}