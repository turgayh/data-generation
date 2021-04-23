/* eslint-disable react/prop-types */
import Head from 'next/head';
import DragDrop from './DragDrop';
const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Hakans Web sit</title>
            </Head>

            <main>
                <DragDrop></DragDrop>
                {children}
            </main>
        </div>
    );
};

export default Layout;
