import {nanoid} from 'nanoid';

const randomize = (length = 10) => {
    return nanoid(length);
}

export default randomize;