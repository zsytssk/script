import * as path from 'path';
import { cpFile } from './ls/cpFile';

const distFolder = '/Users/zsy/Documents/zsytssk/job/website-v2/packages/user/public/locales';
const srcFolder = '/Users/zsy/Documents/zsytssk/job/website-v2/packages/staking/public/locales';
const langList = ['en', 'ja', 'ko', 'vi', 'zh-Hans', 'zh-Hant'];
async function main() {
  for (const lang of langList) {
    const distFile = path.resolve(distFolder, lang, `error.json`);
    const srcFile = path.resolve(srcFolder, lang, `error.json`);
    await cpFile(distFile, srcFile);
  }
}

main();
