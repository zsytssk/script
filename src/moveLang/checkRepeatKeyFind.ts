import * as path from 'path';
import * as tsParser from 'recast/parsers/typescript';
import * as recast from 'recast';

import { readFile } from './ls/asyncUtil';
import { write } from './ls/write';
import { stringify } from './utils/stringify';
import { replace } from './checkRepeatKeyReplace';

// common.unit_price common.total_price common.count
const srcFolder = '/Users/zsy/Documents/zsytssk/job/website-v2/packages/user/public/locales';

async function main() {
  const langList = ['en', 'ja', 'ko', 'vi', 'zh-Hans', 'zh-Hant'];
  const file = path.resolve(srcFolder, 'en', 'user.json');
  const con = await import(file);
  const keys = Object.keys(con);
  const values = Object.values(con);

  const repeatArr = values
    .filter((item, index) => {
      return values.indexOf(item) !== index;
    })
    .filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    });

  const arrMap: Map<string, Array<string>> = new Map();
  for (const item of repeatArr) {
    const arr = [] as string[];
    for (const [index, valueItem] of values.entries()) {
      if (valueItem === item) {
        arr.push(keys[index]);
      }
    }
    arrMap.set(item as string, arr);
  }

  // console.log(`test:>`, arrMap);
  const checkFile = path.resolve(srcFolder, 'zh-Hans', 'user.json');
  const checkCon = await import(checkFile);
  for (const [key, value] of arrMap) {
    let isCheck = true;
    let val: string = '';
    for (const item of value) {
      if (!val) {
        val = checkCon[item];
      }
      if (checkCon[item] !== val) {
        isCheck = false;
        console.log(`test:>`, item, checkCon[item], val);
        // break;
      }
    }
    if (!isCheck) {
      // console.log(`test:>`, key);
      // arrMap.delete(key);
    }
  }
  // console.log(`test:>`, arrMap);
  // await replace(arrMap);
}
main();
