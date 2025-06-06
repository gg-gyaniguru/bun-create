import {cookies} from 'next/headers';

const isCookies = async (key) => {
    const {has} = await cookies();
    return has(key);
}

const setCookies = async (key, value) => {
    const {set} = await cookies();
    set(key, value);
}

const getCookies = async (key) => {
    const {get} = await cookies();
    return get(key);
}

const removeCookies = async (key) => {
    const {delete: remove} = await cookies();
    remove(key);
}

export {isCookies, setCookies, getCookies, removeCookies};