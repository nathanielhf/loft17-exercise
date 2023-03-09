import fs from 'fs'
import path from 'path'
// const fs = require('fs');

export function indexImages() {
  const imageFolder = './public/images/home-page-carousel/'
  const imagesHomeCarousel = {}
  const imagesArray = []  

  fs.readdir(imageFolder, (err, files) => {
    files.forEach(file => {
      //console.log(path.resolve(imageFolder, file))
      //imagesArray.push(path.resolve(imageFolder, file))
      imagesArray.push(file)
      //imagesArray.push(file)
    })

    //Object.assign(imagesHomeCarousel, imagesArray)

    const outputPath =  './images-home-carousel.json'

    if (fs.existsSync(outputPath))  {fs.unlinkSync(outputPath)}

    const outputJSON = JSON.stringify(imagesArray, null, 2)
    fs.writeFile(outputPath, outputJSON, (err) => {
      console.log(err)
    });
  })
}