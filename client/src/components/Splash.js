'use client'

import {useEffect, useState} from 'react';
import {AnimatePresence as Motion, motion} from 'motion/react';
import tw from '@/utilities/tailwindcss';

const Splash = () => {

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const active = setTimeout(() => setToggle(false), 900);
        return () => clearTimeout(active);
    }, []);

    return (
        <>
            <Motion>
                {
                    toggle &&
                    <motion.div
                        className={tw('w-dvw h-dvh fixed left-0 right-0 z-[999999]')}
                        transition={{duration: .15, ease: 'easeInOut'}}
                        initial={{top: '0dvh'}}
                        animate={{top: '0dvh'}}
                        exit={{top: '-100dvh'}}
                    >
                        <div className={tw('w-full h-full flex items-center justify-center bg-neutral-900')}>
                            <div className={tw('')}>
                                client
                            </div>
                        </div>
                    </motion.div>
                }
            </Motion>
        </>
    );
};

export default Splash;