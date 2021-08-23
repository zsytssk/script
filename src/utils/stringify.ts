let indent_str = `  `;
export function setIndentStr(tab = '  ') {
    if (tab) {
        indent_str = tab;
    }
}
export function stringify(obj: any, deep: number = 0, indent = 1) {
    if (deep === 0 || deep < 0) {
        return jsonStringify(obj);
    }

    if (obj instanceof Array) {
        return stringifyArray(obj, deep, indent);
    } else if (typeof obj === 'object') {
        return stringifyObject(obj, deep, indent);
    } else {
        return jsonStringify(obj);
    }
}

function stringifyArray(array: any[], deep: number, indent = 1) {
    if (deep === 0) {
        return jsonStringify(array);
    }

    let result = `[\n`;
    for (let i = 0; i < array.length; i++) {
        result += indent_str.repeat(indent);
        result += stringify(array[i], deep - 1, indent + 1);

        if (i !== array.length - 1) {
            result += `,`;
        }
        result += `\n`;
    }
    result += indent_str.repeat(indent - 1);
    result += `]`;
    return result;
}

function stringifyObject(obj: AnyObj, deep: number, indent = 1) {
    if (deep === 0) {
        return jsonStringify(obj);
    }
    let result = `{\n`;
    indent = indent || 1;

    if (obj === null) {
        return 'null';
    }

    let keys = Object.keys(obj);
    keys = keys.filter((key) => {
        return obj[key] !== undefined;
    });
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const item = obj[key];
        result += indent_str.repeat(indent);
        result += `"${key}": ${stringify(item, deep - 1, indent + 1)}`;

        if (i !== keys.length - 1) {
            result += `,`;
        }
        result += `\n`;
    }
    result += indent_str.repeat(indent - 1);
    result += `}`;

    return result;
}

function jsonStringify(o: Object | null) {
    if (o === undefined) {
        o = null;
    }
    return JSON.stringify(o);
}
