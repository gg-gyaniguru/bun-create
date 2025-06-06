import {twMerge as unique} from 'tailwind-merge';
import {clsx as logic} from 'clsx';

const tailwindcss = (...style) => {
    return unique(logic(...style));
}

export default tailwindcss;