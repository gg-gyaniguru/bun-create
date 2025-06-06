const setKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getKey = (key) => {
    const value = localStorage.getItem(key);
    if (!value) {
        return undefined;
    }
    return JSON.parse(value);
};

const removeKey = (key) => {
    localStorage.removeItem(key);
};

export {setKey, getKey, removeKey};