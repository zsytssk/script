type Item = {
    id: number;
    parent_id: number | null;
};
type Tree = {
    id: number;
    parent_id: number | null;
    children: Tree[];
};
function nest(list: Item[]) {
    const treeList = [] as Tree[];
    for (const item of list) {
        const treeItem = {
            id: item.id,
            parent_id: item.parent_id,
            children: [],
        } as Tree;
        treeList.push(treeItem);
    }

    for (const item of treeList) {
        for (const otherItem of treeList) {
            if (item === otherItem) {
                continue;
            }
            if (item.id === otherItem.parent_id) {
                item.children.push(otherItem);
            }
        }
    }
    return treeList[0];
}

const arr = [
    {
        id: 1,
        parent_id: null,
    },
    {
        id: 2,
        parent_id: 1,
    },
    {
        id: 3,
        parent_id: 1,
    },
    {
        id: 4,
        parent_id: 2,
    },
    {
        id: 5,
        parent_id: 4,
    },
    {
        id: 6,
        parent_id: 5,
    },
    {
        id: 7,
        parent_id: 3,
    },
    {
        id: 8,
        parent_id: 7,
    },
];

const result = nest(arr);
console.log(result);
