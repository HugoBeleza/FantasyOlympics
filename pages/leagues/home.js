import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout';

const LeagueHome = () => (
    <Layout>
        <Head>
            <title>League Homepage</title>
        </Head>
        <h1>League Homepage</h1>
        <h2>
            <Link href="/">Back to Olimpic Center</Link>
        </h2>
    </Layout>
);

export default LeagueHome;
