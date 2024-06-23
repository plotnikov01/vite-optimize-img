# Vite optimize and change hash of img

Project helps to change the hash of images in your project and also optimize the size.

# Instructions

You need to put your assets/ folder in the src/ folder of the project. After that you can start the project to see the size of your images in the network tab of devtools.

After that you can build the project and in dist/ folder see your images with changed hash and optimized size, replace assets/ folder in src/ with assets/ in dist/ folder, run the project and recheck the quality loss, file size.

In order to control the quality loss size, you can open the vite.config.js configuration file and change the quality property.


# Usage
## To run project
```bash
npm run dev
```
## To build project
```bash
npm run build
```
## To check hash of image
```bash
md5sum "/path-to-image/*.png"
```