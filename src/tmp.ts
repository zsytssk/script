import * as archiver from 'archiver';
import * as fs from 'fs';

//被打包文件
const files = ['bin/0.png', 'bin/1.png'];

const zipPath = 'test.zip';
//创建一最终打包文件的输出流
const output = fs.createWriteStream(zipPath);
//生成archiver对象，打包类型为zip
const zipArchiver = archiver('zip', { forceLocalTime: false });
//将打包对象与输出流关联
zipArchiver.pipe(output);
for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
    //将被打包文件的流添加进archiver对象中
    zipArchiver.append(fs.createReadStream(files[i]), { name: files[i] });
}
//打包
zipArchiver.finalize();
