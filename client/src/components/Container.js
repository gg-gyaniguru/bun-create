import tw from '@/utilities/tailwindcss'

const Container = ({className, children}) => {
    return (
        <>
            <div className={tw('w-[90%] m-auto', className)}>
                {children}
            </div>
        </>
    );
};

export default Container;