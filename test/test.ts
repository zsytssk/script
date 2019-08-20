import { cp } from '../src/compressImg/script/ls/main';
import { rm } from '../src/compressImg/script/ls/rm';

// calcClosestDepth('.vscode/launch.json', '.vscode');
// calcClosestDepth('.vscode/launch.json', '.vscode');
async function testRm() {
    const src = '\\\\169.254.252.81\\sGlory\\dlc';
    const dist = 'C:\\Users\\zhangshiyang\\Desktop\\test\\dlc';
    await cp(src, dist);
    await rm(dist);
}

testRm();
