import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Banner } from "../components/Banner";
import { Cards } from "../components/Cards";

const Home: NextPage = () => {
    return (
        <>
            <Layout title="EzmindCommerce - Home">
                <Banner />
                <Cards className="mt-8 sm:-mt-48" />
            </Layout>
        </>
    );
};

export default Home;
