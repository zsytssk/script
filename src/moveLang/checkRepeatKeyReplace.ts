import * as path from 'path';
import * as tsParser from 'recast/parsers/typescript';
import * as recast from 'recast';

import { readFile } from './ls/asyncUtil';
import { write } from './ls/write';
import { stringify } from './utils/stringify';

// common.unit_price common.total_price common.count
const srcFolder = '/Users/zsy/Documents/zsytssk/job/website-v2/packages/user/public/locales';

var repeatMap = {
  'Email Address': 'email_account',
  'Original login password': 'ori_password',
  'New login password': 'new_password',
  'In order to ensure the security of your bank account, at least one 2FA authentication method needs to be enabled. After enabling one, you may turn off the others.':
    'googleCloseVerify_con',
  'Add encryption keys to google authenticator and backup': 'googleChangeVerify_title1',
  'Open Google Authenticator and scan the QR code below, or manually enter the following key to add an authentication token.':
    'googleChangeVerify_con1',
  '*This key is used in the case of phone loss or replacement to retrieve your Google authentication. Please make sure to keep the above key backup before synchronizing your device.':
    'googleChangeVerify_con2',
  'Enter the 6-digit authentication code from Google Authenticator.': 'googleChangeVerify_title2',
  'Copy Successful': 'googleChangeVerify_copy_success',
  'Login Password': 'security_intro_loginPass',
};

export async function replace(map: Map<string, Array<string>>) {
  const langList = ['en', 'ja', 'ko', 'vi', 'zh-Hans', 'zh-Hant'];
  const result = {} as any;
  for (const lang of langList) {
    const file = path.resolve(srcFolder, lang, 'user.json');
    const con = await import(file);
    for (const [key, values] of map) {
      let value = '';
      for (const item of values) {
        if (!value) {
          value = con[item];
        }
        delete con[item];
      }
      const resultKey = repeatMap[key as keyof typeof repeatMap];
      if (con[resultKey]) {
        console.log(`test:>`, resultKey);
      } else {
        con[resultKey] = value;
      }
      result[resultKey] = map.get(key);
    }
    write(file, stringify(con, 2));
  }

  console.log(result);
}
