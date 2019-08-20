const imagemin = require('imagemin');
//压缩jpg
const imageminJpegtran = require('imagemin-jpegtran'); 
//压缩png
const imageminPngquant = require('imagemin-pngquant');
//压缩jpeg
const imageminMozjpeg = require('imagemin-mozjpeg');
//压缩webp
const imageminWebp = require('imagemin-webp');

(async () => {
    const files = await imagemin(['image/*.{jpg,png,jpeg,webp}'], {
        destination: 'build/images',
        plugins: [
            imageminJpegtran({
                quality: [0.5, 0.6]
            }),
            imageminPngquant({
                quality: [0.5, 0.6]
            }),
            // imageminMozjpeg({
            //     quality: [0.5, 0.6]
            // }),
            // imageminWebp({
            //     quality: 85
            // })
        ]
    });

    console.log(files);
})();
  

