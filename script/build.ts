import * as path from 'path';
import { cp, mv, mvTo } from '../src/ls/main';
import { excuse } from '../src/ls/exec';
import { readdir, readFile } from '../src/ls/asyncUtil';
import { rm } from '../src/ls/rm';
import { walk } from '../src/ls/walk';
import { replaceReg } from '../src/utils/replaceReg';
import { write } from '../src/ls/write';

async function main() {
    // await rm('./dist');
    // await cp('./src', './dist');`
    // await cp('./package.json', './dist/package.json');
    await excuse('npm pack', { path: path.resolve('./dist'), output: true });
    const paths = await readdir('./dist');
    for (const file of paths) {
        if (file.indexOf('zscript') !== -1) {
            await excuse(`npm publish ${file}`, {
                path: path.resolve('./dist'),
                output: true,
            });
            break;
        }
    }
}

async function genTypes() {
    const dist = './dist';
    // await excuse('tsc', { path: path.resolve('../'), output: true });
    const files = await walk(dist);

    let ori_con: string = '';
    for (const file of files) {
        if (file.indexOf('.d.ts') != -1) {
            const modules = file.replace('.d.ts', '');
            const ori_con = await readFile(file);
            const clear_con = replaceReg(ori_con, /export declare/g, 'export');
            const end_con = `<reference path="./type.d.ts" />\n declare module "${modules}" {\n ${clear_con} \n}`;
            await write(path.resolve(file), end_con);
            const file_name = path.basename(file);
            console.log(file, file_name);
            await mvTo(file, dist);
            break;
        }
    }
}

genTypes();

// main();
