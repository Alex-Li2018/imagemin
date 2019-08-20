# 运行方式:

npm install OR yarn 

npm run test 

# 目录结构

build ---------压缩后的图片</br>
image ---------需要压缩的图片</br>
imagemin.js ---------实现压缩的代码

# 原理:

利用imagemin.js来实现图片的压缩,前提是你安装了node.js;其中对于png的图片压缩效果是最好的,在早前的一些打包构建里,也有用gulp配合imagemin来压缩图片
