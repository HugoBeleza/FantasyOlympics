import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

const League = ({ info }) => (
    <Layout>
        <Head>
            <title>League Homepage</title>
        </Head>
        <h1>{info.id}</h1>
        <h2>
            <Link href="/">Back to Olimpic Center</Link>
        </h2>
    </Layout>
);

export default League;

export async function getStaticPaths() {
    const paths = ['1'];

    return { paths, fallback: false };
}

export async function getStaticProps({ params = {} }) {
    return { props: { info: params } };
}