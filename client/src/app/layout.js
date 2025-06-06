import './global.css';
import {JetBrains_Mono} from 'next/font/google';
import tw from '@/utilities/tailwindcss';
import Query from '@/providers/Query';
import Store from '@/providers/Store';
import Apollo from '@/providers/Apollo';
import State from '@/providers/State';
import Splash from '@/components/Splash';
import Sonner from '@/utilities/sonner.js';

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const metadata = {
    title: 'client',
    description: 'client',
};

const Layout = ({children}) => {
    return (
        <>
            <html lang={'en'}>
                <body className={tw('text-white bg-neutral-950', jetBrainsMono.className)}>
                    <Query>
                        <Apollo>
                            <Store>
                                <State>
                                    <Splash/>
                                    <Sonner richColors={true} position={'top-right'} expand={true} mobileOffset={{left: '5%', top: '1.5rem', right: '5%'}} offset={{left: '5%', top: '1.5rem', right: '5%'}} duration={1500} gap={10}/>
                                    {children}
                                </State>
                            </Store>
                        </Apollo>
                    </Query>
                </body>
            </html>
        </>
    );
};

export {metadata};
export default Layout;