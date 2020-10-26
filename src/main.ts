import * as path from 'path';
import { cp } from './ls/main';
import { walk } from './ls/walk';

const target = '/Users/zsy/Documents/zsytssk/job/baccarat-client';
const dist = '/Users/zsy/Documents/language/baccarat';
async function main() {
    const files = await walk(target, { includes: ['src', 'laya'] });
    for (const item of files) {
        const rel_path = path.relative(target, item);
        const dist_item = path.resolve(dist, rel_path);
        if (item.toLowerCase().indexOf('chinese') !== -1) {
            await cp(item, dist_item);
        }
    }
}
main();
