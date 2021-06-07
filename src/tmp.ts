import * as path from 'path';
import { cp } from './ls/main';
import { walk } from './ls/walk';

const src = '/Users/zsy/Documents/zsytssk/job/website/src/containers/Match';
const dist =
    '/Users/zsy/Documents/zsytssk/job/dapp-website/src/containers/Match';

async function main() {
    const files = await walk(src, { ignore: ['Contract', 'Layout.tsx'] });
    for (const file of files) {
        if (file.indexOf('.less') !== -1) {
            continue;
        }

        const relPath = path.relative(src, file);
        const distFile = path.resolve(dist, relPath);
        await cp(file, distFile);
        console.log(`test:>`, distFile);
    }
}

main();
