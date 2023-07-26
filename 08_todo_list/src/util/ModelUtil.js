export function findMaxId(arr) {
    let maxId = 0;
    if (arr.length === 0) {
        return 0;
    }

    arr.forEach(item => {
        if (maxId === null || item.id > maxId) {
            maxId = item.id;
        }
    });

    return maxId;
}