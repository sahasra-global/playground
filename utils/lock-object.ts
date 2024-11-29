export function lockObject<T>(obj: T, { freeze = true, seal = true, preventExtensions = true }: {
    freeze?: boolean;
    seal?: boolean;
    preventExtensions?: boolean;
} = {}): T {

    if (freeze) {
        Object.freeze(obj);
    }

    if (seal) {
        Object.seal(obj);
    }

    if (preventExtensions) {
        Object.preventExtensions(obj);
    }

    return obj;
}
