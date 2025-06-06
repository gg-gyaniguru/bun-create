import {Toaster as Sonner, toast as sonner} from 'sonner';

const error = (message = 'error') => {
    sonner.error(message);
};

const success = (message = 'success') => {
    sonner.success(message);
};

export {error, success};
export default Sonner;