/* eslint-disable react/prop-types */
import Head from 'next/head';
import Sidebar from '../Sidebar';
const styles = require('../../styles/layout.module.css');
function Layout({ children }) {
    return (
        <div className={styles.main}>
            <Head>
                <title>Hakan`s Web site</title>
            </Head>
            <div className={styles.content1}>
                <Sidebar />
            </div>
            <div className={styles.content2}>
                <main>{children}</main>
            </div>
        </div>
    );
}

export default Layout;
