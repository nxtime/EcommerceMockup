import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Cards } from "../components/Cards";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ezmind Ecommerce</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="">
                <Banner />
                <Cards className="mt-8 sm:-mt-48"/>
            </main>
        </>
    );
};

export default Home;
