import * as fs from 'fs';

let cur = 1;
function test() {
    const prev = cur;

    return () => {
        return prev === cur;
    };
}

async function main() {
    const fn = test();
    cur = 2;
    console.log(fn());
}

main();
