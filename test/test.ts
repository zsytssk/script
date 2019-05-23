import { calcClosestDepth, getFileInfo } from '../src/ls/pathUtil';

calcClosestDepth('.vscode/launch.json', '.vscode');
console.log(
    calcClosestDepth(
        'D:\\zsytssk\\github\\script\\src\\ls\\saddasasd',
        'D:\\zsytssk\\github\\script\\src\\ls\\',
    ),
);

getFileInfo('D:\\zsytssk\\github\\script\\src\\ls\\asyncUtil.ts');
getFileInfo('D:\\zsytssk\\github\\script\\src\\ls\\');
