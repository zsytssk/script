import * as path from 'path';
import * as tsParser from 'recast/parsers/typescript';
import * as recast from 'recast';

import { readFile } from './ls/asyncUtil';
import { write } from './ls/write';
import { stringify } from './utils/stringify';

// common.unit_price common.total_price common.count
let keyList = ['all', 'select_all_options'];
const distFileName = 'common';
const srcFileName = 'common';
const distFolder = '/Users/zsy/Documents/zsytssk/job/website-wap/src/i18n';
const srcFolder = '/Users/zsy/Documents/zsytssk/job/website-v2/packages/user/public/locales';

async function main() {
  const langList = ['en', 'ja', 'ko', 'vi', 'zh-Hans', 'zh-Hant'];
  const map = {} as { [key: string]: { [key: string]: string } };
  for (const lang of langList) {
    const file = path.resolve(distFolder, lang, `${distFileName}.ts`);
    const oriObj = await parseFileCon(file);
    const con = mapObj(oriObj);
    const distCon: any = {};
    for (const keyItem of keyList) {
      let distKey = (keyItem as unknown) as string;
      let srcKey = (keyItem as unknown) as string;
      if (Array.isArray(keyItem)) {
        distKey = keyItem[0];
        srcKey = keyItem[1];
      }
      distCon[srcKey as string] = con[distKey as string] || findKey(con, distKey);
    }
    map[lang] = distCon;
  }

  for (const lang of langList) {
    const file = path.resolve(srcFolder, lang, `${srcFileName}.json`);
    let obj = {} as any;
    try {
      const content = await readFile(file);
      obj = JSON.parse(content);
    } catch {}
    const newObj = map[lang];
    for (const key of Object.keys(newObj)) {
      obj[key] = newObj[key];
    }

    await write(file, stringify(obj, Number.MAX_SAFE_INTEGER, 1));
  }
}

setTimeout(() => main());

function findKey(content: any, key: string) {
  const keyArr = key.split('.');
  let result = content;
  for (const item of keyArr) {
    if (!result[item]) {
      result = null;
      break;
    }
    result = result[item];
  }
  return result;
}

const map = {} as { [key: string]: any };
async function parseFileCon(file: string) {
  if (map[file]) {
    return map[file];
  }
  const source = await readFile(file);
  const ast = recast.parse(source, { parser: tsParser });
  const item = ast.program.body[0].declaration;
  var a = eval(`JSON.stringify(${recast.print(item).code})`);
  map[file] = JSON.parse(a);
  return map[file];
}

function mapObj(oriObj: any, prefix = '', newObj = {} as any) {
  for (const key of Object.keys(oriObj)) {
    const value = oriObj[key];
    if (typeof value === 'string') {
      newObj[prefix + key] = value;
    } else {
      mapObj(value, `${prefix}${key}_`, newObj);
    }
  }

  return newObj;
}
