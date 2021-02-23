export const n = 1;

const num = 10000;
const map = new Map();
console.time('map-add');
for (let i = 0; i < num; i++) {
    map.set(i, i);
}
console.timeEnd('map-add');
console.time('map-for');
for (let i = 0; i < num; i++) {
    for (const [i, item] of map) {
        if (item === i) {
            break;
        }
    }
}
console.timeEnd('map-for');
console.time('map-get');
for (let i = 0; i < num; i++) {
    map.get(i);
}
console.timeEnd('map-get');
console.time('map-delete');
for (let i = 0; i < num; i++) {
    map.delete(i);
}
console.timeEnd('map-delete');

const set = new Set();
console.time('set-add');
for (let i = 0; i < num; i++) {
    set.add(i);
}
console.timeEnd('set-add');

console.time('set-for');
for (let i = 0; i < num; i++) {
    for (const item of set) {
        if (item === i) {
            break;
        }
    }
}
console.timeEnd('set-for');

console.time('set-delete');
for (let i = 0; i < num; i++) {
    set.delete(i);
}
console.timeEnd('set-delete');

const obj = {} as any;
console.time('obj-add');
for (let i = 0; i < num; i++) {
    obj[i] = i;
}
console.timeEnd('obj-add');

console.time('obj-for');
for (let i = 0; i < num; i++) {
    for (const item in obj) {
        if (obj[item] === i) {
            break;
        }
    }
}
console.timeEnd('obj-for');
console.time('obj-get');
for (let i = 0; i < num; i++) {
    obj[i];
}
console.timeEnd('obj-get');

console.time('obj-delete');
for (let i = 0; i < num; i++) {
    delete obj[i];
}
console.timeEnd('obj-delete');

const arr = [];
console.time('arr-add');
for (let i = 0; i < num; i++) {
    arr[i] = i;
}
console.timeEnd('arr-add');

console.time('arr-for');
for (let i = 0; i < num; i++) {
    for (const item of arr) {
        if (arr[item] === i) {
            break;
        }
    }
}
console.timeEnd('arr-for');

console.time('arr-delete');
for (let i = num - 1; i >= 0; i--) {
    arr.splice(i, 1);
}
console.timeEnd('arr-delete');
