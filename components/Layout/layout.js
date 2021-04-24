/* eslint-disable react/prop-types */
import Head from 'next/head';
import Sidebar from '../Sidebar';
function Layout({ children }) {
    return (
        <div className="main">
            <Head>
                <title>Hakan`s Web site</title>
            </Head>

            <main>{children}</main>
            <Sidebar />
        </div>
    );
}

export default Layout;
